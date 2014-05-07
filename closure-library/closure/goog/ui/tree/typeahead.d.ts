/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/structs/trie.d.ts" />

declare module goog.ui.tree {

    /**
     * Constructs a TypeAhead object.
     * @constructor
     * @final
     */
    class TypeAhead {
        /**
         * Constructs a TypeAhead object.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Handles navigation keys.
         * @param {goog.events.BrowserEvent} e The browser event.
         * @return {boolean} The handled value.
         */
        handleNavigation(e: goog.events.BrowserEvent): boolean;
    
        /**
         * Handles the character presses.
         * @param {goog.events.BrowserEvent} e The browser event.
         *    Expected event type is goog.events.KeyHandler.EventType.KEY.
         * @return {boolean} The handled value.
         */
        handleTypeAheadChar(e: goog.events.BrowserEvent): boolean;
    
        /**
         * Adds or updates the given node in the nodemap. The label text is used as a
         * key and the node id is used as a value. In the case that the key already
         * exists, such as when more than one node exists with the same label, then this
         * function creates an array to hold the multiple nodes.
         * @param {goog.ui.tree.BaseNode} node Node to be added or updated.
         */
        setNodeInMap(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Removes the given node from the nodemap.
         * @param {goog.ui.tree.BaseNode} node Node to be removed.
         */
        removeNodeFromMap(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Clears the typeahead buffer.
         */
        clear(): void;
    }
}

declare module goog.ui.tree.TypeAhead {

    /**
     * Enum for offset values that are used for ctrl-key navigation among the
     * multiple matches of a given typeahead buffer.
     *
     * @enum {number}
     */
    enum Offset { DOWN, UP } 
}

