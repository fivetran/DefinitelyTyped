/// <reference path="../../../globals.d.ts" />
/// <reference path="./pool.d.ts" />

declare module goog.structs {

    class PriorityPool<VALUE> extends PriorityPool.__Class<VALUE> { }
    module PriorityPool {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class<VALUE> extends goog.structs.Pool.__Class<VALUE> {
    
            /**
             * A generic pool class. If max is greater than min, an error is thrown.
             * @param {number=} opt_minCount Min. number of objects (Default: 1).
             * @param {number=} opt_maxCount Max. number of objects (Default: 10).
             * @constructor
             * @extends {goog.structs.Pool.<VALUE>}
             * @template VALUE
             */
            constructor(opt_minCount?: number, opt_maxCount?: number);
        }
    }
}
