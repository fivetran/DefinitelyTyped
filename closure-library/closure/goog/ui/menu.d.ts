/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/containerrenderer.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../closure/goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/separator.d.ts" />
/// <reference path="../../../closure/goog/ui/menurenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuseparator.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitem.d.ts" />
/// <reference path="../../../closure/goog/ui/container.d.ts" />
/// <reference path="../../../closure/goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuheader.d.ts" />

declare module goog.ui {

    /**
     * A basic menu class.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render or
     *     decorate the container; defaults to {@link goog.ui.MenuRenderer}.
     * @constructor
     * @extends {goog.ui.Container}
     */
    class Menu extends _Menu { }

    class _Menu extends goog.ui._Container {
        /**
         * A basic menu class.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render or
         *     decorate the container; defaults to {@link goog.ui.MenuRenderer}.
         * @constructor
         * @extends {goog.ui.Container}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuRenderer);
    
        /**
         * Coordinates of the mousedown event that caused this menu to be made visible.
         * Used to prevent the consequent mouseup event due to a simple click from
         * activating a menu item immediately. Considered protected; should only be used
         * within this package or by subclasses.
         * @type {goog.math.Coordinate|undefined}
         */
        openingCoords: any /*goog.math.Coordinate|any (undefined)*/;
    
        /**
         * Returns the CSS class applied to menu elements, also used as the prefix for
         * derived styles, if any.  Subclasses should override this method as needed.
         * Considered protected.
         * @return {string} The CSS class applied to menu elements.
         * @protected
         * @deprecated Use getRenderer().getCssClass().
         */
        getCssClass(): string;
    
        /**
         * Returns whether the provided element is to be considered inside the menu for
         * purposes such as dismissing the menu on an event.  This is so submenus can
         * make use of elements outside their own DOM.
         * @param {Element} element The element to test for.
         * @return {boolean} Whether the provided element is to be considered inside
         *     the menu.
         */
        containsElement(element: Element): boolean;
    
        /**
         * Adds a new menu item at the end of the menu.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
         *     item to add to the menu.
         * @deprecated Use {@link #addChild} instead, with true for the second argument.
         */
        addItem(item: any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator*/): void;
    
        /**
         * Adds a new menu item at a specific index in the menu.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
         *     item to add to the menu.
         * @param {number} n Index at which to insert the menu item.
         * @deprecated Use {@link #addChildAt} instead, with true for the third
         *     argument.
         */
        addItemAt(item: any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator*/, n: number): void;
    
        /**
         * Removes an item from the menu and disposes of it.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item The
         *     menu item to remove.
         * @deprecated Use {@link #removeChild} instead.
         */
        removeItem(item: any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator*/): void;
    
        /**
         * Removes a menu item at a given index in the menu and disposes of it.
         * @param {number} n Index of item.
         * @deprecated Use {@link #removeChildAt} instead.
         */
        removeItemAt(n: number): void;
    
        /**
         * Returns a reference to the menu item at a given index.
         * @param {number} n Index of menu item.
         * @return {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator|null}
         *     Reference to the menu item.
         * @deprecated Use {@link #getChildAt} instead.
         */
        getItemAt(n: number): any /*goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator|any (null)*/;
    
        /**
         * Returns the number of items in the menu (including separators).
         * @return {number} The number of items in the menu.
         * @deprecated Use {@link #getChildCount} instead.
         */
        getItemCount(): number;
    
        /**
         * Returns an array containing the menu items contained in the menu.
         * @return {Array.<goog.ui.MenuItem>} An array of menu items.
         * @deprecated Use getChildAt, forEachChild, and getChildCount.
         */
        getItems(): goog.ui.MenuItem[];
    
        /**
         * Sets the position of the menu relative to the view port.
         * @param {number|goog.math.Coordinate} x Left position or coordinate obj.
         * @param {number=} opt_y Top position.
         */
        setPosition(x: any /*number|goog.math.Coordinate*/, opt_y?: number): void;
    
        /**
         * Gets the page offset of the menu, or null if the menu isn't visible
         * @return {goog.math.Coordinate?} Object holding the x-y coordinates of the
         *     menu or null if the menu is not visible.
         */
        getPosition(): goog.math.Coordinate;
    
        /**
         * Sets whether the menu can automatically move focus to its key event target
         * when it is set to visible.
         * @param {boolean} allow Whether the menu can automatically move focus to its
         *     key event target when it is set to visible.
         */
        setAllowAutoFocus(allow: boolean): void;
    
        /**
         * @return {boolean} Whether the menu can automatically move focus to its key
         *     event target when it is set to visible.
         */
        getAllowAutoFocus(): boolean;
    
        /**
         * Sets whether the menu will highlight disabled menu items or skip to the next
         * active item.
         * @param {boolean} allow Whether the menu will highlight disabled menu items or
         *     skip to the next active item.
         */
        setAllowHighlightDisabled(allow: boolean): void;
    
        /**
         * @return {boolean} Whether the menu will highlight disabled menu items or skip
         *     to the next active item.
         */
        getAllowHighlightDisabled(): boolean;
    
        /**
         * Highlights the next item that begins with the specified string.  If no
         * (other) item begins with the given string, the selection is unchanged.
         * @param {string} charStr The prefix to match.
         * @return {boolean} Whether a matching prefix was found.
         */
        highlightNextPrefix(charStr: string): boolean;
    
        /**
         * Decorate menu items located in any descendent node which as been explicitly
         * marked as a 'content' node.
         * @param {Element} element Element to decorate.
         * @protected
         */
        decorateContent(element: Element): void;
    }
}

declare module goog.ui.Menu {

    /**
     * Event types dispatched by the menu.
     * @enum {string}
     * @deprecated Use goog.ui.Component.EventType.
     */
    enum EventType { BEFORE_SHOW, SHOW, BEFORE_HIDE, HIDE } 

    /**
     * CSS class for menus.
     * @type {string}
     * @deprecated Use goog.ui.MenuRenderer.CSS_CLASS.
     */
    var CSS_CLASS: string;
}

