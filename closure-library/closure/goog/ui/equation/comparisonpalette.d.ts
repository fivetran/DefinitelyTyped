/// <reference path="../../../../globals.d.ts" />
/// <reference path="./palette.d.ts" />
/// <reference path="./palettemanager.d.ts" />

declare module goog.ui.equation {

    class ComparisonPalette extends ComparisonPalette.__Class { }
    module ComparisonPalette {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.equation.Palette.__Class {
    
            /**
             * Constructs a new comparison palette.
             * @param {goog.ui.equation.PaletteManager} paletteManager The
             *     manager of the palette.
             * @extends {goog.ui.equation.Palette}
             * @constructor
             * @final
             */
            constructor(paletteManager: goog.ui.equation.PaletteManager);
        }
    }
}
