/// <reference path="../../../globals.d.ts" />
/// <reference path="./loosemock.d.ts" />
/// <reference path="../dom/abstractrange.d.ts" />

declare module goog.testing {

    class MockRange extends MockRange.__Class { }
    module MockRange {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.testing.LooseMock.__Class {
    
            /**
             * LooseMock of goog.dom.AbstractRange. Useful because the mock framework cannot
             * simply create a mock out of an abstract class, and cannot create a mock out
             * of classes that implements __iterator__ because it relies on the default
             * behavior of iterating through all of an object's properties.
             * @constructor
             * @extends {goog.testing.LooseMock}
             * @final
             */
            constructor();
        }
    }
}

declare module goog.testing.MockRange {

    class ConcreteRange_ extends ConcreteRange_.__Class { }
    module ConcreteRange_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.dom.AbstractRange.__Class {
    
            /**
             * Concrete subclass of goog.dom.AbstractRange that simply sets the abstract
             * method __iterator__ to undefined so that javascript defaults to iterating
             * through all of the object's properties.
             * @constructor
             * @extends {goog.dom.AbstractRange}
             * @private
             */
            constructor();
        }
    }
}
