<a name="module_big-counter-x"></a>
## big-counter-x
<a href="https://travis-ci.org/Xotic750/big-counter-x"
title="Travis status">
<img src="https://travis-ci.org/Xotic750/big-counter-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/big-counter-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/big-counter-x.svg"
alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/big-counter-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/big-counter-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/big-counter-x" title="npm version">
<img src="https://badge.fury.io/js/big-counter-x.svg"
alt="npm version" height="18">
</a>

A big counter module.

<h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
`es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
methods that can be faithfully emulated with a legacy JavaScript engine.

`es5-sham.js` monkey-patches other ES5 methods as closely as possible.
For these methods, as closely as possible to ES5 is not very close.
Many of these shams are intended only to allow code to be written to ES5
without causing run-time errors in older engines. In many cases,
this means that these shams cause many ES5 methods to silently fail.
Decide carefully whether this is what you want. Note: es5-sham.js requires
es5-shim.js to be able to work properly.

`json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.

`es6.shim.js` provides compatibility shims so that legacy JavaScript engines
behave as closely as possible to ECMAScript 6 (Harmony).

**Version**: 1.0.6  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  

* [big-counter-x](#module_big-counter-x)
    * [module.exports](#exp_module_big-counter-x--module.exports) ⏏
        * [`new module.exports()`](#new_module_big-counter-x--module.exports_new)
        * [`~next()`](#module_big-counter-x--module.exports..next) ⇒ <code>Object</code>
        * [`~inc()`](#module_big-counter-x--module.exports..inc) ⇒ <code>Object</code>
        * [`~get()`](#module_big-counter-x--module.exports..get) ⇒ <code>string</code>
        * [`~valueOf()`](#module_big-counter-x--module.exports..valueOf) ⇒ <code>string</code>
        * [`~toString()`](#module_big-counter-x--module.exports..toString) ⇒ <code>string</code>
        * [`~toJSON()`](#module_big-counter-x--module.exports..toJSON) ⇒ <code>string</code>
        * [`~reset()`](#module_big-counter-x--module.exports..reset) ⇒ <code>Object</code>

<a name="exp_module_big-counter-x--module.exports"></a>
### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_big-counter-x--module.exports_new"></a>
#### `new module.exports()`
Incremental integer counter. Counts from `0` to very big intergers.
Javascript's number type allows you to count in integer steps
from `0` to `9007199254740991`. As of ES5, Strings can contain
approximately 65000 characters and ES6 is supposed to handle
the `MAX_SAFE_INTEGER` (though I don't believe any environments supports
this). This counter represents integer values as strings and can therefore
count in integer steps from `0` to the maximum string length (that's some
65000 digits). In the lower range, upto `9007199254740991`, the strings can
be converted to safe Javascript integers `Number(value)` or `+value`. This
counter is great for any applications that need a really big count
represented as a string, (an ID string).

**Example**  
```js
var BigCounter = require('big-counter-x');
var counter = new BigCounter();

counter.get(); // '0'
counter.next(); // counter object
counter.get(); // '1'

// Methods are chainable.
counter.inc().next(); // counter object
counter.get(); // '3'

counter.reset(); // counter object
counter.get(); // '0'
counter.toString(); // '0'
counter.valueOf(); // '0'
counter.toJSON(); // '0'

// Values upto `9007199254740991` convert to numbers.
Number(counter); // 0
+counter; // 0
```
<a name="module_big-counter-x--module.exports..next"></a>
#### `module.exports~next()` ⇒ <code>Object</code>
Increments the counter's value by `1`.

**Kind**: inner method of <code>[module.exports](#exp_module_big-counter-x--module.exports)</code>  
**Returns**: <code>Object</code> - The counter object.  
<a name="module_big-counter-x--module.exports..inc"></a>
#### `module.exports~inc()` ⇒ <code>Object</code>
Increments the counter's value by `1`.

**Kind**: inner method of <code>[module.exports](#exp_module_big-counter-x--module.exports)</code>  
**Returns**: <code>Object</code> - The counter object.  
<a name="module_big-counter-x--module.exports..get"></a>
#### `module.exports~get()` ⇒ <code>string</code>
Gets the counter's current value.

**Kind**: inner method of <code>[module.exports](#exp_module_big-counter-x--module.exports)</code>  
**Returns**: <code>string</code> - A string representation of an integer.  
<a name="module_big-counter-x--module.exports..valueOf"></a>
#### `module.exports~valueOf()` ⇒ <code>string</code>
Gets the counter's current value.

**Kind**: inner method of <code>[module.exports](#exp_module_big-counter-x--module.exports)</code>  
**Returns**: <code>string</code> - A string representation of an integer.  
<a name="module_big-counter-x--module.exports..toString"></a>
#### `module.exports~toString()` ⇒ <code>string</code>
Gets the counter's current value.

**Kind**: inner method of <code>[module.exports](#exp_module_big-counter-x--module.exports)</code>  
**Returns**: <code>string</code> - A string representation of an integer.  
<a name="module_big-counter-x--module.exports..toJSON"></a>
#### `module.exports~toJSON()` ⇒ <code>string</code>
Gets the counter's current value.

**Kind**: inner method of <code>[module.exports](#exp_module_big-counter-x--module.exports)</code>  
**Returns**: <code>string</code> - A string representation of an integer.  
<a name="module_big-counter-x--module.exports..reset"></a>
#### `module.exports~reset()` ⇒ <code>Object</code>
Resets the counter back to `0`.

**Kind**: inner method of <code>[module.exports](#exp_module_big-counter-x--module.exports)</code>  
**Returns**: <code>Object</code> - The counter object.  
