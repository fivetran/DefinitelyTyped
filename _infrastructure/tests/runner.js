/// <reference path="typings/tsd.d.ts" />
/// <reference path="src/exec.ts" />
/// <reference path="src/file.ts" />
/// <reference path="src/tsc.ts" />
/// <reference path="src/timer.ts" />
/// <reference path="src/util.ts" />
/// <reference path="src/index.ts" />
/// <reference path="src/changes.ts" />
/// <reference path="src/printer.ts" />
/// <reference path="src/reporter/reporter.ts" />
/// <reference path="src/suite/suite.ts" />
/// <reference path="src/suite/syntax.ts" />
/// <reference path="src/suite/testEval.ts" />
/// <reference path="src/suite/tscParams.ts" />
var DT;
(function (DT) {
    require('source-map-support').install();

    // hacky typing
    var Lazy = require('lazy.js');
    var Promise = require('bluebird');

    var os = require('os');
    var fs = require('fs');
    var path = require('path');
    var assert = require('assert');

    var tsExp = /\.ts$/;

    DT.DEFAULT_TSC_VERSION = '0.9.7';

    /////////////////////////////////
    // Single test
    /////////////////////////////////
    var Test = (function () {
        function Test(suite, tsfile, options) {
            this.suite = suite;
            this.tsfile = tsfile;
            this.options = options;
        }
        Test.prototype.run = function () {
            var _this = this;
            return DT.Tsc.run(this.tsfile.filePathWithName, this.options).then(function (execResult) {
                var testResult = new TestResult();
                testResult.hostedBy = _this.suite;
                testResult.targetFile = _this.tsfile;
                testResult.options = _this.options;

                testResult.stdout = execResult.stdout;
                testResult.stderr = execResult.stderr;
                testResult.exitCode = execResult.exitCode;

                return testResult;
            });
        };
        return Test;
    })();
    DT.Test = Test;

    /////////////////////////////////
    // Parallel execute Tests
    /////////////////////////////////
    var TestQueue = (function () {
        function TestQueue(concurrent) {
            this.queue = [];
            this.active = [];
            this.concurrent = Math.max(1, concurrent);
        }
        // add to queue and return a promise
        TestQueue.prototype.run = function (test) {
            var _this = this;
            var defer = Promise.defer();

            // add a closure to queue
            this.queue.push(function () {
                // run it
                var p = test.run();
                p.then(defer.resolve.bind(defer), defer.reject.bind(defer));
                p.finally(function () {
                    var i = _this.active.indexOf(test);
                    if (i > -1) {
                        _this.active.splice(i, 1);
                    }
                    _this.step();
                });

                // return it
                return test;
            });
            this.step();

            // defer it
            return defer.promise;
        };

        TestQueue.prototype.step = function () {
            while (this.queue.length > 0 && this.active.length < this.concurrent) {
                this.active.push(this.queue.pop().call(null));
            }
        };
        return TestQueue;
    })();
    DT.TestQueue = TestQueue;

    /////////////////////////////////
    // Test results
    /////////////////////////////////
    var TestResult = (function () {
        function TestResult() {
        }
        Object.defineProperty(TestResult.prototype, "success", {
            get: function () {
                return this.exitCode === 0;
            },
            enumerable: true,
            configurable: true
        });
        return TestResult;
    })();
    DT.TestResult = TestResult;

    /////////////////////////////////
    // The main class to kick things off
    /////////////////////////////////
    var TestRunner = (function () {
        function TestRunner(dtPath, options) {
            if (typeof options === "undefined") { options = { tscVersion: DT.DEFAULT_TSC_VERSION }; }
            this.dtPath = dtPath;
            this.options = options;
            this.suites = [];
            this.options.findNotRequiredTscparams = !!this.options.findNotRequiredTscparams;

            this.index = new DT.FileIndex(this, this.options);
            this.changes = new DT.GitChanges(this);

            this.print = new DT.Print(this.options.tscVersion);
        }
        TestRunner.prototype.addSuite = function (suite) {
            this.suites.push(suite);
        };

        TestRunner.prototype.checkAcceptFile = function (fileName) {
            var ok = tsExp.test(fileName);
            ok = ok && fileName.indexOf('_infrastructure') < 0;
            ok = ok && fileName.indexOf('node_modules/') < 0;
            ok = ok && /^[a-z]/i.test(fileName);
            return ok;
        };

        TestRunner.prototype.run = function () {
            var _this = this;
            this.timer = new DT.Timer();
            this.timer.start();

            this.print.printChangeHeader();

            // only includes .d.ts or -tests.ts or -test.ts or .ts
            return this.index.readIndex().then(function () {
                return _this.changes.readChanges();
            }).then(function (changes) {
                _this.print.printAllChanges(changes);
                return _this.index.collectDiff(changes);
            }).then(function () {
                _this.print.printRemovals(_this.index.removed);
                _this.print.printRelChanges(_this.index.changed);
                return _this.index.parseFiles();
            }).then(function () {
                if (_this.options.printRefMap) {
                    _this.print.printRefMap(_this.index, _this.index.refMap);
                }
                if (Lazy(_this.index.missing).some(function (arr) {
                    return arr.length > 0;
                })) {
                    _this.print.printMissing(_this.index, _this.index.missing);
                    _this.print.printBoldDiv();

                    // bail
                    return Promise.cast(false);
                }
                if (_this.options.printFiles) {
                    _this.print.printFiles(_this.index.files);
                }
                return _this.index.collectTargets().then(function (files) {
                    if (_this.options.testChanges) {
                        _this.print.printQueue(files);
                        return _this.runTests(files);
                    } else {
                        _this.print.printTestAll();
                        return _this.runTests(_this.index.files);
                    }
                }).then(function () {
                    return !_this.suites.some(function (suite) {
                        return suite.ngTests.length !== 0;
                    });
                });
            });
        };

        TestRunner.prototype.runTests = function (files) {
            var _this = this;
            return Promise.attempt(function () {
                assert(Array.isArray(files), 'files must be array');

                var syntaxChecking = new DT.SyntaxChecking(_this.options);
                var testEval = new DT.TestEval(_this.options);

                if (!_this.options.findNotRequiredTscparams) {
                    _this.addSuite(syntaxChecking);
                    _this.addSuite(testEval);
                }

                return Promise.all([
                    syntaxChecking.filterTargetFiles(files),
                    testEval.filterTargetFiles(files)
                ]);
            }).spread(function (syntaxFiles, testFiles) {
                _this.print.init(syntaxFiles.length, testFiles.length, files.length);
                _this.print.printHeader(_this.options);

                if (_this.options.findNotRequiredTscparams) {
                    _this.addSuite(new DT.FindNotRequiredTscparams(_this.options, _this.print));
                }

                return Promise.reduce(_this.suites, function (count, suite) {
                    suite.testReporter = suite.testReporter || new DT.DefaultTestReporter(_this.print);

                    _this.print.printSuiteHeader(suite.testSuiteName);

                    if (_this.options.skipTests) {
                        _this.print.printWarnCode('skipped test');
                        return Promise.cast(count++);
                    }

                    return suite.start(files, function (testResult) {
                        _this.print.printTestComplete(testResult);
                    }).then(function (suite) {
                        _this.print.printSuiteComplete(suite);
                        return count++;
                    });
                }, 0);
            }).then(function (count) {
                _this.timer.end();
                _this.finaliseTests(files);
            });
        };

        TestRunner.prototype.finaliseTests = function (files) {
            var _this = this;
            var testEval = Lazy(this.suites).filter(function (suite) {
                return suite instanceof DT.TestEval;
            }).first();

            if (testEval) {
                var existsTestTypings = Lazy(testEval.testResults).map(function (testResult) {
                    return testResult.targetFile.dir;
                }).reduce(function (a, b) {
                    return a.indexOf(b) < 0 ? a.concat([b]) : a;
                }, []);

                var typings = Lazy(files).map(function (file) {
                    return file.dir;
                }).reduce(function (a, b) {
                    return a.indexOf(b) < 0 ? a.concat([b]) : a;
                }, []);

                var withoutTestTypings = typings.filter(function (typing) {
                    return existsTestTypings.indexOf(typing) < 0;
                });

                this.print.printDiv();
                this.print.printTypingsWithoutTest(withoutTestTypings);
            }

            this.print.printDiv();
            this.print.printTotalMessage();

            this.print.printDiv();
            this.print.printElapsedTime(this.timer.asString, this.timer.time);

            this.suites.filter(function (suite) {
                return suite.printErrorCount;
            }).forEach(function (suite) {
                _this.print.printSuiteErrorCount(suite.errorHeadline, suite.ngTests.length, suite.testResults.length);
            });
            if (testEval) {
                this.print.printSuiteErrorCount('Without tests', withoutTestTypings.length, typings.length, true);
            }

            this.print.printDiv();

            if (this.suites.some(function (suite) {
                return suite.ngTests.length !== 0;
            })) {
                this.print.printErrorsHeader();

                this.suites.filter(function (suite) {
                    return suite.ngTests.length !== 0;
                }).forEach(function (suite) {
                    suite.ngTests.forEach(function (testResult) {
                        _this.print.printErrorsForFile(testResult);
                    });
                    _this.print.printBoldDiv();
                });
            }
        };
        return TestRunner;
    })();
    DT.TestRunner = TestRunner;

    var optimist = require('optimist')(process.argv);
    optimist.default('try-without-tscparams', false);
    optimist.default('single-thread', false);
    optimist.default('tsc-version', DT.DEFAULT_TSC_VERSION);

    optimist.default('test-changes', false);
    optimist.default('skip-tests', false);
    optimist.default('print-files', false);
    optimist.default('print-refmap', false);

    optimist.boolean('help');
    optimist.describe('help', 'print help');
    optimist.alias('h', 'help');

    var argv = optimist.argv;

    var dtPath = path.resolve(path.dirname((module).filename), '..', '..');
    var cpuCores = os.cpus().length;

    if (argv.help) {
        optimist.showHelp();
        var pkg = require('../../package.json');
        console.log('Scripts:');
        console.log('');
        Lazy(pkg.scripts).keys().each(function (key) {
            console.log('   $ npm run ' + key);
        });
        process.exit(0);
    }

    var testFull = process.env['TRAVIS_BRANCH'] ? /\w\/full$/.test(process.env['TRAVIS_BRANCH']) : false;

    new TestRunner(dtPath, {
        concurrent: argv['single-thread'] ? 1 : Math.max(Math.min(24, cpuCores), 2),
        tscVersion: argv['tsc-version'],
        testChanges: testFull ? false : argv['test-changes'],
        skipTests: argv['skip-tests'],
        printFiles: argv['print-files'],
        printRefMap: argv['print-refmap'],
        findNotRequiredTscparams: argv['try-without-tscparam']
    }).run().then(function (success) {
        if (!success) {
            process.exit(1);
        }
    }).catch(function (err) {
        throw err;
        process.exit(2);
    });
})(DT || (DT = {}));
//# sourceMappingURL=runner.js.map
