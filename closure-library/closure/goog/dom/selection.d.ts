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

declare module goog.dom.selection {

    /**
     * Sets the place where the selection should start inside a textarea or a text
     * input
     * @param {Element} textfield A textarea or text input.
     * @param {number} pos The position to set the start of the selection at.
     */
    function setStart(textfield: Element, pos: number): void;

    /**
     * Return the place where the selection starts inside a textarea or a text
     * input
     * @param {Element} textfield A textarea or text input.
     * @return {number} The position where the selection starts or 0 if it was
     *     unable to find the position or no selection exists. Note that we can't
     *     reliably tell the difference between an element that has no selection and
     *     one where it starts at 0.
     */
    function getStart(textfield: Element): number;

    /**
     * Returns the start and end points of the selection inside a textarea or a
     * text input.
     * @param {Element} textfield A textarea or text input.
     * @return {Array.<number>} An array with the start and end positions where the
     *     selection starts and ends or [0,0] if it was unable to find the
     *     positions or no selection exists. Note that we can't reliably tell the
     *     difference between an element that has no selection and one where
     *     it starts and ends at 0.
     */
    function getEndPoints(textfield: Element): number[];

    /**
     * Sets the place where the selection should end inside a text area or a text
     * input
     * @param {Element} textfield A textarea or text input.
     * @param {number} pos The position to end the selection at.
     */
    function setEnd(textfield: Element, pos: number): void;

    /**
     * Returns the place where the selection ends inside a textarea or a text input
     * @param {Element} textfield A textarea or text input.
     * @return {number} The position where the selection ends or 0 if it was
     *     unable to find the position or no selection exists.
     */
    function getEnd(textfield: Element): number;

    /**
     * Sets the cursor position within a textfield.
     * @param {Element} textfield A textarea or text input.
     * @param {number} pos The position within the text field.
     */
    function setCursorPosition(textfield: Element, pos: number): void;

    /**
     * Sets the selected text inside a textarea or a text input
     * @param {Element} textfield A textarea or text input.
     * @param {string} text The text to change the selection to.
     */
    function setText(textfield: Element, text: string): void;

    /**
     * Returns the selected text inside a textarea or a text input
     * @param {Element} textfield A textarea or text input.
     * @return {string} The selected text.
     */
    function getText(textfield: Element): string;
}

