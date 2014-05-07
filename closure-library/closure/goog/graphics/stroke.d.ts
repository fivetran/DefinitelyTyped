/// <reference path="../../../closure/goog/base.d.ts" />

declare module goog.graphics {

    /**
     * Creates an immutable stroke object.
     *
     * @param {number|string} width The width of the stroke.
     * @param {string} color The color of the stroke.
     * @constructor
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class Stroke {
        /**
         * Creates an immutable stroke object.
         *
         * @param {number|string} width The width of the stroke.
         * @param {string} color The color of the stroke.
         * @constructor
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(width: any /*number|string*/, color: string);
    
        /**
         * @return {number|string} The width of this stroke.
         */
        getWidth(): any /*number|string*/;
    
        /**
         * @return {string} The color of this stroke.
         */
        getColor(): string;
    }
}

