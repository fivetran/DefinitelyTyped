/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class BlobHasher extends BlobHasher.__Class { }
    module BlobHasher {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * Construct the hash computer.
             *
             * @param {!goog.crypt.Hash} hashFn The hash function to use.
             * @param {number=} opt_blockSize Processing block size.
             * @constructor
             * @extends {goog.events.EventTarget}
             * @final
             */
            constructor(hashFn: goog.crypt.Hash, opt_blockSize?: number);
    
            /**
             * Start the hash computation.
             * @param {!Blob} blob The blob of data to compute the hash for.
             */
            hash(blob: Blob): void;
    
            /**
             * Sets the maximum number of bytes to hash or Infinity for no limit. Can be
             * called before hash() to throttle the hash computation. The hash computation
             * can then be continued by repeatedly calling setHashingLimit() with greater
             * byte offsets. This is useful if you don't need the hash until some time in
             * the future, for example when uploading a file and you don't need the hash
             * until the transfer is complete.
             * @param {number} byteOffset The byte offset to compute the hash up to.
             *     Should be a non-negative integer or Infinity for no limit. Negative
             *     values are not allowed.
             */
            setHashingLimit(byteOffset: number): void;
    
            /**
             * Abort hash computation.
             */
            abort(): void;
    
            /**
             * @return {number} Number of bytes processed so far.
             */
            getBytesProcessed(): number;
    
            /**
             * @return {Array.<number>} The computed hash value or null if not ready.
             */
            getHash(): number[];
        }
    }
}

declare module goog.crypt.BlobHasher {

    /**
     * Event names for hash computation events
     * @enum {string}
     */
    enum EventType { STARTED, PROGRESS, THROTTLED, COMPLETE, ABORT, ERROR } 
}
