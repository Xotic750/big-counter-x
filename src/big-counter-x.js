/**
 * @file A big counter.
 * @version 3.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module big-counter-x
 */

import defineProperties from 'object-define-properties-x';

import isFalsey from 'is-falsey-x';
import slice from 'array-slice-x';
import reduceRight from 'array-reduce-right-x';

const reducer = function _reducer(acc, digit) {
  return acc + digit;
};

/**
 * Serialise the counter´s current value.
 *
 * @private
 * @this BigCounter
 * @returns {string} A string representation of an integer.
 */
const counterToString = function ToString() {
  return reduceRight(this.count, reducer, '');
};

/**
 * The BigCounter class.
 *
 * @private
 * @class
 */
var BigC = function BigCounter() {
  if (isFalsey(this) || this instanceof BigC === false) {
    throw new TypeError('Constructor BigCounter requires "new"');
  }

  defineProperties(this, {
    count: {
      value: [0],
    },
  });
};

defineProperties(BigC.prototype, {
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  get: {
    value: counterToString,
  },
  /**
   * Increments the counter´s value by `1`.
   *
   * @function
   * @returns {object} The counter object.
   */
  next: {
    value: function next() {
      const clone = slice(this.count);
      this.count.length = 0;
      const {length} = clone;
      const howMany = length > 0 ? length : 1;
      let carry = 0;
      let index = 0;
      while (index < howMany || carry) {
        const zi = carry + (clone[index] || 0) + (index === 0);
        this.count[this.count.length] = zi % 10;
        carry = (zi / 10) >> 0; // floor
        index += 1;
      }

      return this;
    },
  },
  /**
   * Resets the counter back to `0`.
   *
   * @function
   * @returns {object} The counter object.
   */
  reset: {
    value: function reset() {
      this.count.length = 1;
      this.count[0] = 0;

      return this;
    },
  },
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toJSON: {
    value: counterToString,
  },
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toString: {
    value: counterToString,
  },
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  valueOf: {
    value: counterToString,
  },
});

/**
 * Incremental integer counter. Counts from `0` to very big intergers.
 * Javascript´s number type allows you to count in integer steps
 * from `0` to `9007199254740991`. As of ES5, Strings can contain
 * approximately 65000 characters and ES6 is supposed to handle
 * the `MAX_SAFE_INTEGER` (though I don´t believe any environments supports
 * this). This counter represents integer values as strings and can therefore
 * count in integer steps from `0` to the maximum string length (that´s some
 * 65000 digits). In the lower range, upto `9007199254740991`, the strings can
 * be converted to safe Javascript integers `Number(value)` or `+value`. This
 * counter is great for any applications that need a really big count
 * represented as a string, (an ID string).
 *
 * @class
 * @example
 * var BigCounter = require('big-counter-x');
 * var counter = new BigCounter();
 *
 * counter.get(); // '0'
 * counter.next(); // counter object
 * counter.get(); // '1'
 *
 * // Methods are chainable.
 * counter.next().next(); // counter object
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
export default BigC;
