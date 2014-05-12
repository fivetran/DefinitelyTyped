/// <reference path="../../../../globals.d.ts" />
/// <reference path="./mechanism.d.ts" />
/// <reference path="../../iter/iter.d.ts" />

declare module goog.storage.mechanism {

    class IterableMechanism extends IterableMechanism.__Class { }
    module IterableMechanism {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.storage.mechanism.Mechanism.__Class {
    
            /**
             * Interface for all iterable storage mechanisms.
             *
             * @constructor
             * @extends {goog.storage.mechanism.Mechanism}
             */
            constructor();
    
            /**
             * Get the number of stored key-value pairs.
             *
             * Could be overridden in a subclass, as the default implementation is not very
             * efficient - it iterates over all keys.
             *
             * @return {number} Number of stored elements.
             */
            getCount(): number;
    
            /**
             * Returns an iterator that iterates over the elements in the storage. Will
             * throw goog.iter.StopIteration after the last element.
             *
             * @param {boolean=} opt_keys True to iterate over the keys. False to iterate
             *     over the values.  The default value is false.
             * @return {!goog.iter.Iterator} The iterator.
             */
            __iterator__(opt_keys?: boolean): goog.iter.Iterator<any>;
    
            /**
             * Remove all key-value pairs.
             *
             * Could be overridden in a subclass, as the default implementation is not very
             * efficient - it iterates over all keys.
             */
            clear(): void;
        }
    }
}
