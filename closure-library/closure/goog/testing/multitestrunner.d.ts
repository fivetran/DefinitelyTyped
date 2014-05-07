/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../closure/goog/ui/serverchart.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/ui/tablesorter.d.ts" />

declare module goog.testing {

    /**
     * A component for running multiple tests within the browser.
     * @param {goog.dom.DomHelper=} opt_domHelper A DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     * @final
     */
    class MultiTestRunner extends goog.ui._Component {
        /**
         * A component for running multiple tests within the browser.
         * @param {goog.dom.DomHelper=} opt_domHelper A DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the name for the test suite.
         * @param {string} name The suite's name.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setName(name: string): goog.testing.MultiTestRunner;
    
        /**
         * Returns the name for the test suite.
         * @return {string} The name for the test suite.
         */
        getName(): string;
    
        /**
         * Sets the basepath that tests added using addTests are resolved with.
         * @param {string} path The relative basepath.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setBasePath(path: string): goog.testing.MultiTestRunner;
    
        /**
         * Returns the basepath that tests added using addTests are resolved with.
         * @return {string} The basepath that tests added using addTests are resolved
         *     with.
         */
        getBasePath(): string;
    
        /**
         * Sets whether the report should contain verbose information for tests that
         * pass.
         * @param {boolean} verbose Whether report should be verbose.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setVerbosePasses(verbose: boolean): goog.testing.MultiTestRunner;
    
        /**
         * Returns whether the report should contain verbose information for tests that
         * pass.
         * @return {boolean} Whether the report should contain verbose information for
         *     tests that pass.
         */
        getVerbosePasses(): boolean;
    
        /**
         * Sets whether the report should contain passing tests at all, makes
         * setVerbosePasses obsolete.
         * @param {boolean} hide Whether report should not contain passing tests.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setHidePasses(hide: boolean): goog.testing.MultiTestRunner;
    
        /**
         * Returns whether the report should contain passing tests at all, makes
         * setVerbosePasses obsolete.
         * @return {boolean} Whether the report should contain passing tests at all,
         *     makes setVerbosePasses obsolete.
         */
        getHidePasses(): boolean;
    
        /**
         * Sets the bucket sizes for the histograms.
         * @param {number} f Bucket size for num files loaded histogram.
         * @param {number} t Bucket size for run time histogram.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setStatsBucketSizes(f: number, t: number): goog.testing.MultiTestRunner;
    
        /**
         * Sets the number of milliseconds to wait for the page to load, initialize and
         * run the tests.
         * @param {number} timeout Time in milliseconds.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setTimeout(timeout: number): goog.testing.MultiTestRunner;
    
        /**
         * Returns the number of milliseconds to wait for the page to load, initialize
         * and run the tests.
         * @return {number} The number of milliseconds to wait for the page to load,
         *     initialize and run the tests.
         */
        getTimeout(): number;
    
        /**
         * Sets the number of tests that can be run at the same time. This only improves
         * performance due to the amount of time spent loading the tests.
         * @param {number} size The number of tests to run at a time.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setPoolSize(size: number): goog.testing.MultiTestRunner;
    
        /**
         * Returns the number of tests that can be run at the same time. This only
         * improves performance due to the amount of time spent loading the tests.
         * @return {number} The number of tests that can be run at the same time. This
         *     only improves performance due to the amount of time spent loading the
         *     tests.
         */
        getPoolSize(): number;
    
        /**
         * Sets a filter function. Only test paths that match the filter function
         * will be executed.
         * @param {function(string): boolean} filterFn Filters test paths.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        setFilterFunction(filterFn: (_0: string) => boolean): goog.testing.MultiTestRunner;
    
        /**
         * Returns a filter function. Only test paths that match the filter function
         * will be executed.
         * @return {function(string): boolean} A filter function. Only test paths that
         *     match the filter function will be executed.
         */
        getFilterFunction(): (_0: string) => boolean;
    
        /**
         * Adds an array of tests to the tests that the test runner should execute.
         * @param {Array.<string>} tests Adds tests to the test runner.
         * @return {!goog.testing.MultiTestRunner} Instance for chaining.
         */
        addTests(tests: string[]): goog.testing.MultiTestRunner;
    
        /**
         * Returns the list of all tests added to the runner.
         * @return {Array.<string>} The list of all tests added to the runner.
         */
        getAllTests(): string[];
    
        /**
         * Returns the list of tests that will be run when start() is called.
         * @return {!Array.<string>} The list of tests that will be run when start() is
         *     called.
         */
        getTestsToRun(): string[];
    
        /**
         * Returns a list of tests from runner that have been marked as failed.
         * @return {!Array.<string>} A list of tests from runner that have been marked
         *     as failed.
         */
        getTestsThatFailed(): string[];
    
        /**
         * Starts executing the tests.
         */
        start(): void;
    
        /**
         * Logs a message to the log window.
         * @param {string} msg A message to log.
         */
        log(msg: string): void;
    
        /**
         * Processes a result returned from a TestFrame.  If there are tests remaining
         * it will trigger the next one to be run, otherwise if there are no tests and
         * all results have been recieved then it will call finish.
         * @param {goog.testing.MultiTestRunner.TestFrame} frame The frame that just
         *     finished.
         */
        processResult(frame: goog.testing.MultiTestRunner.TestFrame): void;
    }
}

declare module goog.testing.MultiTestRunner {

    /**
     * Class used to manage the interaction with a single iframe.
     * @param {string} basePath The base path for tests.
     * @param {number} timeoutMs The time to wait for the test to load and run.
     * @param {boolean} verbosePasses Whether to show results for passes.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class TestFrame extends goog.ui._Component {
        /**
         * Class used to manage the interaction with a single iframe.
         * @param {string} basePath The base path for tests.
         * @param {number} timeoutMs The time to wait for the test to load and run.
         * @param {boolean} verbosePasses Whether to show results for passes.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper.
         * @constructor
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(basePath: string, timeoutMs: number, verbosePasses: boolean, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Runs a test file in this test frame.
         * @param {string} testFile The test to run.
         */
        runTest(testFile: string): void;
    
        /**
         * @return {string} The test file the TestFrame is running.
         */
        getTestFile(): string;
    
        /**
         * @return {!Object} Stats about the test run.
         */
        getStats(): Object;
    
        /**
         * @return {string} The report for the test run.
         */
        getReport(): string;
    
        /**
         * @return {?boolean} Whether the test frame had a success.
         */
        isSuccess(): boolean;
    }

    /**
     * Default maximimum amount of time to spend at each stage of the test.
     * @type {number}
     */
    var DEFAULT_TIMEOUT_MS: number;

    /**
     * Messages corresponding to the numeric states.
     * @type {Array.<string>}
     */
    var STATES: string[];
}

