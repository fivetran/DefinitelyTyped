/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />

declare module goog.testing.fs {

    /**
     * A mock progress event.
     *
     * @param {!goog.fs.FileSaver.EventType|!goog.fs.FileReader.EventType} type
     *     Event type.
     * @param {number} loaded The number of bytes processed.
     * @param {number} total The total data that was to be processed, in bytes.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ProgressEvent extends goog.events.Event {
        /**
         * A mock progress event.
         *
         * @param {!goog.fs.FileSaver.EventType|!goog.fs.FileReader.EventType} type
         *     Event type.
         * @param {number} loaded The number of bytes processed.
         * @param {number} total The total data that was to be processed, in bytes.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: any /*goog.fs.FileSaver.EventType|goog.fs.FileReader.EventType*/, loaded: number, total: number);
    
        /**
         * @see {goog.fs.ProgressEvent#isLengthComputable}
         * @return {boolean} True if the length is known.
         */
        isLengthComputable(): boolean;
    
        /**
         * @see {goog.fs.ProgressEvent#getLoaded}
         * @return {number} The number of bytes loaded or written.
         */
        getLoaded(): number;
    
        /**
         * @see {goog.fs.ProgressEvent#getTotal}
         * @return {number} The total bytes to load or write.
         */
        getTotal(): number;
    }
}

