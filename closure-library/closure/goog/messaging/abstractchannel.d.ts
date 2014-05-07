/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/messaging/messagechannel.d.ts" />

declare module goog.messaging {

    /**
     * Creates an abstract message channel.
     *
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.MessageChannel}
     */
    class AbstractChannel extends goog.Disposable implements goog.messaging.MessageChannel {
        /**
         * Creates an abstract message channel.
         *
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.messaging.MessageChannel}
         */
        constructor();
    
        /**
         * Logger for this class.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
    
        /**
         * Initiates the channel connection. When this method is called, all the
         * information needed to connect the channel has to be available.
         *
         * Implementers should only require this method to be called if the channel
         * needs to be configured in some way between when it's created and when it
         * becomes active. Otherwise, the channel should be immediately active and this
         * method should do nothing but immediately call opt_connectCb.
         *
         * @param {Function=} opt_connectCb Called when the channel has been connected
         *     and is ready to use.
         */
        connect(opt_connectCb?: Function): void;
    
        /**
         * Gets whether the channel is connected.
         *
         * If {@link #connect} is not required for this class, this should always return
         * true. Otherwise, this should return true by the time the callback passed to
         * {@link #connect} has been called and always after that.
         *
         * @return {boolean} Whether the channel is connected.
         */
        isConnected(): boolean;
    
        /**
         * Registers a service to be called when a message is received.
         *
         * Implementers shouldn't impose any restrictions on the service names that may
         * be registered. If some services are needed as control codes,
         * {@link goog.messaging.MultiMessageChannel} can be used to safely split the
         * channel into "public" and "control" virtual channels.
         *
         * @param {string} serviceName The name of the service.
         * @param {function((string|!Object))} callback The callback to process the
         *     incoming messages. Passed the payload. If opt_objectPayload is set, the
         *     payload is decoded and passed as an object.
         * @param {boolean=} opt_objectPayload If true, incoming messages for this
         *     service are expected to contain an object, and will be deserialized from
         *     a string automatically if necessary. It's the responsibility of
         *     implementors of this class to perform the deserialization.
         */
        registerService(serviceName: string, callback: (_0: any /*string|Object*/) => any /*missing*/, opt_objectPayload?: boolean): void;
    
        /**
         * Registers a service to be called when a message is received that doesn't
         * match any other services.
         *
         * @param {function(string, (string|!Object))} callback The callback to process
         *     the incoming messages. Passed the service name and the payload. Since
         *     some channels can pass objects natively, the payload may be either an
         *     object or a string.
         */
        registerDefaultService(callback: (_0: string, _1: any /*string|Object*/) => any /*missing*/): void;
    
        /**
         * Sends a message over the channel.
         *
         * @param {string} serviceName The name of the service this message should be
         *     delivered to.
         * @param {string|!Object} payload The value of the message. If this is an
         *     Object, it is serialized to a string before sending if necessary. It's
         *     the responsibility of implementors of this class to perform the
         *     serialization.
         */
        send(serviceName: string, payload: any /*string|Object*/): void;
    
        /**
         * Delivers a message to the appropriate service. This is meant to be called by
         * subclasses when they receive messages.
         *
         * This method takes into account both explicitly-registered and default
         * services, as well as making sure that JSON payloads are decoded when
         * necessary. If the subclass is capable of passing objects as payloads, those
         * objects can be passed in to this method directly. Otherwise, the (potentially
         * JSON-encoded) strings should be passed in.
         *
         * @param {string} serviceName The name of the service receiving the message.
         * @param {string|!Object} payload The contents of the message.
         * @protected
         */
        deliver(serviceName: string, payload: any /*string|Object*/): void;
    
        /**
         * Find the service object for a given service name. If there's no service
         * explicitly registered, but there is a default service, a service object is
         * constructed for it.
         *
         * @param {string} serviceName The name of the service receiving the message.
         * @param {string|!Object} payload The contents of the message.
         * @return {?{callback: function((string|!Object)), objectPayload: boolean}} The
         *     service object for the given service, or null if none was found.
         * @protected
         */
        getService(serviceName: string, payload: any /*string|Object*/): { callback: (_0: any /*string|Object*/) => any /*missing*/; objectPayload: boolean };
    
        /**
         * Converts the message payload into the format expected by the registered
         * service (either JSON or string).
         *
         * @param {string} serviceName The name of the service receiving the message.
         * @param {string|!Object} payload The contents of the message.
         * @param {boolean} objectPayload Whether the service expects an object or a
         *     plain string.
         * @return {string|Object} The payload in the format expected by the service, or
         *     null if something went wrong.
         * @protected
         */
        decodePayload(serviceName: string, payload: any /*string|Object*/, objectPayload: boolean): any /*string|Object*/;
    }
}

