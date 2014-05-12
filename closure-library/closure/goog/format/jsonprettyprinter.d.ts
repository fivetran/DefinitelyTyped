/// <reference path="../../../globals.d.ts" />

declare module goog.format {

    class JsonPrettyPrinter extends JsonPrettyPrinter.__Class { }
    module JsonPrettyPrinter {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Formats a JSON object as a string, properly indented for display.  Supports
             * displaying the string as text or html.  Users can also specify their own
             * set of delimiters for different environments.  For example, the JSON object:
             *
             * <code>{"a": 1, "b": {"c": null, "d": true, "e": [1, 2]}}</code>
             *
             * Will be displayed like this:
             *
             * <code>{
             *   "a": 1,
             *   "b": {
             *     "c": null,
             *     "d": true,
             *     "e": [
             *       1,
             *       2
             *     ]
             *   }
             * }</code>
             * @param {goog.format.JsonPrettyPrinter.TextDelimiters} delimiters Container
             *     for the various strings to use to delimit objects, arrays, newlines, and
             *     other pieces of the output.
             * @constructor
             */
            constructor(delimiters: goog.format.JsonPrettyPrinter.TextDelimiters);
    
            /**
             * Formats a JSON object as a string, properly indented for display.
             * @param {*} json The object to pretty print. It could be a JSON object, a
             *     string representing a JSON object, or any other type.
             * @return {string} Returns a string of the JSON object, properly indented for
             *     display.
             */
            format(json: any): string;
        }
    }
}

declare module goog.format.JsonPrettyPrinter {

    class TextDelimiters extends TextDelimiters.__Class { }
    module TextDelimiters {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A container for the delimiting characters used to display the JSON string
             * to a text display.  Each delimiter is a publicly accessible property of
             * the object, which makes it easy to tweak delimiters to specific environments.
             * @constructor
             */
            constructor();
    
            /**
             * Represents a space character in the output.  Used to indent properties a
             * certain number of spaces, and to separate property names from property
             * values.
             * @type {string}
             */
            space: string;
    
            /**
             * Represents a newline character in the output.  Used to begin a new line.
             * @type {string}
             */
            lineBreak: string;
    
            /**
             * Represents the start of an object in the output.
             * @type {string}
             */
            objectStart: string;
    
            /**
             * Represents the end of an object in the output.
             * @type {string}
             */
            objectEnd: string;
    
            /**
             * Represents the start of an array in the output.
             * @type {string}
             */
            arrayStart: string;
    
            /**
             * Represents the end of an array in the output.
             * @type {string}
             */
            arrayEnd: string;
    
            /**
             * Represents the string used to separate properties in the output.
             * @type {string}
             */
            propertySeparator: string;
    
            /**
             * Represents the string used to separate property names from property values in
             * the output.
             * @type {string}
             */
            nameValueSeparator: string;
    
            /**
             * A string that's placed before a property name in the output.  Useful for
             * wrapping a property name in an html tag.
             * @type {string}
             */
            preName: string;
    
            /**
             * A string that's placed after a property name in the output.  Useful for
             * wrapping a property name in an html tag.
             * @type {string}
             */
            postName: string;
    
            /**
             * A string that's placed before a property value in the output.  Useful for
             * wrapping a property value in an html tag.
             * @type {string}
             */
            preValue: string;
    
            /**
             * A string that's placed after a property value in the output.  Useful for
             * wrapping a property value in an html tag.
             * @type {string}
             */
            postValue: string;
    
            /**
             * Represents the number of spaces to indent each sub-property of the JSON.
             * @type {number}
             */
            indent: number;
        }
    }

    class HtmlDelimiters extends HtmlDelimiters.__Class { }
    module HtmlDelimiters {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.format.JsonPrettyPrinter.TextDelimiters.__Class {
    
            /**
             * A container for the delimiting characters used to display the JSON string
             * to an HTML <code>&lt;pre&gt;</code> or <code>&lt;code&gt;</code> element.
             * @constructor
             * @extends {goog.format.JsonPrettyPrinter.TextDelimiters}
             * @final
             */
            constructor();
        }
    }
}
