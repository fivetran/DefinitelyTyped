/// <reference path="../../../globals.d.ts" />

declare module goog.array {

    /**
     * @typedef {Array|NodeList|Arguments|{length: number}}
     */
    interface ArrayLike { /*any (any[]|NodeList|Arguments|{ length: number })*/ }

    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.last.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function peek<T>(array: T[]): T;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.last.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function peek<T>(array: any[]): T;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.last.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function peek<T>(array: NodeList): T;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.last.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function peek<T>(array: Arguments): T;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.last.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function peek<T>(array: { length: number }): T;

    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.peek.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function last<T>(array: T[]): T;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.peek.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function last<T>(array: any[]): T;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.peek.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function last<T>(array: NodeList): T;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.peek.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function last<T>(array: Arguments): T;
    /**
     * Returns the last element in an array without removing it.
     * Same as goog.array.peek.
     * @param {Array.<T>|goog.array.ArrayLike} array The array.
     * @return {T} Last item in array.
     * @template T
     */
    function last<T>(array: { length: number }): T;

    /**
     * Returns the index of the first element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-indexof}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at index 0.
     * @return {number} The index of the first matching array element.
     * @template T
     */
    function indexOf<T>(arr: T[], obj: T, opt_fromIndex?: number): number;
    /**
     * Returns the index of the first element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-indexof}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at index 0.
     * @return {number} The index of the first matching array element.
     * @template T
     */
    function indexOf<T>(arr: any[], obj: T, opt_fromIndex?: number): number;
    /**
     * Returns the index of the first element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-indexof}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at index 0.
     * @return {number} The index of the first matching array element.
     * @template T
     */
    function indexOf<T>(arr: NodeList, obj: T, opt_fromIndex?: number): number;
    /**
     * Returns the index of the first element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-indexof}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at index 0.
     * @return {number} The index of the first matching array element.
     * @template T
     */
    function indexOf<T>(arr: Arguments, obj: T, opt_fromIndex?: number): number;
    /**
     * Returns the index of the first element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-indexof}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at index 0.
     * @return {number} The index of the first matching array element.
     * @template T
     */
    function indexOf<T>(arr: { length: number }, obj: T, opt_fromIndex?: number): number;

    /**
     * Returns the index of the last element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-lastindexof}
     *
     * @param {!Array.<T>|!goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {?number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at the end of the array.
     * @return {number} The index of the last matching array element.
     * @template T
     */
    function lastIndexOf<T>(arr: T[], obj: T, opt_fromIndex?: number): number;
    /**
     * Returns the index of the last element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-lastindexof}
     *
     * @param {!Array.<T>|!goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {?number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at the end of the array.
     * @return {number} The index of the last matching array element.
     * @template T
     */
    function lastIndexOf<T>(arr: any[], obj: T, opt_fromIndex?: number): number;
    /**
     * Returns the index of the last element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-lastindexof}
     *
     * @param {!Array.<T>|!goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {?number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at the end of the array.
     * @return {number} The index of the last matching array element.
     * @template T
     */
    function lastIndexOf<T>(arr: NodeList, obj: T, opt_fromIndex?: number): number;
    /**
     * Returns the index of the last element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-lastindexof}
     *
     * @param {!Array.<T>|!goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {?number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at the end of the array.
     * @return {number} The index of the last matching array element.
     * @template T
     */
    function lastIndexOf<T>(arr: Arguments, obj: T, opt_fromIndex?: number): number;
    /**
     * Returns the index of the last element of an array with a specified value, or
     * -1 if the element is not present in the array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-lastindexof}
     *
     * @param {!Array.<T>|!goog.array.ArrayLike} arr The array to be searched.
     * @param {T} obj The object for which we are searching.
     * @param {?number=} opt_fromIndex The index at which to start the search. If
     *     omitted the search starts at the end of the array.
     * @return {number} The index of the last matching array element.
     * @template T
     */
    function lastIndexOf<T>(arr: { length: number }, obj: T, opt_fromIndex?: number): number;

    /**
     * Calls a function for each element in an array. Skips holes in the array.
     * See {@link http://tinyurl.com/developer-mozilla-org-array-foreach}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function takes 3 arguments (the element, the index and the
     *     array). The return value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @template T
     */
    function forEach<T>(arr: T[], f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;
    /**
     * Calls a function for each element in an array. Skips holes in the array.
     * See {@link http://tinyurl.com/developer-mozilla-org-array-foreach}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function takes 3 arguments (the element, the index and the
     *     array). The return value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @template T
     */
    function forEach<T>(arr: any[], f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;
    /**
     * Calls a function for each element in an array. Skips holes in the array.
     * See {@link http://tinyurl.com/developer-mozilla-org-array-foreach}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function takes 3 arguments (the element, the index and the
     *     array). The return value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @template T
     */
    function forEach<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;
    /**
     * Calls a function for each element in an array. Skips holes in the array.
     * See {@link http://tinyurl.com/developer-mozilla-org-array-foreach}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function takes 3 arguments (the element, the index and the
     *     array). The return value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @template T
     */
    function forEach<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;
    /**
     * Calls a function for each element in an array. Skips holes in the array.
     * See {@link http://tinyurl.com/developer-mozilla-org-array-foreach}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function takes 3 arguments (the element, the index and the
     *     array). The return value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @template T
     */
    function forEach<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;

    /**
     * Calls a function for each element in an array, starting from the last
     * element rather than the first.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function
     *     takes 3 arguments (the element, the index and the array). The return
     *     value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @template T
     */
    function forEachRight<T>(arr: T[], f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;
    /**
     * Calls a function for each element in an array, starting from the last
     * element rather than the first.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function
     *     takes 3 arguments (the element, the index and the array). The return
     *     value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @template T
     */
    function forEachRight<T>(arr: any[], f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;
    /**
     * Calls a function for each element in an array, starting from the last
     * element rather than the first.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function
     *     takes 3 arguments (the element, the index and the array). The return
     *     value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @template T
     */
    function forEachRight<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;
    /**
     * Calls a function for each element in an array, starting from the last
     * element rather than the first.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function
     *     takes 3 arguments (the element, the index and the array). The return
     *     value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @template T
     */
    function forEachRight<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;
    /**
     * Calls a function for each element in an array, starting from the last
     * element rather than the first.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this: any, T, number, ?): ?} f The function to call for every
     *     element. This function
     *     takes 3 arguments (the element, the index and the array). The return
     *     value is ignored.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @template T
     */
    function forEachRight<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => any, opt_obj?: any): void;

    /**
     * Calls a function for each element in an array, and if the function returns
     * true adds the element to a new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-filter}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?):boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and must
     *     return a Boolean. If the return value is true the element is added to the
     *     result array. If it is false the element is not included.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {!Array.<T>} a new array in which only elements that passed the test
     *     are present.
     * @template T
     */
    function filter<T>(arr: T[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T[];
    /**
     * Calls a function for each element in an array, and if the function returns
     * true adds the element to a new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-filter}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?):boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and must
     *     return a Boolean. If the return value is true the element is added to the
     *     result array. If it is false the element is not included.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {!Array.<T>} a new array in which only elements that passed the test
     *     are present.
     * @template T
     */
    function filter<T>(arr: any[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T[];
    /**
     * Calls a function for each element in an array, and if the function returns
     * true adds the element to a new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-filter}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?):boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and must
     *     return a Boolean. If the return value is true the element is added to the
     *     result array. If it is false the element is not included.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {!Array.<T>} a new array in which only elements that passed the test
     *     are present.
     * @template T
     */
    function filter<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T[];
    /**
     * Calls a function for each element in an array, and if the function returns
     * true adds the element to a new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-filter}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?):boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and must
     *     return a Boolean. If the return value is true the element is added to the
     *     result array. If it is false the element is not included.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {!Array.<T>} a new array in which only elements that passed the test
     *     are present.
     * @template T
     */
    function filter<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T[];
    /**
     * Calls a function for each element in an array, and if the function returns
     * true adds the element to a new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-filter}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?):boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and must
     *     return a Boolean. If the return value is true the element is added to the
     *     result array. If it is false the element is not included.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {!Array.<T>} a new array in which only elements that passed the test
     *     are present.
     * @template T
     */
    function filter<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T[];

    /**
     * Calls a function for each element in an array and inserts the result into a
     * new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-map}
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr Array or array like object
     *     over which to iterate.
     * @param {function(this:THIS, VALUE, number, ?): RESULT} f The function to call
     *     for every element. This function takes 3 arguments (the element,
     *     the index and the array) and should return something. The result will be
     *     inserted into a new array.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within f.
     * @return {!Array.<RESULT>} a new array with the results from f.
     * @template THIS, VALUE, RESULT
     */
    function map<THIS, VALUE, RESULT>(arr: VALUE[], f: (_0: VALUE, _1: number, _2: any) => RESULT, opt_obj?: THIS): RESULT[];
    /**
     * Calls a function for each element in an array and inserts the result into a
     * new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-map}
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr Array or array like object
     *     over which to iterate.
     * @param {function(this:THIS, VALUE, number, ?): RESULT} f The function to call
     *     for every element. This function takes 3 arguments (the element,
     *     the index and the array) and should return something. The result will be
     *     inserted into a new array.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within f.
     * @return {!Array.<RESULT>} a new array with the results from f.
     * @template THIS, VALUE, RESULT
     */
    function map<THIS, VALUE, RESULT>(arr: any[], f: (_0: VALUE, _1: number, _2: any) => RESULT, opt_obj?: THIS): RESULT[];
    /**
     * Calls a function for each element in an array and inserts the result into a
     * new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-map}
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr Array or array like object
     *     over which to iterate.
     * @param {function(this:THIS, VALUE, number, ?): RESULT} f The function to call
     *     for every element. This function takes 3 arguments (the element,
     *     the index and the array) and should return something. The result will be
     *     inserted into a new array.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within f.
     * @return {!Array.<RESULT>} a new array with the results from f.
     * @template THIS, VALUE, RESULT
     */
    function map<THIS, VALUE, RESULT>(arr: NodeList, f: (_0: VALUE, _1: number, _2: any) => RESULT, opt_obj?: THIS): RESULT[];
    /**
     * Calls a function for each element in an array and inserts the result into a
     * new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-map}
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr Array or array like object
     *     over which to iterate.
     * @param {function(this:THIS, VALUE, number, ?): RESULT} f The function to call
     *     for every element. This function takes 3 arguments (the element,
     *     the index and the array) and should return something. The result will be
     *     inserted into a new array.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within f.
     * @return {!Array.<RESULT>} a new array with the results from f.
     * @template THIS, VALUE, RESULT
     */
    function map<THIS, VALUE, RESULT>(arr: Arguments, f: (_0: VALUE, _1: number, _2: any) => RESULT, opt_obj?: THIS): RESULT[];
    /**
     * Calls a function for each element in an array and inserts the result into a
     * new array.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-map}
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr Array or array like object
     *     over which to iterate.
     * @param {function(this:THIS, VALUE, number, ?): RESULT} f The function to call
     *     for every element. This function takes 3 arguments (the element,
     *     the index and the array) and should return something. The result will be
     *     inserted into a new array.
     * @param {THIS=} opt_obj The object to be used as the value of 'this' within f.
     * @return {!Array.<RESULT>} a new array with the results from f.
     * @template THIS, VALUE, RESULT
     */
    function map<THIS, VALUE, RESULT>(arr: { length: number }, f: (_0: VALUE, _1: number, _2: any) => RESULT, opt_obj?: THIS): RESULT[];

    /**
     * Passes every element of an array into a function and accumulates the result.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduce}
     *
     * For example:
     * var a = [1, 2, 3, 4];
     * goog.array.reduce(a, function(r, v, i, arr) {return r + v;}, 0);
     * returns 10
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {R} Result of evaluating f repeatedly across the values of the array.
     * @template T,R
     */
    function reduce<T,R>(arr: T[], f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;
    /**
     * Passes every element of an array into a function and accumulates the result.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduce}
     *
     * For example:
     * var a = [1, 2, 3, 4];
     * goog.array.reduce(a, function(r, v, i, arr) {return r + v;}, 0);
     * returns 10
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {R} Result of evaluating f repeatedly across the values of the array.
     * @template T,R
     */
    function reduce<T,R>(arr: any[], f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;
    /**
     * Passes every element of an array into a function and accumulates the result.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduce}
     *
     * For example:
     * var a = [1, 2, 3, 4];
     * goog.array.reduce(a, function(r, v, i, arr) {return r + v;}, 0);
     * returns 10
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {R} Result of evaluating f repeatedly across the values of the array.
     * @template T,R
     */
    function reduce<T,R>(arr: NodeList, f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;
    /**
     * Passes every element of an array into a function and accumulates the result.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduce}
     *
     * For example:
     * var a = [1, 2, 3, 4];
     * goog.array.reduce(a, function(r, v, i, arr) {return r + v;}, 0);
     * returns 10
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {R} Result of evaluating f repeatedly across the values of the array.
     * @template T,R
     */
    function reduce<T,R>(arr: Arguments, f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;
    /**
     * Passes every element of an array into a function and accumulates the result.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduce}
     *
     * For example:
     * var a = [1, 2, 3, 4];
     * goog.array.reduce(a, function(r, v, i, arr) {return r + v;}, 0);
     * returns 10
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {R} Result of evaluating f repeatedly across the values of the array.
     * @template T,R
     */
    function reduce<T,R>(arr: { length: number }, f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;

    /**
     * Passes every element of an array into a function and accumulates the result,
     * starting from the last element and working towards the first.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduceright}
     *
     * For example:
     * var a = ['a', 'b', 'c'];
     * goog.array.reduceRight(a, function(r, v, i, arr) {return r + v;}, '');
     * returns 'cba'
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {R} Object returned as a result of evaluating f repeatedly across the
     *     values of the array.
     * @template T,R
     */
    function reduceRight<T,R>(arr: T[], f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;
    /**
     * Passes every element of an array into a function and accumulates the result,
     * starting from the last element and working towards the first.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduceright}
     *
     * For example:
     * var a = ['a', 'b', 'c'];
     * goog.array.reduceRight(a, function(r, v, i, arr) {return r + v;}, '');
     * returns 'cba'
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {R} Object returned as a result of evaluating f repeatedly across the
     *     values of the array.
     * @template T,R
     */
    function reduceRight<T,R>(arr: any[], f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;
    /**
     * Passes every element of an array into a function and accumulates the result,
     * starting from the last element and working towards the first.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduceright}
     *
     * For example:
     * var a = ['a', 'b', 'c'];
     * goog.array.reduceRight(a, function(r, v, i, arr) {return r + v;}, '');
     * returns 'cba'
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {R} Object returned as a result of evaluating f repeatedly across the
     *     values of the array.
     * @template T,R
     */
    function reduceRight<T,R>(arr: NodeList, f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;
    /**
     * Passes every element of an array into a function and accumulates the result,
     * starting from the last element and working towards the first.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduceright}
     *
     * For example:
     * var a = ['a', 'b', 'c'];
     * goog.array.reduceRight(a, function(r, v, i, arr) {return r + v;}, '');
     * returns 'cba'
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {R} Object returned as a result of evaluating f repeatedly across the
     *     values of the array.
     * @template T,R
     */
    function reduceRight<T,R>(arr: Arguments, f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;
    /**
     * Passes every element of an array into a function and accumulates the result,
     * starting from the last element and working towards the first.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-reduceright}
     *
     * For example:
     * var a = ['a', 'b', 'c'];
     * goog.array.reduceRight(a, function(r, v, i, arr) {return r + v;}, '');
     * returns 'cba'
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, R, T, number, ?) : R} f The function to call for
     *     every element. This function
     *     takes 4 arguments (the function's previous result or the initial value,
     *     the value of the current array element, the current array index, and the
     *     array itself)
     *     function(previousValue, currentValue, index, array).
     * @param {?} val The initial value to pass into the function on the first call.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {R} Object returned as a result of evaluating f repeatedly across the
     *     values of the array.
     * @template T,R
     */
    function reduceRight<T,R>(arr: { length: number }, f: (_0: R, _1: T, _2: number, _3: any) => R, val: any, opt_obj?: any): R;

    /**
     * Calls f for each element of an array. If any call returns true, some()
     * returns true (without checking the remaining elements). If all calls
     * return false, some() returns false.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-some}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} true if any element passes the test.
     * @template T
     */
    function some<T>(arr: T[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Calls f for each element of an array. If any call returns true, some()
     * returns true (without checking the remaining elements). If all calls
     * return false, some() returns false.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-some}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} true if any element passes the test.
     * @template T
     */
    function some<T>(arr: any[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Calls f for each element of an array. If any call returns true, some()
     * returns true (without checking the remaining elements). If all calls
     * return false, some() returns false.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-some}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} true if any element passes the test.
     * @template T
     */
    function some<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Calls f for each element of an array. If any call returns true, some()
     * returns true (without checking the remaining elements). If all calls
     * return false, some() returns false.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-some}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} true if any element passes the test.
     * @template T
     */
    function some<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Calls f for each element of an array. If any call returns true, some()
     * returns true (without checking the remaining elements). If all calls
     * return false, some() returns false.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-some}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj  The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} true if any element passes the test.
     * @template T
     */
    function some<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;

    /**
     * Call f for each element of an array. If all calls return true, every()
     * returns true. If any call returns false, every() returns false and
     * does not continue to check the remaining elements.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-every}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} false if any element fails the test.
     * @template T
     */
    function every<T>(arr: T[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Call f for each element of an array. If all calls return true, every()
     * returns true. If any call returns false, every() returns false and
     * does not continue to check the remaining elements.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-every}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} false if any element fails the test.
     * @template T
     */
    function every<T>(arr: any[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Call f for each element of an array. If all calls return true, every()
     * returns true. If any call returns false, every() returns false and
     * does not continue to check the remaining elements.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-every}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} false if any element fails the test.
     * @template T
     */
    function every<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Call f for each element of an array. If all calls return true, every()
     * returns true. If any call returns false, every() returns false and
     * does not continue to check the remaining elements.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-every}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} false if any element fails the test.
     * @template T
     */
    function every<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Call f for each element of an array. If all calls return true, every()
     * returns true. If any call returns false, every() returns false and
     * does not continue to check the remaining elements.
     *
     * See {@link http://tinyurl.com/developer-mozilla-org-array-every}
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within f.
     * @return {boolean} false if any element fails the test.
     * @template T
     */
    function every<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;

    /**
     * Counts the array elements that fulfill the predicate, i.e. for which the
     * callback function returns true. Skips holes in the array.
     *
     * @param {!(Array.<T>|goog.array.ArrayLike)} arr Array or array like object
     *     over which to iterate.
     * @param {function(this: any, T, number, ?): boolean} f The function to call for
     *     every element. Takes 3 arguments (the element, the index and the array).
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @return {number} The number of the matching elements.
     * @template T
     */
    function count<T>(arr: T[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Counts the array elements that fulfill the predicate, i.e. for which the
     * callback function returns true. Skips holes in the array.
     *
     * @param {!(Array.<T>|goog.array.ArrayLike)} arr Array or array like object
     *     over which to iterate.
     * @param {function(this: any, T, number, ?): boolean} f The function to call for
     *     every element. Takes 3 arguments (the element, the index and the array).
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @return {number} The number of the matching elements.
     * @template T
     */
    function count<T>(arr: any[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Counts the array elements that fulfill the predicate, i.e. for which the
     * callback function returns true. Skips holes in the array.
     *
     * @param {!(Array.<T>|goog.array.ArrayLike)} arr Array or array like object
     *     over which to iterate.
     * @param {function(this: any, T, number, ?): boolean} f The function to call for
     *     every element. Takes 3 arguments (the element, the index and the array).
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @return {number} The number of the matching elements.
     * @template T
     */
    function count<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Counts the array elements that fulfill the predicate, i.e. for which the
     * callback function returns true. Skips holes in the array.
     *
     * @param {!(Array.<T>|goog.array.ArrayLike)} arr Array or array like object
     *     over which to iterate.
     * @param {function(this: any, T, number, ?): boolean} f The function to call for
     *     every element. Takes 3 arguments (the element, the index and the array).
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @return {number} The number of the matching elements.
     * @template T
     */
    function count<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Counts the array elements that fulfill the predicate, i.e. for which the
     * callback function returns true. Skips holes in the array.
     *
     * @param {!(Array.<T>|goog.array.ArrayLike)} arr Array or array like object
     *     over which to iterate.
     * @param {function(this: any, T, number, ?): boolean} f The function to call for
     *     every element. Takes 3 arguments (the element, the index and the array).
     * @param {S=} opt_obj The object to be used as the value of 'this' within f.
     * @return {number} The number of the matching elements.
     * @template T
     */
    function count<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;

    /**
     * Search an array for the first element that satisfies a given condition and
     * return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The first array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function find<T>(arr: T[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The first array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function find<T>(arr: any[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The first array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function find<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The first array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function find<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The first array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function find<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;

    /**
     * Search an array for the first element that satisfies a given condition and
     * return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the first array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndex<T>(arr: T[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the first array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndex<T>(arr: any[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the first array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndex<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the first array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndex<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Search an array for the first element that satisfies a given condition and
     * return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call for
     *     every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the first array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndex<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;

    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The last array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function findRight<T>(arr: T[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The last array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function findRight<T>(arr: any[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The last array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function findRight<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The last array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function findRight<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return that element.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {?T} The last array element that passes the test, or null if no
     *     element is found.
     * @template T
     */
    function findRight<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): T;

    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {Object=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the last array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndexRight<T>(arr: T[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {Object=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the last array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndexRight<T>(arr: any[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {Object=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the last array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndexRight<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {Object=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the last array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndexRight<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;
    /**
     * Search an array (in reverse order) for the last element that satisfies a
     * given condition and return its index.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {Object=} opt_obj An optional "this" context for the function.
     * @return {number} The index of the last array element that passes the test,
     *     or -1 if no element is found.
     * @template T
     */
    function findIndexRight<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): number;

    /**
     * Whether the array contains the given object.
     * @param {goog.array.ArrayLike} arr The array to test for the presence of the
     *     element.
     * @param {*} obj The object for which to test.
     * @return {boolean} true if obj is present.
     */
    function contains(arr: any[], obj: any): boolean;
    /**
     * Whether the array contains the given object.
     * @param {goog.array.ArrayLike} arr The array to test for the presence of the
     *     element.
     * @param {*} obj The object for which to test.
     * @return {boolean} true if obj is present.
     */
    function contains(arr: NodeList, obj: any): boolean;
    /**
     * Whether the array contains the given object.
     * @param {goog.array.ArrayLike} arr The array to test for the presence of the
     *     element.
     * @param {*} obj The object for which to test.
     * @return {boolean} true if obj is present.
     */
    function contains(arr: Arguments, obj: any): boolean;
    /**
     * Whether the array contains the given object.
     * @param {goog.array.ArrayLike} arr The array to test for the presence of the
     *     element.
     * @param {*} obj The object for which to test.
     * @return {boolean} true if obj is present.
     */
    function contains(arr: { length: number }, obj: any): boolean;

    /**
     * Whether the array is empty.
     * @param {goog.array.ArrayLike} arr The array to test.
     * @return {boolean} true if empty.
     */
    function isEmpty(arr: any[]): boolean;
    /**
     * Whether the array is empty.
     * @param {goog.array.ArrayLike} arr The array to test.
     * @return {boolean} true if empty.
     */
    function isEmpty(arr: NodeList): boolean;
    /**
     * Whether the array is empty.
     * @param {goog.array.ArrayLike} arr The array to test.
     * @return {boolean} true if empty.
     */
    function isEmpty(arr: Arguments): boolean;
    /**
     * Whether the array is empty.
     * @param {goog.array.ArrayLike} arr The array to test.
     * @return {boolean} true if empty.
     */
    function isEmpty(arr: { length: number }): boolean;

    /**
     * Clears the array.
     * @param {goog.array.ArrayLike} arr Array or array like object to clear.
     */
    function clear(arr: any[]): void;
    /**
     * Clears the array.
     * @param {goog.array.ArrayLike} arr Array or array like object to clear.
     */
    function clear(arr: NodeList): void;
    /**
     * Clears the array.
     * @param {goog.array.ArrayLike} arr Array or array like object to clear.
     */
    function clear(arr: Arguments): void;
    /**
     * Clears the array.
     * @param {goog.array.ArrayLike} arr Array or array like object to clear.
     */
    function clear(arr: { length: number }): void;

    /**
     * Pushes an item into an array, if it's not already in the array.
     * @param {Array.<T>} arr Array into which to insert the item.
     * @param {T} obj Value to add.
     * @template T
     */
    function insert<T>(arr: T[], obj: T): void;

    /**
     * Inserts an object at the given index of the array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {*} obj The object to insert.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertAt(arr: any[], obj: any, opt_i?: number): void;
    /**
     * Inserts an object at the given index of the array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {*} obj The object to insert.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertAt(arr: NodeList, obj: any, opt_i?: number): void;
    /**
     * Inserts an object at the given index of the array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {*} obj The object to insert.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertAt(arr: Arguments, obj: any, opt_i?: number): void;
    /**
     * Inserts an object at the given index of the array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {*} obj The object to insert.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertAt(arr: { length: number }, obj: any, opt_i?: number): void;

    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: any[], elementsToAdd: any[], opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: any[], elementsToAdd: NodeList, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: any[], elementsToAdd: Arguments, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: any[], elementsToAdd: { length: number }, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: NodeList, elementsToAdd: any[], opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: NodeList, elementsToAdd: NodeList, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: NodeList, elementsToAdd: Arguments, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: NodeList, elementsToAdd: { length: number }, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: Arguments, elementsToAdd: any[], opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: Arguments, elementsToAdd: NodeList, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: Arguments, elementsToAdd: Arguments, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: Arguments, elementsToAdd: { length: number }, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: { length: number }, elementsToAdd: any[], opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: { length: number }, elementsToAdd: NodeList, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: { length: number }, elementsToAdd: Arguments, opt_i?: number): void;
    /**
     * Inserts at the given index of the array, all elements of another array.
     * @param {goog.array.ArrayLike} arr The array to modify.
     * @param {goog.array.ArrayLike} elementsToAdd The array of elements to add.
     * @param {number=} opt_i The index at which to insert the object. If omitted,
     *      treated as 0. A negative index is counted from the end of the array.
     */
    function insertArrayAt(arr: { length: number }, elementsToAdd: { length: number }, opt_i?: number): void;

    /**
     * Inserts an object into an array before a specified object.
     * @param {Array.<T>} arr The array to modify.
     * @param {T} obj The object to insert.
     * @param {T=} opt_obj2 The object before which obj should be inserted. If obj2
     *     is omitted or not found, obj is inserted at the end of the array.
     * @template T
     */
    function insertBefore<T>(arr: T[], obj: T, opt_obj2?: T): void;

    /**
     * Removes the first occurrence of a particular value from an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array from which to remove
     *     value.
     * @param {T} obj Object to remove.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function remove<T>(arr: T[], obj: T): boolean;
    /**
     * Removes the first occurrence of a particular value from an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array from which to remove
     *     value.
     * @param {T} obj Object to remove.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function remove<T>(arr: any[], obj: T): boolean;
    /**
     * Removes the first occurrence of a particular value from an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array from which to remove
     *     value.
     * @param {T} obj Object to remove.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function remove<T>(arr: NodeList, obj: T): boolean;
    /**
     * Removes the first occurrence of a particular value from an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array from which to remove
     *     value.
     * @param {T} obj Object to remove.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function remove<T>(arr: Arguments, obj: T): boolean;
    /**
     * Removes the first occurrence of a particular value from an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array from which to remove
     *     value.
     * @param {T} obj Object to remove.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function remove<T>(arr: { length: number }, obj: T): boolean;

    /**
     * Removes from an array the element at index i
     * @param {goog.array.ArrayLike} arr Array or array like object from which to
     *     remove value.
     * @param {number} i The index to remove.
     * @return {boolean} True if an element was removed.
     */
    function removeAt(arr: any[], i: number): boolean;
    /**
     * Removes from an array the element at index i
     * @param {goog.array.ArrayLike} arr Array or array like object from which to
     *     remove value.
     * @param {number} i The index to remove.
     * @return {boolean} True if an element was removed.
     */
    function removeAt(arr: NodeList, i: number): boolean;
    /**
     * Removes from an array the element at index i
     * @param {goog.array.ArrayLike} arr Array or array like object from which to
     *     remove value.
     * @param {number} i The index to remove.
     * @return {boolean} True if an element was removed.
     */
    function removeAt(arr: Arguments, i: number): boolean;
    /**
     * Removes from an array the element at index i
     * @param {goog.array.ArrayLike} arr Array or array like object from which to
     *     remove value.
     * @param {number} i The index to remove.
     * @return {boolean} True if an element was removed.
     */
    function removeAt(arr: { length: number }, i: number): boolean;

    /**
     * Removes the first value that satisfies the given condition.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function removeIf<T>(arr: T[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Removes the first value that satisfies the given condition.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function removeIf<T>(arr: any[], f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Removes the first value that satisfies the given condition.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function removeIf<T>(arr: NodeList, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Removes the first value that satisfies the given condition.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function removeIf<T>(arr: Arguments, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;
    /**
     * Removes the first value that satisfies the given condition.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array
     *     like object over which to iterate.
     * @param {?function(this:S, T, number, ?) : boolean} f The function to call
     *     for every element. This function
     *     takes 3 arguments (the element, the index and the array) and should
     *     return a boolean.
     * @param {S=} opt_obj An optional "this" context for the function.
     * @return {boolean} True if an element was removed.
     * @template T
     */
    function removeIf<T>(arr: { length: number }, f: (_0: T, _1: number, _2: any) => boolean, opt_obj?: any): boolean;

    /**
     * Returns a new array that is the result of joining the arguments.  If arrays
     * are passed then their items are added, however, if non-arrays are passed they
     * will be added to the return array as is.
     *
     * Note that ArrayLike objects will be added as is, rather than having their
     * items added.
     *
     * goog.array.concat([1, 2], [3, 4]) -> [1, 2, 3, 4]
     * goog.array.concat(0, [1, 2]) -> [0, 1, 2]
     * goog.array.concat([1, 2], null) -> [1, 2, null]
     *
     * There is bug in all current versions of IE (6, 7 and 8) where arrays created
     * in an iframe become corrupted soon (not immediately) after the iframe is
     * destroyed. This is common if loading data via goog.net.IframeIo, for example.
     * This corruption only affects the concat method which will start throwing
     * Catastrophic Errors (#-2147418113).
     *
     * See http://endoflow.com/scratch/corrupted-arrays.html for a test case.
     *
     * Internally goog.array should use this, so that all methods will continue to
     * work on these broken array objects.
     *
     * @param {...*} var_args Items to concatenate.  Arrays will have each item
     *     added, while primitives and objects will be added as is.
     * @return {!Array} The new resultant array.
     */
    function concat(...var_args: any[]): any[];

    /**
     * Returns a new array that contains the contents of all the arrays passed.
     * @param {...!Array.<T>} var_args
     * @return {!Array.<T>}
     * @template T
     */
    function join<T>(...var_args: T[][]): T[];

    /**
     * Converts an object to an array.
     * @param {Array.<T>|goog.array.ArrayLike} object  The object to convert to an
     *     array.
     * @return {!Array.<T>} The object converted into an array. If object has a
     *     length property, every property indexed with a non-negative number
     *     less than length will be included in the result. If object does not
     *     have a length property, an empty array will be returned.
     * @template T
     */
    function toArray<T>(object: T[]): T[];
    /**
     * Converts an object to an array.
     * @param {Array.<T>|goog.array.ArrayLike} object  The object to convert to an
     *     array.
     * @return {!Array.<T>} The object converted into an array. If object has a
     *     length property, every property indexed with a non-negative number
     *     less than length will be included in the result. If object does not
     *     have a length property, an empty array will be returned.
     * @template T
     */
    function toArray<T>(object: any[]): T[];
    /**
     * Converts an object to an array.
     * @param {Array.<T>|goog.array.ArrayLike} object  The object to convert to an
     *     array.
     * @return {!Array.<T>} The object converted into an array. If object has a
     *     length property, every property indexed with a non-negative number
     *     less than length will be included in the result. If object does not
     *     have a length property, an empty array will be returned.
     * @template T
     */
    function toArray<T>(object: NodeList): T[];
    /**
     * Converts an object to an array.
     * @param {Array.<T>|goog.array.ArrayLike} object  The object to convert to an
     *     array.
     * @return {!Array.<T>} The object converted into an array. If object has a
     *     length property, every property indexed with a non-negative number
     *     less than length will be included in the result. If object does not
     *     have a length property, an empty array will be returned.
     * @template T
     */
    function toArray<T>(object: Arguments): T[];
    /**
     * Converts an object to an array.
     * @param {Array.<T>|goog.array.ArrayLike} object  The object to convert to an
     *     array.
     * @return {!Array.<T>} The object converted into an array. If object has a
     *     length property, every property indexed with a non-negative number
     *     less than length will be included in the result. If object does not
     *     have a length property, an empty array will be returned.
     * @template T
     */
    function toArray<T>(object: { length: number }): T[];

    /**
     * Does a shallow copy of an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr  Array or array-like object to
     *     clone.
     * @return {!Array.<T>} Clone of the input array.
     * @template T
     */
    function clone<T>(arr: T[]): T[];
    /**
     * Does a shallow copy of an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr  Array or array-like object to
     *     clone.
     * @return {!Array.<T>} Clone of the input array.
     * @template T
     */
    function clone<T>(arr: any[]): T[];
    /**
     * Does a shallow copy of an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr  Array or array-like object to
     *     clone.
     * @return {!Array.<T>} Clone of the input array.
     * @template T
     */
    function clone<T>(arr: NodeList): T[];
    /**
     * Does a shallow copy of an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr  Array or array-like object to
     *     clone.
     * @return {!Array.<T>} Clone of the input array.
     * @template T
     */
    function clone<T>(arr: Arguments): T[];
    /**
     * Does a shallow copy of an array.
     * @param {Array.<T>|goog.array.ArrayLike} arr  Array or array-like object to
     *     clone.
     * @return {!Array.<T>} Clone of the input array.
     * @template T
     */
    function clone<T>(arr: { length: number }): T[];

    /**
     * Extends an array with another array, element, or "array like" object.
     * This function operates 'in-place', it does not create a new Array.
     *
     * Example:
     * var a = [];
     * goog.array.extend(a, [0, 1]);
     * a; // [0, 1]
     * goog.array.extend(a, 2);
     * a; // [0, 1, 2]
     *
     * @param {Array.<VALUE>} arr1  The array to modify.
     * @param {...(Array.<VALUE>|VALUE)} var_args The elements or arrays of elements
     *     to add to arr1.
     * @template VALUE
     */
    function extend<VALUE>(arr1: VALUE[], ...var_args: VALUE[][]): void;
    /**
     * Extends an array with another array, element, or "array like" object.
     * This function operates 'in-place', it does not create a new Array.
     *
     * Example:
     * var a = [];
     * goog.array.extend(a, [0, 1]);
     * a; // [0, 1]
     * goog.array.extend(a, 2);
     * a; // [0, 1, 2]
     *
     * @param {Array.<VALUE>} arr1  The array to modify.
     * @param {...(Array.<VALUE>|VALUE)} var_args The elements or arrays of elements
     *     to add to arr1.
     * @template VALUE
     */
    function extend<VALUE>(arr1: VALUE[], ...var_args: VALUE[]): void;

    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: T[], index: number, howMany: number, ...var_args: T[]): T[];
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: T[], index: any /*undefined*/, howMany: number, ...var_args: T[]): T[];
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: any[], index: number, howMany: number, ...var_args: T[]): T[];
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: any[], index: any /*undefined*/, howMany: number, ...var_args: T[]): T[];
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: NodeList, index: number, howMany: number, ...var_args: T[]): T[];
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: NodeList, index: any /*undefined*/, howMany: number, ...var_args: T[]): T[];
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: Arguments, index: number, howMany: number, ...var_args: T[]): T[];
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: Arguments, index: any /*undefined*/, howMany: number, ...var_args: T[]): T[];
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: { length: number }, index: number, howMany: number, ...var_args: T[]): T[];
    /**
     * Adds or removes elements from an array. This is a generic version of Array
     * splice. This means that it might work on other objects similar to arrays,
     * such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array to modify.
     * @param {number|undefined} index The index at which to start changing the
     *     array. If not defined, treated as 0.
     * @param {number} howMany How many elements to remove (0 means no removal. A
     *     value below 0 is treated as zero and so is any other non number. Numbers
     *     are floored).
     * @param {...T} var_args Optional, additional elements to insert into the
     *     array.
     * @return {!Array.<T>} the removed elements.
     * @template T
     */
    function splice<T>(arr: { length: number }, index: any /*undefined*/, howMany: number, ...var_args: T[]): T[];

    /**
     * Returns a new array from a segment of an array. This is a generic version of
     * Array slice. This means that it might work on other objects similar to
     * arrays, such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from
     * which to copy a segment.
     * @param {number} start The index of the first element to copy.
     * @param {number=} opt_end The index after the last element to copy.
     * @return {!Array.<T>} A new array containing the specified segment of the
     *     original array.
     * @template T
     */
    function slice<T>(arr: T[], start: number, opt_end?: number): T[];
    /**
     * Returns a new array from a segment of an array. This is a generic version of
     * Array slice. This means that it might work on other objects similar to
     * arrays, such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from
     * which to copy a segment.
     * @param {number} start The index of the first element to copy.
     * @param {number=} opt_end The index after the last element to copy.
     * @return {!Array.<T>} A new array containing the specified segment of the
     *     original array.
     * @template T
     */
    function slice<T>(arr: any[], start: number, opt_end?: number): T[];
    /**
     * Returns a new array from a segment of an array. This is a generic version of
     * Array slice. This means that it might work on other objects similar to
     * arrays, such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from
     * which to copy a segment.
     * @param {number} start The index of the first element to copy.
     * @param {number=} opt_end The index after the last element to copy.
     * @return {!Array.<T>} A new array containing the specified segment of the
     *     original array.
     * @template T
     */
    function slice<T>(arr: NodeList, start: number, opt_end?: number): T[];
    /**
     * Returns a new array from a segment of an array. This is a generic version of
     * Array slice. This means that it might work on other objects similar to
     * arrays, such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from
     * which to copy a segment.
     * @param {number} start The index of the first element to copy.
     * @param {number=} opt_end The index after the last element to copy.
     * @return {!Array.<T>} A new array containing the specified segment of the
     *     original array.
     * @template T
     */
    function slice<T>(arr: Arguments, start: number, opt_end?: number): T[];
    /**
     * Returns a new array from a segment of an array. This is a generic version of
     * Array slice. This means that it might work on other objects similar to
     * arrays, such as the arguments object.
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from
     * which to copy a segment.
     * @param {number} start The index of the first element to copy.
     * @param {number=} opt_end The index after the last element to copy.
     * @return {!Array.<T>} A new array containing the specified segment of the
     *     original array.
     * @template T
     */
    function slice<T>(arr: { length: number }, start: number, opt_end?: number): T[];

    /**
     * Removes all duplicates from an array (retaining only the first
     * occurrence of each array element).  This function modifies the
     * array in place and doesn't change the order of the non-duplicate items.
     *
     * For objects, duplicates are identified as having the same unique ID as
     * defined by {@link goog.getUid}.
     *
     * Alternatively you can specify a custom hash function that returns a unique
     * value for each item in the array it should consider unique.
     *
     * Runtime: N,
     * Worstcase space: 2N (no dupes)
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from which to remove
     *     duplicates.
     * @param {Array=} opt_rv An optional array in which to return the results,
     *     instead of performing the removal inplace.  If specified, the original
     *     array will remain unchanged.
     * @param {function(T):string=} opt_hashFn An optional function to use to
     *     apply to every item in the array. This function should return a unique
     *     value for each item in the array it should consider unique.
     * @template T
     */
    function removeDuplicates<T>(arr: T[], opt_rv?: any[], opt_hashFn?: (_0: T) => string): void;
    /**
     * Removes all duplicates from an array (retaining only the first
     * occurrence of each array element).  This function modifies the
     * array in place and doesn't change the order of the non-duplicate items.
     *
     * For objects, duplicates are identified as having the same unique ID as
     * defined by {@link goog.getUid}.
     *
     * Alternatively you can specify a custom hash function that returns a unique
     * value for each item in the array it should consider unique.
     *
     * Runtime: N,
     * Worstcase space: 2N (no dupes)
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from which to remove
     *     duplicates.
     * @param {Array=} opt_rv An optional array in which to return the results,
     *     instead of performing the removal inplace.  If specified, the original
     *     array will remain unchanged.
     * @param {function(T):string=} opt_hashFn An optional function to use to
     *     apply to every item in the array. This function should return a unique
     *     value for each item in the array it should consider unique.
     * @template T
     */
    function removeDuplicates<T>(arr: any[], opt_rv?: any[], opt_hashFn?: (_0: T) => string): void;
    /**
     * Removes all duplicates from an array (retaining only the first
     * occurrence of each array element).  This function modifies the
     * array in place and doesn't change the order of the non-duplicate items.
     *
     * For objects, duplicates are identified as having the same unique ID as
     * defined by {@link goog.getUid}.
     *
     * Alternatively you can specify a custom hash function that returns a unique
     * value for each item in the array it should consider unique.
     *
     * Runtime: N,
     * Worstcase space: 2N (no dupes)
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from which to remove
     *     duplicates.
     * @param {Array=} opt_rv An optional array in which to return the results,
     *     instead of performing the removal inplace.  If specified, the original
     *     array will remain unchanged.
     * @param {function(T):string=} opt_hashFn An optional function to use to
     *     apply to every item in the array. This function should return a unique
     *     value for each item in the array it should consider unique.
     * @template T
     */
    function removeDuplicates<T>(arr: NodeList, opt_rv?: any[], opt_hashFn?: (_0: T) => string): void;
    /**
     * Removes all duplicates from an array (retaining only the first
     * occurrence of each array element).  This function modifies the
     * array in place and doesn't change the order of the non-duplicate items.
     *
     * For objects, duplicates are identified as having the same unique ID as
     * defined by {@link goog.getUid}.
     *
     * Alternatively you can specify a custom hash function that returns a unique
     * value for each item in the array it should consider unique.
     *
     * Runtime: N,
     * Worstcase space: 2N (no dupes)
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from which to remove
     *     duplicates.
     * @param {Array=} opt_rv An optional array in which to return the results,
     *     instead of performing the removal inplace.  If specified, the original
     *     array will remain unchanged.
     * @param {function(T):string=} opt_hashFn An optional function to use to
     *     apply to every item in the array. This function should return a unique
     *     value for each item in the array it should consider unique.
     * @template T
     */
    function removeDuplicates<T>(arr: Arguments, opt_rv?: any[], opt_hashFn?: (_0: T) => string): void;
    /**
     * Removes all duplicates from an array (retaining only the first
     * occurrence of each array element).  This function modifies the
     * array in place and doesn't change the order of the non-duplicate items.
     *
     * For objects, duplicates are identified as having the same unique ID as
     * defined by {@link goog.getUid}.
     *
     * Alternatively you can specify a custom hash function that returns a unique
     * value for each item in the array it should consider unique.
     *
     * Runtime: N,
     * Worstcase space: 2N (no dupes)
     *
     * @param {Array.<T>|goog.array.ArrayLike} arr The array from which to remove
     *     duplicates.
     * @param {Array=} opt_rv An optional array in which to return the results,
     *     instead of performing the removal inplace.  If specified, the original
     *     array will remain unchanged.
     * @param {function(T):string=} opt_hashFn An optional function to use to
     *     apply to every item in the array. This function should return a unique
     *     value for each item in the array it should consider unique.
     * @template T
     */
    function removeDuplicates<T>(arr: { length: number }, opt_rv?: any[], opt_hashFn?: (_0: T) => string): void;

    /**
     * Searches the specified array for the specified target using the binary
     * search algorithm.  If no opt_compareFn is specified, elements are compared
     * using <code>goog.array.defaultCompare</code>, which compares the elements
     * using the built in < and > operators.  This will produce the expected
     * behavior for homogeneous arrays of String(s) and Number(s). The array
     * specified <b>must</b> be sorted in ascending order (as defined by the
     * comparison function).  If the array is not sorted, results are undefined.
     * If the array contains multiple instances of the specified target value, any
     * of these instances may be found.
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {TARGET} target The sought value.
     * @param {function(TARGET, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Lowest index of the target value if found, otherwise
     *     (-(insertion point) - 1). The insertion point is where the value should
     *     be inserted into arr to preserve the sorted property.  Return value >= 0
     *     iff target is found.
     * @template TARGET, VALUE
     */
    function binarySearch<TARGET, VALUE>(arr: VALUE[], target: TARGET, opt_compareFn?: (_0: TARGET, _1: VALUE) => number): number;
    /**
     * Searches the specified array for the specified target using the binary
     * search algorithm.  If no opt_compareFn is specified, elements are compared
     * using <code>goog.array.defaultCompare</code>, which compares the elements
     * using the built in < and > operators.  This will produce the expected
     * behavior for homogeneous arrays of String(s) and Number(s). The array
     * specified <b>must</b> be sorted in ascending order (as defined by the
     * comparison function).  If the array is not sorted, results are undefined.
     * If the array contains multiple instances of the specified target value, any
     * of these instances may be found.
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {TARGET} target The sought value.
     * @param {function(TARGET, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Lowest index of the target value if found, otherwise
     *     (-(insertion point) - 1). The insertion point is where the value should
     *     be inserted into arr to preserve the sorted property.  Return value >= 0
     *     iff target is found.
     * @template TARGET, VALUE
     */
    function binarySearch<TARGET, VALUE>(arr: any[], target: TARGET, opt_compareFn?: (_0: TARGET, _1: VALUE) => number): number;
    /**
     * Searches the specified array for the specified target using the binary
     * search algorithm.  If no opt_compareFn is specified, elements are compared
     * using <code>goog.array.defaultCompare</code>, which compares the elements
     * using the built in < and > operators.  This will produce the expected
     * behavior for homogeneous arrays of String(s) and Number(s). The array
     * specified <b>must</b> be sorted in ascending order (as defined by the
     * comparison function).  If the array is not sorted, results are undefined.
     * If the array contains multiple instances of the specified target value, any
     * of these instances may be found.
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {TARGET} target The sought value.
     * @param {function(TARGET, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Lowest index of the target value if found, otherwise
     *     (-(insertion point) - 1). The insertion point is where the value should
     *     be inserted into arr to preserve the sorted property.  Return value >= 0
     *     iff target is found.
     * @template TARGET, VALUE
     */
    function binarySearch<TARGET, VALUE>(arr: NodeList, target: TARGET, opt_compareFn?: (_0: TARGET, _1: VALUE) => number): number;
    /**
     * Searches the specified array for the specified target using the binary
     * search algorithm.  If no opt_compareFn is specified, elements are compared
     * using <code>goog.array.defaultCompare</code>, which compares the elements
     * using the built in < and > operators.  This will produce the expected
     * behavior for homogeneous arrays of String(s) and Number(s). The array
     * specified <b>must</b> be sorted in ascending order (as defined by the
     * comparison function).  If the array is not sorted, results are undefined.
     * If the array contains multiple instances of the specified target value, any
     * of these instances may be found.
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {TARGET} target The sought value.
     * @param {function(TARGET, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Lowest index of the target value if found, otherwise
     *     (-(insertion point) - 1). The insertion point is where the value should
     *     be inserted into arr to preserve the sorted property.  Return value >= 0
     *     iff target is found.
     * @template TARGET, VALUE
     */
    function binarySearch<TARGET, VALUE>(arr: Arguments, target: TARGET, opt_compareFn?: (_0: TARGET, _1: VALUE) => number): number;
    /**
     * Searches the specified array for the specified target using the binary
     * search algorithm.  If no opt_compareFn is specified, elements are compared
     * using <code>goog.array.defaultCompare</code>, which compares the elements
     * using the built in < and > operators.  This will produce the expected
     * behavior for homogeneous arrays of String(s) and Number(s). The array
     * specified <b>must</b> be sorted in ascending order (as defined by the
     * comparison function).  If the array is not sorted, results are undefined.
     * If the array contains multiple instances of the specified target value, any
     * of these instances may be found.
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {TARGET} target The sought value.
     * @param {function(TARGET, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Lowest index of the target value if found, otherwise
     *     (-(insertion point) - 1). The insertion point is where the value should
     *     be inserted into arr to preserve the sorted property.  Return value >= 0
     *     iff target is found.
     * @template TARGET, VALUE
     */
    function binarySearch<TARGET, VALUE>(arr: { length: number }, target: TARGET, opt_compareFn?: (_0: TARGET, _1: VALUE) => number): number;

    /**
     * Selects an index in the specified array using the binary search algorithm.
     * The evaluator receives an element and determines whether the desired index
     * is before, at, or after it.  The evaluator must be consistent (formally,
     * goog.array.map(goog.array.map(arr, evaluator, opt_obj), goog.math.sign)
     * must be monotonically non-increasing).
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {function(this:THIS, VALUE, number, ?): number} evaluator
     *     Evaluator function that receives 3 arguments (the element, the index and
     *     the array). Should return a negative number, zero, or a positive number
     *     depending on whether the desired index is before, at, or after the
     *     element passed to it.
     * @param {THIS=} opt_obj The object to be used as the value of 'this'
     *     within evaluator.
     * @return {number} Index of the leftmost element matched by the evaluator, if
     *     such exists; otherwise (-(insertion point) - 1). The insertion point is
     *     the index of the first element for which the evaluator returns negative,
     *     or arr.length if no such element exists. The return value is non-negative
     *     iff a match is found.
     * @template THIS, VALUE
     */
    function binarySelect<THIS, VALUE>(arr: VALUE[], evaluator: (_0: VALUE, _1: number, _2: any) => number, opt_obj?: THIS): number;
    /**
     * Selects an index in the specified array using the binary search algorithm.
     * The evaluator receives an element and determines whether the desired index
     * is before, at, or after it.  The evaluator must be consistent (formally,
     * goog.array.map(goog.array.map(arr, evaluator, opt_obj), goog.math.sign)
     * must be monotonically non-increasing).
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {function(this:THIS, VALUE, number, ?): number} evaluator
     *     Evaluator function that receives 3 arguments (the element, the index and
     *     the array). Should return a negative number, zero, or a positive number
     *     depending on whether the desired index is before, at, or after the
     *     element passed to it.
     * @param {THIS=} opt_obj The object to be used as the value of 'this'
     *     within evaluator.
     * @return {number} Index of the leftmost element matched by the evaluator, if
     *     such exists; otherwise (-(insertion point) - 1). The insertion point is
     *     the index of the first element for which the evaluator returns negative,
     *     or arr.length if no such element exists. The return value is non-negative
     *     iff a match is found.
     * @template THIS, VALUE
     */
    function binarySelect<THIS, VALUE>(arr: any[], evaluator: (_0: VALUE, _1: number, _2: any) => number, opt_obj?: THIS): number;
    /**
     * Selects an index in the specified array using the binary search algorithm.
     * The evaluator receives an element and determines whether the desired index
     * is before, at, or after it.  The evaluator must be consistent (formally,
     * goog.array.map(goog.array.map(arr, evaluator, opt_obj), goog.math.sign)
     * must be monotonically non-increasing).
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {function(this:THIS, VALUE, number, ?): number} evaluator
     *     Evaluator function that receives 3 arguments (the element, the index and
     *     the array). Should return a negative number, zero, or a positive number
     *     depending on whether the desired index is before, at, or after the
     *     element passed to it.
     * @param {THIS=} opt_obj The object to be used as the value of 'this'
     *     within evaluator.
     * @return {number} Index of the leftmost element matched by the evaluator, if
     *     such exists; otherwise (-(insertion point) - 1). The insertion point is
     *     the index of the first element for which the evaluator returns negative,
     *     or arr.length if no such element exists. The return value is non-negative
     *     iff a match is found.
     * @template THIS, VALUE
     */
    function binarySelect<THIS, VALUE>(arr: NodeList, evaluator: (_0: VALUE, _1: number, _2: any) => number, opt_obj?: THIS): number;
    /**
     * Selects an index in the specified array using the binary search algorithm.
     * The evaluator receives an element and determines whether the desired index
     * is before, at, or after it.  The evaluator must be consistent (formally,
     * goog.array.map(goog.array.map(arr, evaluator, opt_obj), goog.math.sign)
     * must be monotonically non-increasing).
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {function(this:THIS, VALUE, number, ?): number} evaluator
     *     Evaluator function that receives 3 arguments (the element, the index and
     *     the array). Should return a negative number, zero, or a positive number
     *     depending on whether the desired index is before, at, or after the
     *     element passed to it.
     * @param {THIS=} opt_obj The object to be used as the value of 'this'
     *     within evaluator.
     * @return {number} Index of the leftmost element matched by the evaluator, if
     *     such exists; otherwise (-(insertion point) - 1). The insertion point is
     *     the index of the first element for which the evaluator returns negative,
     *     or arr.length if no such element exists. The return value is non-negative
     *     iff a match is found.
     * @template THIS, VALUE
     */
    function binarySelect<THIS, VALUE>(arr: Arguments, evaluator: (_0: VALUE, _1: number, _2: any) => number, opt_obj?: THIS): number;
    /**
     * Selects an index in the specified array using the binary search algorithm.
     * The evaluator receives an element and determines whether the desired index
     * is before, at, or after it.  The evaluator must be consistent (formally,
     * goog.array.map(goog.array.map(arr, evaluator, opt_obj), goog.math.sign)
     * must be monotonically non-increasing).
     *
     * Runtime: O(log n)
     *
     * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched.
     * @param {function(this:THIS, VALUE, number, ?): number} evaluator
     *     Evaluator function that receives 3 arguments (the element, the index and
     *     the array). Should return a negative number, zero, or a positive number
     *     depending on whether the desired index is before, at, or after the
     *     element passed to it.
     * @param {THIS=} opt_obj The object to be used as the value of 'this'
     *     within evaluator.
     * @return {number} Index of the leftmost element matched by the evaluator, if
     *     such exists; otherwise (-(insertion point) - 1). The insertion point is
     *     the index of the first element for which the evaluator returns negative,
     *     or arr.length if no such element exists. The return value is non-negative
     *     iff a match is found.
     * @template THIS, VALUE
     */
    function binarySelect<THIS, VALUE>(arr: { length: number }, evaluator: (_0: VALUE, _1: number, _2: any) => number, opt_obj?: THIS): number;

    /**
     * Sorts the specified array into ascending order.  If no opt_compareFn is
     * specified, elements are compared using
     * <code>goog.array.defaultCompare</code>, which compares the elements using
     * the built in < and > operators.  This will produce the expected behavior
     * for homogeneous arrays of String(s) and Number(s), unlike the native sort,
     * but will give unpredictable results for heterogenous lists of strings and
     * numbers with different numbers of digits.
     *
     * This sort is not guaranteed to be stable.
     *
     * Runtime: Same as <code>Array.prototype.sort</code>
     *
     * @param {Array.<T>} arr The array to be sorted.
     * @param {?function(T,T):number=} opt_compareFn Optional comparison
     *     function by which the
     *     array is to be ordered. Should take 2 arguments to compare, and return a
     *     negative number, zero, or a positive number depending on whether the
     *     first argument is less than, equal to, or greater than the second.
     * @template T
     */
    function sort<T>(arr: T[], opt_compareFn?: (_0: T, _1: T) => number): void;

    /**
     * Sorts the specified array into ascending order in a stable way.  If no
     * opt_compareFn is specified, elements are compared using
     * <code>goog.array.defaultCompare</code>, which compares the elements using
     * the built in < and > operators.  This will produce the expected behavior
     * for homogeneous arrays of String(s) and Number(s).
     *
     * Runtime: Same as <code>Array.prototype.sort</code>, plus an additional
     * O(n) overhead of copying the array twice.
     *
     * @param {Array.<T>} arr The array to be sorted.
     * @param {?function(T, T): number=} opt_compareFn Optional comparison function
     *     by which the array is to be ordered. Should take 2 arguments to compare,
     *     and return a negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template T
     */
    function stableSort<T>(arr: T[], opt_compareFn?: (_0: T, _1: T) => number): void;

    /**
     * Sorts an array of objects by the specified object key and compare
     * function. If no compare function is provided, the key values are
     * compared in ascending order using <code>goog.array.defaultCompare</code>.
     * This won't work for keys that get renamed by the compiler. So use
     * {'foo': 1, 'bar': 2} rather than {foo: 1, bar: 2}.
     * @param {Array.<Object>} arr An array of objects to sort.
     * @param {string} key The object key to sort by.
     * @param {Function=} opt_compareFn The function to use to compare key
     *     values.
     */
    function sortObjectsByKey(arr: Object[], key: string, opt_compareFn?: Function): void;

    /**
     * Tells if the array is sorted.
     * @param {!Array.<T>} arr The array.
     * @param {?function(T,T):number=} opt_compareFn Function to compare the
     *     array elements.
     *     Should take 2 arguments to compare, and return a negative number, zero,
     *     or a positive number depending on whether the first argument is less
     *     than, equal to, or greater than the second.
     * @param {boolean=} opt_strict If true no equal elements are allowed.
     * @return {boolean} Whether the array is sorted.
     * @template T
     */
    function isSorted<T>(arr: T[], opt_compareFn?: (_0: T, _1: T) => number, opt_strict?: boolean): boolean;

    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: any[], arr2: any[], opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: any[], arr2: NodeList, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: any[], arr2: Arguments, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: any[], arr2: { length: number }, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: NodeList, arr2: any[], opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: NodeList, arr2: NodeList, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: NodeList, arr2: Arguments, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: NodeList, arr2: { length: number }, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: Arguments, arr2: any[], opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: Arguments, arr2: NodeList, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: Arguments, arr2: Arguments, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: Arguments, arr2: { length: number }, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: { length: number }, arr2: any[], opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: { length: number }, arr2: NodeList, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: { length: number }, arr2: Arguments, opt_equalsFn?: Function): boolean;
    /**
     * Compares two arrays for equality. Two arrays are considered equal if they
     * have the same length and their corresponding elements are equal according to
     * the comparison function.
     *
     * @param {goog.array.ArrayLike} arr1 The first array to compare.
     * @param {goog.array.ArrayLike} arr2 The second array to compare.
     * @param {Function=} opt_equalsFn Optional comparison function.
     *     Should take 2 arguments to compare, and return true if the arguments
     *     are equal. Defaults to {@link goog.array.defaultCompareEquality} which
     *     compares the elements using the built-in '===' operator.
     * @return {boolean} Whether the two arrays are equal.
     */
    function equals(arr1: { length: number }, arr2: { length: number }, opt_equalsFn?: Function): boolean;

    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: VALUE[], arr2: VALUE[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: VALUE[], arr2: any[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: VALUE[], arr2: NodeList, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: VALUE[], arr2: Arguments, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: VALUE[], arr2: { length: number }, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: any[], arr2: VALUE[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: any[], arr2: any[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: any[], arr2: NodeList, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: any[], arr2: Arguments, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: any[], arr2: { length: number }, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: NodeList, arr2: VALUE[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: NodeList, arr2: any[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: NodeList, arr2: NodeList, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: NodeList, arr2: Arguments, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: NodeList, arr2: { length: number }, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: Arguments, arr2: VALUE[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: Arguments, arr2: any[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: Arguments, arr2: NodeList, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: Arguments, arr2: Arguments, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: Arguments, arr2: { length: number }, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: { length: number }, arr2: VALUE[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: { length: number }, arr2: any[], opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: { length: number }, arr2: NodeList, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: { length: number }, arr2: Arguments, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;
    /**
     * 3-way array compare function.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr1 The first array to
     *     compare.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} arr2 The second array to
     *     compare.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is to be ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {number} Negative number, zero, or a positive number depending on
     *     whether the first argument is less than, equal to, or greater than the
     *     second.
     * @template VALUE
     */
    function compare3<VALUE>(arr1: { length: number }, arr2: { length: number }, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): number;

    /**
     * Compares its two arguments for order, using the built in < and >
     * operators.
     * @param {VALUE} a The first object to be compared.
     * @param {VALUE} b The second object to be compared.
     * @return {number} A negative number, zero, or a positive number as the first
     *     argument is less than, equal to, or greater than the second.
     * @template VALUE
     */
    function defaultCompare<VALUE>(a: VALUE, b: VALUE): number;

    /**
     * Compares its two arguments for equality, using the built in === operator.
     * @param {*} a The first object to compare.
     * @param {*} b The second object to compare.
     * @return {boolean} True if the two arguments are equal, false otherwise.
     */
    function defaultCompareEquality(a: any, b: any): boolean;

    /**
     * Inserts a value into a sorted array. The array is not modified if the
     * value is already present.
     * @param {Array.<VALUE>|goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to insert.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was inserted.
     * @template VALUE
     */
    function binaryInsert<VALUE>(array: VALUE[], value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;
    /**
     * Inserts a value into a sorted array. The array is not modified if the
     * value is already present.
     * @param {Array.<VALUE>|goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to insert.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was inserted.
     * @template VALUE
     */
    function binaryInsert<VALUE>(array: any[], value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;
    /**
     * Inserts a value into a sorted array. The array is not modified if the
     * value is already present.
     * @param {Array.<VALUE>|goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to insert.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was inserted.
     * @template VALUE
     */
    function binaryInsert<VALUE>(array: NodeList, value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;
    /**
     * Inserts a value into a sorted array. The array is not modified if the
     * value is already present.
     * @param {Array.<VALUE>|goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to insert.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was inserted.
     * @template VALUE
     */
    function binaryInsert<VALUE>(array: Arguments, value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;
    /**
     * Inserts a value into a sorted array. The array is not modified if the
     * value is already present.
     * @param {Array.<VALUE>|goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to insert.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was inserted.
     * @template VALUE
     */
    function binaryInsert<VALUE>(array: { length: number }, value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;

    /**
     * Removes a value from a sorted array.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to remove.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was removed.
     * @template VALUE
     */
    function binaryRemove<VALUE>(array: VALUE[], value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;
    /**
     * Removes a value from a sorted array.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to remove.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was removed.
     * @template VALUE
     */
    function binaryRemove<VALUE>(array: any[], value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;
    /**
     * Removes a value from a sorted array.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to remove.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was removed.
     * @template VALUE
     */
    function binaryRemove<VALUE>(array: NodeList, value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;
    /**
     * Removes a value from a sorted array.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to remove.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was removed.
     * @template VALUE
     */
    function binaryRemove<VALUE>(array: Arguments, value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;
    /**
     * Removes a value from a sorted array.
     * @param {!Array.<VALUE>|!goog.array.ArrayLike} array The array to modify.
     * @param {VALUE} value The object to remove.
     * @param {function(VALUE, VALUE): number=} opt_compareFn Optional comparison
     *     function by which the array is ordered. Should take 2 arguments to
     *     compare, and return a negative number, zero, or a positive number
     *     depending on whether the first argument is less than, equal to, or
     *     greater than the second.
     * @return {boolean} True if an element was removed.
     * @template VALUE
     */
    function binaryRemove<VALUE>(array: { length: number }, value: VALUE, opt_compareFn?: (_0: VALUE, _1: VALUE) => number): boolean;

    /**
     * Splits an array into disjoint buckets according to a splitting function.
     * @param {Array.<T>} array The array.
     * @param {function(this:S, T,number,Array.<T>):?} sorter Function to call for
     *     every element.  This takes 3 arguments (the element, the index and the
     *     array) and must return a valid object key (a string, number, etc), or
     *     undefined, if that object should not be placed in a bucket.
     * @param {S=} opt_obj The object to be used as the value of 'this' within
     *     sorter.
     * @return {!Object} An object, with keys being all of the unique return values
     *     of sorter, and values being arrays containing the items for
     *     which the splitter returned that key.
     * @template T
     */
    function bucket<T>(array: T[], sorter: (_0: T, _1: number, _2: T[]) => any, opt_obj?: any): Object;

    /**
     * Creates a new object built from the provided array and the key-generation
     * function.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate whose elements will be the values in the new object.
     * @param {?function(this:S, T, number, ?) : string} keyFunc The function to
     *     call for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a string that will be used as the
     *     key for the element in the new object. If the function returns the same
     *     key for more than one element, the value for that key is
     *     implementation-defined.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within keyFunc.
     * @return {!Object.<T>} The new object.
     * @template T
     */
    function toObject<T>(arr: T[], keyFunc: (_0: T, _1: number, _2: any) => string, opt_obj?: any): { [key: string]: any /*missing*/ };
    /**
     * Creates a new object built from the provided array and the key-generation
     * function.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate whose elements will be the values in the new object.
     * @param {?function(this:S, T, number, ?) : string} keyFunc The function to
     *     call for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a string that will be used as the
     *     key for the element in the new object. If the function returns the same
     *     key for more than one element, the value for that key is
     *     implementation-defined.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within keyFunc.
     * @return {!Object.<T>} The new object.
     * @template T
     */
    function toObject<T>(arr: any[], keyFunc: (_0: T, _1: number, _2: any) => string, opt_obj?: any): { [key: string]: any /*missing*/ };
    /**
     * Creates a new object built from the provided array and the key-generation
     * function.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate whose elements will be the values in the new object.
     * @param {?function(this:S, T, number, ?) : string} keyFunc The function to
     *     call for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a string that will be used as the
     *     key for the element in the new object. If the function returns the same
     *     key for more than one element, the value for that key is
     *     implementation-defined.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within keyFunc.
     * @return {!Object.<T>} The new object.
     * @template T
     */
    function toObject<T>(arr: NodeList, keyFunc: (_0: T, _1: number, _2: any) => string, opt_obj?: any): { [key: string]: any /*missing*/ };
    /**
     * Creates a new object built from the provided array and the key-generation
     * function.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate whose elements will be the values in the new object.
     * @param {?function(this:S, T, number, ?) : string} keyFunc The function to
     *     call for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a string that will be used as the
     *     key for the element in the new object. If the function returns the same
     *     key for more than one element, the value for that key is
     *     implementation-defined.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within keyFunc.
     * @return {!Object.<T>} The new object.
     * @template T
     */
    function toObject<T>(arr: Arguments, keyFunc: (_0: T, _1: number, _2: any) => string, opt_obj?: any): { [key: string]: any /*missing*/ };
    /**
     * Creates a new object built from the provided array and the key-generation
     * function.
     * @param {Array.<T>|goog.array.ArrayLike} arr Array or array like object over
     *     which to iterate whose elements will be the values in the new object.
     * @param {?function(this:S, T, number, ?) : string} keyFunc The function to
     *     call for every element. This function takes 3 arguments (the element, the
     *     index and the array) and should return a string that will be used as the
     *     key for the element in the new object. If the function returns the same
     *     key for more than one element, the value for that key is
     *     implementation-defined.
     * @param {S=} opt_obj The object to be used as the value of 'this'
     *     within keyFunc.
     * @return {!Object.<T>} The new object.
     * @template T
     */
    function toObject<T>(arr: { length: number }, keyFunc: (_0: T, _1: number, _2: any) => string, opt_obj?: any): { [key: string]: any /*missing*/ };

    /**
     * Creates a range of numbers in an arithmetic progression.
     *
     * Range takes 1, 2, or 3 arguments:
     * <pre>
     * range(5) is the same as range(0, 5, 1) and produces [0, 1, 2, 3, 4]
     * range(2, 5) is the same as range(2, 5, 1) and produces [2, 3, 4]
     * range(-2, -5, -1) produces [-2, -3, -4]
     * range(-2, -5, 1) produces [], since stepping by 1 wouldn't ever reach -5.
     * </pre>
     *
     * @param {number} startOrEnd The starting value of the range if an end argument
     *     is provided. Otherwise, the start value is 0, and this is the end value.
     * @param {number=} opt_end The optional end value of the range.
     * @param {number=} opt_step The step size between range values. Defaults to 1
     *     if opt_step is undefined or 0.
     * @return {!Array.<number>} An array of numbers for the requested range. May be
     *     an empty array if adding the step would not converge toward the end
     *     value.
     */
    function range(startOrEnd: number, opt_end?: number, opt_step?: number): number[];

    /**
     * Returns an array consisting of the given value repeated N times.
     *
     * @param {VALUE} value The value to repeat.
     * @param {number} n The repeat count.
     * @return {!Array.<VALUE>} An array with the repeated value.
     * @template VALUE
     */
    function repeat<VALUE>(value: VALUE, n: number): VALUE[];

    /**
     * Returns an array consisting of every argument with all arrays
     * expanded in-place recursively.
     *
     * @param {...*} var_args The values to flatten.
     * @return {!Array} An array containing the flattened values.
     */
    function flatten(...var_args: any[]): any[];

    /**
     * Rotates an array in-place. After calling this method, the element at
     * index i will be the element previously at index (i - n) %
     * array.length, for all values of i between 0 and array.length - 1,
     * inclusive.
     *
     * For example, suppose list comprises [t, a, n, k, s]. After invoking
     * rotate(array, 1) (or rotate(array, -4)), array will comprise [s, t, a, n, k].
     *
     * @param {!Array.<T>} array The array to rotate.
     * @param {number} n The amount to rotate.
     * @return {!Array.<T>} The array.
     * @template T
     */
    function rotate<T>(array: T[], n: number): T[];

    /**
     * Moves one item of an array to a new position keeping the order of the rest
     * of the items. Example use case: keeping a list of JavaScript objects
     * synchronized with the corresponding list of DOM elements after one of the
     * elements has been dragged to a new position.
     * @param {!(Array|Arguments|{length:number})} arr The array to modify.
     * @param {number} fromIndex Index of the item to move between 0 and
     *     {@code arr.length - 1}.
     * @param {number} toIndex Target index between 0 and {@code arr.length - 1}.
     */
    function moveItem(arr: any[], fromIndex: number, toIndex: number): void;
    /**
     * Moves one item of an array to a new position keeping the order of the rest
     * of the items. Example use case: keeping a list of JavaScript objects
     * synchronized with the corresponding list of DOM elements after one of the
     * elements has been dragged to a new position.
     * @param {!(Array|Arguments|{length:number})} arr The array to modify.
     * @param {number} fromIndex Index of the item to move between 0 and
     *     {@code arr.length - 1}.
     * @param {number} toIndex Target index between 0 and {@code arr.length - 1}.
     */
    function moveItem(arr: Arguments, fromIndex: number, toIndex: number): void;
    /**
     * Moves one item of an array to a new position keeping the order of the rest
     * of the items. Example use case: keeping a list of JavaScript objects
     * synchronized with the corresponding list of DOM elements after one of the
     * elements has been dragged to a new position.
     * @param {!(Array|Arguments|{length:number})} arr The array to modify.
     * @param {number} fromIndex Index of the item to move between 0 and
     *     {@code arr.length - 1}.
     * @param {number} toIndex Target index between 0 and {@code arr.length - 1}.
     */
    function moveItem(arr: { length: number }, fromIndex: number, toIndex: number): void;

    /**
     * Creates a new array for which the element at position i is an array of the
     * ith element of the provided arrays.  The returned array will only be as long
     * as the shortest array provided; additional values are ignored.  For example,
     * the result of zipping [1, 2] and [3, 4, 5] is [[1,3], [2, 4]].
     *
     * This is similar to the zip() function in Python.  See {@link
     * http://docs.python.org/library/functions.html#zip}
     *
     * @param {...!goog.array.ArrayLike} var_args Arrays to be combined.
     * @return {!Array.<!Array>} A new array of arrays created from provided arrays.
     */
    function zip(...var_args: any[][]): any[][];
    /**
     * Creates a new array for which the element at position i is an array of the
     * ith element of the provided arrays.  The returned array will only be as long
     * as the shortest array provided; additional values are ignored.  For example,
     * the result of zipping [1, 2] and [3, 4, 5] is [[1,3], [2, 4]].
     *
     * This is similar to the zip() function in Python.  See {@link
     * http://docs.python.org/library/functions.html#zip}
     *
     * @param {...!goog.array.ArrayLike} var_args Arrays to be combined.
     * @return {!Array.<!Array>} A new array of arrays created from provided arrays.
     */
    function zip(...var_args: NodeList[]): any[][];
    /**
     * Creates a new array for which the element at position i is an array of the
     * ith element of the provided arrays.  The returned array will only be as long
     * as the shortest array provided; additional values are ignored.  For example,
     * the result of zipping [1, 2] and [3, 4, 5] is [[1,3], [2, 4]].
     *
     * This is similar to the zip() function in Python.  See {@link
     * http://docs.python.org/library/functions.html#zip}
     *
     * @param {...!goog.array.ArrayLike} var_args Arrays to be combined.
     * @return {!Array.<!Array>} A new array of arrays created from provided arrays.
     */
    function zip(...var_args: Arguments[]): any[][];
    /**
     * Creates a new array for which the element at position i is an array of the
     * ith element of the provided arrays.  The returned array will only be as long
     * as the shortest array provided; additional values are ignored.  For example,
     * the result of zipping [1, 2] and [3, 4, 5] is [[1,3], [2, 4]].
     *
     * This is similar to the zip() function in Python.  See {@link
     * http://docs.python.org/library/functions.html#zip}
     *
     * @param {...!goog.array.ArrayLike} var_args Arrays to be combined.
     * @return {!Array.<!Array>} A new array of arrays created from provided arrays.
     */
    function zip(...var_args: { length: number }[]): any[][];

    /**
     * Shuffles the values in the specified array using the Fisher-Yates in-place
     * shuffle (also known as the Knuth Shuffle). By default, calls Math.random()
     * and so resets the state of that random number generator. Similarly, may reset
     * the state of the any other specified random number generator.
     *
     * Runtime: O(n)
     *
     * @param {!Array} arr The array to be shuffled.
     * @param {function():number=} opt_randFn Optional random function to use for
     *     shuffling.
     *     Takes no arguments, and returns a random number on the interval [0, 1).
     *     Defaults to Math.random() using JavaScript's built-in Math library.
     */
    function shuffle(arr: any[], opt_randFn?: () => number): void;
}
