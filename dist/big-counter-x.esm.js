import defineProperties from 'object-define-properties-x';
import slice from 'array-slice-x';
import reduceRight from 'array-reduce-right-x';
/** @type {BooleanConstructor} */

var castBoolean = true.constructor;

var reducer = function _reducer(acc, digit) {
  return acc + digit;
};
/**
 * Serialise the counter´s current value.
 *
 * @private
 * @this BigCounter
 * @returns {string} A string representation of an integer.
 */


var counterToString = function ToString() {
  return reduceRight(this.count, reducer, '');
};
/**
 * Incremental integer counter. Counts from `0` to very big integers.
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
 * @property {Array<number>} count - A representation of a big number.
 */


export default function BigCounter() {
  if (castBoolean(this) === false || this instanceof BigCounter === false) {
    throw new TypeError('Constructor BigCounter requires "new"');
  }

  defineProperties(this, {
    count: {
      value: [0]
    }
  });
}
defineProperties(BigCounter.prototype, {
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  get: {
    value: counterToString
  },

  /**
   * Increments the counter´s value by `1`.
   *
   * @function
   * @returns {object} The counter object.
   */
  next: {
    value: function next() {
      var clone = slice(this.count);
      this.count.length = 0;
      var length = clone.length;
      var howMany = length > 0 ? length : 1;
      var carry = 0;
      var index = 0;

      while (index < howMany || carry) {
        var zi = carry + (clone[index] || 0) + (index === 0);
        this.count[this.count.length] = zi % 10;
        /* eslint-disable-next-line no-bitwise */

        carry = zi / 10 >> 0; // floor

        index += 1;
      }

      return this;
    }
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
    }
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toJSON: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toString: {
    value: counterToString
  },

  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  valueOf: {
    value: counterToString
  }
});

//# sourceMappingURL=big-counter-x.esm.js.map