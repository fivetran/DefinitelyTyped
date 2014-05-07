/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../closure/goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredposition.d.ts" />

declare module goog.positioning {

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element. The corners are swapped if dictated by the viewport. For instance
     * if a popup is anchored with its top left corner to the bottom left corner of
     * the anchor the popup is either displayed below the anchor (as specified) or
     * above it if there's not enough room to display it below.
     *
     * When using this positioning object it's recommended that the movable element
     * be absolutely positioned.
     *
     * @param {Element} anchorElement Element the movable element should be
     *     anchored against.
     * @param {goog.positioning.Corner} corner Corner of anchored element the
     *     movable element should be positioned at.
     * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
     *     the element fits inside the viewport even if that means that the anchored
     *     corners are ignored.
     * @param {goog.math.Box=} opt_overflowConstraint Box object describing the
     *     dimensions in which the movable element could be shown.
     * @constructor
     * @extends {goog.positioning.AnchoredPosition}
     */
    class AnchoredViewportPosition extends goog.positioning.AnchoredPosition {
        /**
         * Encapsulates a popup position where the popup is anchored at a corner of
         * an element. The corners are swapped if dictated by the viewport. For instance
         * if a popup is anchored with its top left corner to the bottom left corner of
         * the anchor the popup is either displayed below the anchor (as specified) or
         * above it if there's not enough room to display it below.
         *
         * When using this positioning object it's recommended that the movable element
         * be absolutely positioned.
         *
         * @param {Element} anchorElement Element the movable element should be
         *     anchored against.
         * @param {goog.positioning.Corner} corner Corner of anchored element the
         *     movable element should be positioned at.
         * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
         *     the element fits inside the viewport even if that means that the anchored
         *     corners are ignored.
         * @param {goog.math.Box=} opt_overflowConstraint Box object describing the
         *     dimensions in which the movable element could be shown.
         * @constructor
         * @extends {goog.positioning.AnchoredPosition}
         */
        constructor(anchorElement: Element, corner: goog.positioning.Corner, opt_adjust?: boolean, opt_overflowConstraint?: goog.math.Box);
    
        /**
         * @return {goog.math.Box|undefined} The box object describing the
         *     dimensions in which the movable element will be shown.
         */
        getOverflowConstraint(): any /*goog.math.Box|any (undefined)*/;
    
        /**
         * @param {goog.math.Box|undefined} overflowConstraint Box object describing the
         *     dimensions in which the movable element could be shown.
         */
        setOverflowConstraint(overflowConstraint: any /*goog.math.Box|any (undefined)*/): void;
    
        /**
         * @return {number} A bitmask for the "last resort" overflow.
         */
        getLastResortOverflow(): number;
    
        /**
         * @param {number} lastResortOverflow A bitmask for the "last resort" overflow,
         *     if we fail to fit the element on-screen.
         */
        setLastResortOverflow(lastResortOverflow: number): void;
    
        /**
         * Adjusts the corner if X or Y positioning failed.
         * @param {number} status The status of the last positionAtAnchor call.
         * @param {goog.positioning.Corner} corner The corner to adjust.
         * @return {goog.positioning.Corner} The adjusted corner.
         * @protected
         */
        adjustCorner(status: number, corner: goog.positioning.Corner): goog.positioning.Corner;
    }
}

