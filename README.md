<a
  href="https://travis-ci.org/Xotic750/big-counter-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/big-counter-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/big-counter-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/big-counter-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/big-counter-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/big-counter-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/big-counter-x"
  title="npm version">
<img src="https://badge.fury.io/js/big-counter-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/big-counter-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/big-counter-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/big-counter-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/big-counter-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_big-counter-x"></a>

## big-counter-x

A big counter.

- [big-counter-x](#module_big-counter-x)
  - [module.exports](#exp_module_big-counter-x--module.exports) ⏏
    - [`new module.exports()`](#new_module_big-counter-x--module.exports_new)
    - [`~get()`](#module_big-counter-x--module.exports..get) ⇒ <code>string</code>
    - [`~next()`](#module_big-counter-x--module.exports..next) ⇒ <code>Object</code>
    - [`~reset()`](#module_big-counter-x--module.exports..reset) ⇒ <code>Object</code>
    - [`~toJSON()`](#module_big-counter-x--module.exports..toJSON) ⇒ <code>string</code>
    - [`~toString()`](#module_big-counter-x--module.exports..toString) ⇒ <code>string</code>
    - [`~valueOf()`](#module_big-counter-x--module.exports..valueOf) ⇒ <code>string</code>

<a name="exp_module_big-counter-x--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
<a name="new_module_big-counter-x--module.exports_new"></a>

#### `new module.exports()`

Incremental integer counter. Counts from `0` to very big intergers.
Javascript´s number type allows you to count in integer steps
from `0` to `9007199254740991`. As of ES5, Strings can contain
approximately 65000 characters and ES6 is supposed to handle
the `MAX_SAFE_INTEGER` (though I don´t believe any environments supports
this). This counter represents integer values as strings and can therefore
count in integer steps from `0` to the maximum string length (that´s some
65000 digits). In the lower range, upto `9007199254740991`, the strings can
be converted to safe Javascript integers `Number(value)` or `+value`. This
counter is great for any applications that need a really big count
represented as a string, (an ID string).

**Example**

```js
import BigCounter from 'big-counter-x';

const counter = new BigCounter();

console.log(counter.get()); // '0'
console.log(counter.next()); // counter object
console.log(counter.get()); // '1'

// Methods are chainable.
console.log(counter.next().next()); // counter object
console.log(counter.get()); // '3'

console.log(counter.reset()); // counter object
console.log(counter.get()); // '0'
console.log(counter.toString()); // '0'
console.log(counter.valueOf()); // '0'
console.log(counter.toJSON()); // '0'

// Values upto `9007199254740991` convert to numbers.
console.log(Number(counter)); // 0
console.log(+counter); // 0
```

<a name="module_big-counter-x--module.exports..get"></a>

#### `module.exports~get()` ⇒ <code>string</code>

Gets the counter´s current value.

**Kind**: inner method of [<code>module.exports</code>](#exp_module_big-counter-x--module.exports)  
**Returns**: <code>string</code> - A string representation of an integer.  
<a name="module_big-counter-x--module.exports..next"></a>

#### `module.exports~next()` ⇒ <code>Object</code>

Increments the counter´s value by `1`.

**Kind**: inner method of [<code>module.exports</code>](#exp_module_big-counter-x--module.exports)  
**Returns**: <code>Object</code> - The counter object.  
<a name="module_big-counter-x--module.exports..reset"></a>

#### `module.exports~reset()` ⇒ <code>Object</code>

Resets the counter back to `0`.

**Kind**: inner method of [<code>module.exports</code>](#exp_module_big-counter-x--module.exports)  
**Returns**: <code>Object</code> - The counter object.  
<a name="module_big-counter-x--module.exports..toJSON"></a>

#### `module.exports~toJSON()` ⇒ <code>string</code>

Gets the counter´s current value.

**Kind**: inner method of [<code>module.exports</code>](#exp_module_big-counter-x--module.exports)  
**Returns**: <code>string</code> - A string representation of an integer.  
<a name="module_big-counter-x--module.exports..toString"></a>

#### `module.exports~toString()` ⇒ <code>string</code>

Gets the counter´s current value.

**Kind**: inner method of [<code>module.exports</code>](#exp_module_big-counter-x--module.exports)  
**Returns**: <code>string</code> - A string representation of an integer.  
<a name="module_big-counter-x--module.exports..valueOf"></a>

#### `module.exports~valueOf()` ⇒ <code>string</code>

Gets the counter´s current value.

**Kind**: inner method of [<code>module.exports</code>](#exp_module_big-counter-x--module.exports)  
**Returns**: <code>string</code> - A string representation of an integer.
