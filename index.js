/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/big-counter-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/big-counter-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/big-counter-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/big-counter-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/big-counter-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/big-counter-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/big-counter-x" title="npm version">
 * <img src="https://badge.fury.io/js/big-counter-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * A big counter module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module big-counter-x
 */

/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:1,
   maxstatements:3, maxcomplexity:2 */

/* eslint strict: 1, max-statements: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var pPush = Array.prototype.push;
  var pJoin = Array.prototype.join;
  var define = require('define-properties-x');
  var stubTrue = require('lodash.stubtrue');
  var $max = Math.max;
  var $floor = Math.floor;

  /**
   * Increments the counter's value by `1`.
   *
   * @private
   * @return {Object} The counter object.
   */
  var counterNext = function () {
    /* jshint validthis:true */
    /* eslint no-invalid-this: 1 */
    var result = [];
    var length = this.count.length;
    var howMany = $max(length, 1);
    var carry = 0;
    var index = 0;
    while (index < howMany || carry) {
      var zi = carry + (index < length ? this.count[index] : 0) + !index;
      pPush.call(result, zi % 10);
      carry = $floor(zi / 10);
      index += 1;
    }
    this.count = result;
    return this;
  };

  /**
   * Serialise the counter's current value.
   *
   * @private
   * @this BigCounter
   * @return {string} A string representation of an integer.
   */
  var counterToString = function () {
    /* jshint validthis:true */
    return pJoin.call(this.count, '');
  };

  /**
   * The BigCounter class.
   *
   * @private
   * @constructor
   */
  var BigCounter = function () {
    /* istanbul ignore if */
    if (!this || !(this instanceof BigCounter)) {
      return new BigCounter();
    }
    define.property(this, 'count', [0]);
    return this;
  };

  define.properties(BigCounter.prototype, {
    /**
     * Gets the counter's current value.
     *
     * @function
     * @return {string} A string representation of an integer.
     */
    get: counterToString,
    /**
     * Increments the counter's value by `1`.
     *
     * @function
     * @return {Object} The counter object.
     */
    inc: counterNext,

    /**
     * Increments the counter's value by `1`.
     *
     * @function
     * @return {Object} The counter object.
     */
    next: counterNext,
    /**
     * Resets the counter back to `0`.
     *
     * @function
     * @return {Object} The counter object.
     */
    reset: function () {
      this.count.length = 0;
      pPush.call(this.count, 0);
      return this;
    },
    /**
     * Gets the counter's current value.
     *
     * @function
     * @return {string} A string representation of an integer.
     */
    toJSON: counterToString,
    /**
     * Gets the counter's current value.
     *
     * @function
     * @return {string} A string representation of an integer.
     */
    toString: counterToString,
    /**
     * Gets the counter's current value.
     *
     * @function
     * @return {string} A string representation of an integer.
     */
    valueOf: counterToString
  }, {
    toJSON: stubTrue,
    toString: stubTrue,
    valueOf: stubTrue
  });

  /**
   * Incremental integer counter. Counts from `0` to very big intergers.
   * Javascript's number type allows you to count in integer steps
   * from `0` to `9007199254740991`. As of ES5, Strings can contain
   * approximately 65000 characters and ES6 is supposed to handle
   * the `MAX_SAFE_INTEGER` (though I don't believe any environments supports
   * this). This counter represents integer values as strings and can therefore
   * count in integer steps from `0` to the maximum string length (that's some
   * 65000 digits). In the lower range, upto `9007199254740991`, the strings can
   * be converted to safe Javascript integers `Number(value)` or `+value`. This
   * counter is great for any applications that need a really big count
   * represented as a string, (an ID string).
   *
   * @constructor
   * @example
   * var BigCounter = require('big-counter-x');
   * var counter = new BigCounter();
   *
   * counter.get(); // '0'
   * counter.next(); // counter object
   * counter.get(); // '1'
   *
   * // Methods are chainable.
   * counter.inc().next(); // counter object
   * counter.get(); // '3'
   *
   * counter.reset(); // counter object
   * counter.get(); // '0'
   * counter.toString(); // '0'
   * counter.valueOf(); // '0'
   * counter.toJSON(); // '0'
   *
   * // Values upto `9007199254740991` convert to numbers.
   * Number(counter); // 0
   * +counter; // 0
   */
  module.exports = BigCounter;
}());
