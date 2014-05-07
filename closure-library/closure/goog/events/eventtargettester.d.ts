/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../closure/goog/testing/asserts.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/testing/recordfunction.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.events.eventTargetTester {

    /**
     * Setup step for the test functions. This needs to be called from the
     * test setUp.
     * @param {function():!goog.events.Listenable} listenableFactoryFn Function
     *     that will return a new Listenable instance each time it is called.
     * @param {Function} listenFn Function that, given the same signature
     *     as goog.events.listen, will add listener to the given event
     *     target.
     * @param {Function} unlistenFn Function that, given the same
     *     signature as goog.events.unlisten, will remove listener from
     *     the given event target.
     * @param {Function} unlistenByKeyFn Function that, given 2
     *     parameters: src and key, will remove the corresponding
     *     listener.
     * @param {Function} listenOnceFn Function that, given the same
     *     signature as goog.events.listenOnce, will add a one-time
     *     listener to the given event target.
     * @param {Function} dispatchEventFn Function that, given the same
     *     signature as goog.events.dispatchEvent, will dispatch the event
     *     on the given event target.
     * @param {Function} removeAllFn Function that, given the same
     *     signature as goog.events.removeAll, will remove all listeners
     *     according to the contract of goog.events.removeAll.
     * @param {Function} getListenersFn Function that, given the same
     *     signature as goog.events.getListeners, will retrieve listeners.
     * @param {Function} getListenerFn Function that, given the same
     *     signature as goog.events.getListener, will retrieve the
     *     listener object.
     * @param {Function} hasListenerFn Function that, given the same
     *     signature as goog.events.hasListener, will determine whether
     *     listeners exist.
     * @param {goog.events.eventTargetTester.KeyType} listenKeyType The
     *     key type returned by listen call.
     * @param {goog.events.eventTargetTester.UnlistenReturnType}
     *     unlistenFnReturnType
     *     Whether we should check return value from
     *     unlisten call. If unlisten does not return a value, this should
     *     be set to false.
     * @param {boolean} objectListenerSupported Whether listener of type
     *     Object is supported.
     */
    function setUp(listenableFactoryFn: () => goog.events.Listenable, listenFn: Function, unlistenFn: Function, unlistenByKeyFn: Function, listenOnceFn: Function, dispatchEventFn: Function, removeAllFn: Function, getListenersFn: Function, getListenerFn: Function, hasListenerFn: Function, listenKeyType: goog.events.eventTargetTester.KeyType, unlistenFnReturnType: goog.events.eventTargetTester.UnlistenReturnType, objectListenerSupported: boolean): void;

    /**
     * Teardown step for the test functions. This needs to be called from
     * test teardown.
     */
    function tearDown(): void;

    /**
     * The type of key returned by key-returning functions (listen).
     * @enum {number}
     */
    enum KeyType { NUMBER, UNDEFINED } 

    /**
     * The type of unlisten function's return value.
     */
    enum UnlistenReturnType { BOOLEAN, UNDEFINED }

    /**
     * Expando property used on "listener" function to determine if a
     * listener has already been checked. This is what allows us to
     * implement assertNoOtherListenerIsCalled.
     * @type {string}
     */
    var ALREADY_CHECKED_PROP: string;

    /**
     * Expando property used on "listener" function to record the number
     * of times it has been called the last time assertListenerIsCalled is
     * done. This allows us to verify that it has not been called more
     * times in assertNoOtherListenerIsCalled.
     */
    var NUM_CALLED_PROP: any /*missing*/;
}

