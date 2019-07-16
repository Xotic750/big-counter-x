/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2015-2017",
  "date": "2019-07-16T19:05:25.950Z",
  "describe": "",
  "description": "A big counter.",
  "file": "big-counter-x.js",
  "hash": "af41375977214f695967",
  "license": "MIT",
  "version": "4.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bigCounterX"] = factory();
	else
		root["bigCounterX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(13)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
*
*	VALIDATE: undefined
*
*
*	DESCRIPTION:
*		- Validates if a value is undefined.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/



/**
* FUNCTION: isUndefined( value )
*	Validates if a value is undefined.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is undefined
*/
function isUndefined( value ) {
	return value === void 0;
} // end FUNCTION isUndefined()


// EXPORTS //

module.exports = isUndefined;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(11);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(16);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(15);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(11); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var has_boxed_string_x_esm_string = 'a';
var boxedString = {}.constructor(has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === has_boxed_string_x_esm_string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(2);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var EMPTY_STRING = '';
var strSplit = EMPTY_STRING.split;
var isStringFn = has_boxed_string_x_esm === false && typeof strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function splitIfBoxedBug(value) {
  return isStringFn && isStringFn(value) ? strSplit.call(value, EMPTY_STRING) : value;
}


// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(0);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm_this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = attempt(function () {
  _newArrowCheck(this, has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_esm = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(1);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(5);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// CONCATENATED MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/is-falsey-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function isFalsey(value) {
  return !to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_esm = (has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js

var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
}


// CONCATENATED MODULE: ./node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function requireCoercibleToString(value) {
  return to_string_x_esm_ToString(requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var white_space_x_esm_length = list.length;

for (var white_space_x_esm_i = 0; white_space_x_esm_i < white_space_x_esm_length; white_space_x_esm_i += 1) {
  if (list[white_space_x_esm_i].es2016) {
    stringES2016 += list[white_space_x_esm_i].string;
  }

  if (list[white_space_x_esm_i].es2018) {
    stringES2018 += list[white_space_x_esm_i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ var white_space_x_esm = (string2018);
var string2016 = stringES2016;


// CONCATENATED MODULE: ./node_modules/trim-left-x/dist/trim-left-x.esm.js


var trim_left_x_esm_EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft2016 = new RegExpCtr("^[".concat(string2016, "]+"));
var reLeft = new RegExpCtr("^[".concat(white_space_x_esm, "]+"));
var replace = trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft, trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/trim-right-x/dist/trim-right-x.esm.js


var trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_esm_RegExpCtr = /none/.constructor;
var reRight2016 = new trim_right_x_esm_RegExpCtr("[".concat(string2016, "]+$"));
var reRight2018 = new trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+$"));
var trim_right_x_esm_replace = trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2016(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2016, trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2018(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2018, trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2018(string) {
  return trimLeft2018(trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var SPACE = ' ';
var normalize_space_x_esm_RegExpCtr = /none/.constructor;
var reNormalize2016 = new normalize_space_x_esm_RegExpCtr("[".concat(string2016, "]+"), 'g');
var reNormalize2018 = new normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+"), 'g');
var normalize_space_x_esm_replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalizeSpace2016(string) {
  return normalize_space_x_esm_replace.call(trim2016(string), reNormalize2016, SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function normalizeSpace2018(string) {
  return normalize_space_x_esm_replace.call(trim2018(string), reNormalize2018, SPACE);
}


// CONCATENATED MODULE: ./node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var replace_comments_x_esm_EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_esm_replace = replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replaceComments(string, replacement) {
  return replace_comments_x_esm_replace.call(requireCoercibleToString(string), STRIP_COMMENTS, arguments.length > 1 ? to_string_x_esm_ToString(replacement) : replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_esm_this = undefined;

function is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_function_x_esm_SPACE = ' ';
var fToString = Function.prototype.toString;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;
var hasNativeClass = attempt(function () {
  is_function_x_esm_newArrowCheck(this, is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalizeSpace2018(replaceComments(fToString.call(value), is_function_x_esm_SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt(testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt.call(value, fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function isFunction(value, allowClass) {
  if (is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm) {
    return tryFuncToString(value, toBoolean(allowClass));
  }

  if (hasNativeClass && isFalsey(allowClass) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
/** @type {StringConstructor} */

var StringCtr = STRING.constructor;
/** @type {NumberConstructor} */

var NumberCtr = ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x_esm && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = ZERO; i < orderLength; i += ONE) {
    method = ordinary[methodNames[i]];

    if (isFunction(method)) {
      result = method.call(ordinary);

      if (is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_esm) {
    if (symToPrimitive) {
      return getMethod(value, symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function toPrimitive(input, preferredType) {
  if (is_primitive_default()(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? STRING : hint;
  return ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/parse-int-x/dist/parse-int-x.esm.js



var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var _ref = '',
    charAt = _ref.charAt;
var hexRegex = /^[-+]?0[xX]/;
var parse_int_x_esm_test = hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parseInt2016(string, radix) {
  var str = trimLeft2016(to_string_x_esm_ToString(string));
  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parseInt2018(string, radix) {
  var str = trimLeft2018(to_string_x_esm_ToString(string));

  if (charAt.call(str, 0) === "\u180E") {
    return nan_x_esm;
  }

  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js





var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var to_number_x_esm_castNumber = testCharsCount.constructor;
var pStrSlice = to_number_x_esm_ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_esm_test = binaryRegex.test;

var isBinary = function _isBinary(value) {
  return to_number_x_esm_test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function _isOctal(value) {
  return to_number_x_esm_test.call(octalRegex, value);
};

var nonWSregex2016 = new RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var hasNonWS2016 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2016, value);
};

var nonWSregex2018 = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS2018 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return to_number_x_esm_test.call(invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function toNumber2016(argument) {
  var value = toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2016(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim2016(value);

    if (trimmed !== value) {
      return toNumber2016(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function toNumber2018(argument) {
  var value = toPrimitive(argument, to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim2018(value);

    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && is_nan_x_esm_isNaN(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function sign2016(x) {
  var n = toNumber2016(x);

  if (n === 0 || is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function sign2018(x) {
  var n = toNumber2018(x);

  if (n === 0 || is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toInteger2016(value) {
  var number = toNumber2016(value);

  if (is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return sign2016(number) * floor(abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toInteger2018(value) {
  var number = toNumber2018(value);

  if (is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return sign2018(number) * floor(abs(number));
}


// EXTERNAL MODULE: ./node_modules/max-safe-integer/index.js
var max_safe_integer = __webpack_require__(4);
var max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(max_safe_integer);

// CONCATENATED MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toLength2016(value) {
  var len = toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > max_safe_integer_default.a) {
    return max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toLength2018(value) {
  var len = toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > max_safe_integer_default.a) {
    return max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function toObject(value) {
  return castObject(requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js


/* eslint-disable-next-line compat/compat */

var pToString = has_symbol_support_x_esm && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && is_symbol_default.a;
/** @type {Function} */

var to_string_symbols_supported_x_esm_castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : to_string_symbols_supported_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

function assertIsFunction(callback) {
  if (isFunction(callback) === false) {
    var msg = is_primitive_default()(callback) ? toStringSymbolsSupported(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
}


// CONCATENATED MODULE: ./node_modules/array-for-each-x/dist/array-for-each-x.esm.js
var array_for_each_x_esm_this = undefined;

function array_for_each_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






/** @type {ArrayConstructor} */

var ArrayCtr = [].constructor;
/** @type {ObjectConstructor} */

var array_for_each_x_esm_castObject = {}.constructor;
/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var nativeForEach = typeof ArrayCtr.prototype.forEach === 'function' && ArrayCtr.prototype.forEach;
var isWorking;

if (nativeForEach) {
  var spy = 0;
  var res = attempt.call([1, 2], nativeForEach, function (item) {
    array_for_each_x_esm_newArrowCheck(this, array_for_each_x_esm_this);

    spy += item;
  }.bind(undefined));
  isWorking = res.threw === false && typeof res.value === 'undefined' && spy === 3;

  if (isWorking) {
    spy = '';
    res = attempt.call(array_for_each_x_esm_castObject('abc'), nativeForEach, function (item) {
      array_for_each_x_esm_newArrowCheck(this, array_for_each_x_esm_this);

      spy += item;
    }.bind(undefined));
    isWorking = res.threw === false && typeof res.value === 'undefined' && spy === 'abc';
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3), nativeForEach, function (item) {
      array_for_each_x_esm_newArrowCheck(this, array_for_each_x_esm_this);

      spy += item;
    }.bind(undefined));
    isWorking = res.threw === false && typeof res.value === 'undefined' && spy === 6;
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, nativeForEach, function (item) {
      array_for_each_x_esm_newArrowCheck(this, array_for_each_x_esm_this);

      spy += item;
    }.bind(undefined));
    isWorking = res.threw === false && typeof res.value === 'undefined' && spy === 6;
  }

  if (isWorking) {
    var doc = typeof document !== 'undefined' && document;

    if (doc) {
      spy = null;
      var fragment = doc.createDocumentFragment();
      var div = doc.createElement('div');
      fragment.appendChild(div);
      res = attempt.call(fragment.childNodes, nativeForEach, function (item) {
        array_for_each_x_esm_newArrowCheck(this, array_for_each_x_esm_this);

        spy = item;
      }.bind(undefined));
      isWorking = res.threw === false && typeof res.value === 'undefined' && spy === div;
    }
  }

  if (isWorking) {
    var isStrict = function returnIsStrict() {
      /* eslint-disable-next-line babel/no-invalid-this */
      return castBoolean(this) === false;
    }();

    if (isStrict) {
      spy = null;
      res = attempt.call([1], nativeForEach, function () {
        array_for_each_x_esm_newArrowCheck(this, array_for_each_x_esm_this);

        /* eslint-disable-next-line babel/no-invalid-this */
        spy = typeof this === 'string';
      }.bind(undefined), 'x');
      isWorking = res.threw === false && typeof res.value === 'undefined' && spy === true;
    }
  }

  if (isWorking) {
    spy = {};
    var fn = ['return nativeForEach.call("foo", function (_, __, context) {', 'if (castBoolean(context) === false || typeof context !== "object") {', 'spy.value = true;}});'].join('');
    /* eslint-disable-next-line no-new-func */

    res = attempt(Function('nativeForEach', 'spy', 'castBoolean', fn), nativeForEach, spy);
    isWorking = res.threw === false && typeof res.value === 'undefined' && spy.value !== true;
  }
}
/**
 * This method executes a provided function once for each array element.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 */


var $forEach;

if (nativeForEach) {
  $forEach = function forEach(array, callBack
  /* , thisArg */
  ) {
    var args = [callBack];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeForEach.apply(array, args);
  };
} else {
  $forEach = function forEach(array, callBack
  /* , thisArg */
  ) {
    var object = toObject(array); // If no callback function or if callback is not a callable function

    assertIsFunction(callBack);
    var iterable = splitIfBoxedBug(object);
    var length = toLength2018(iterable.length);
    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var noThis = typeof thisArg === 'undefined';

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        if (noThis) {
          callBack(iterable[i], i, object);
        } else {
          callBack.call(thisArg, iterable[i], i, object);
        }
      }
    }
  };
}

var arrayForEach = $forEach;
/* harmony default export */ var array_for_each_x_esm = (arrayForEach);


// CONCATENATED MODULE: ./node_modules/to-property-key-x/dist/to-property-key-x.esm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|Symbol} The converted argument.
 */

function toPropertyKey(argument) {
  var key = toPrimitive(argument, String);
  return has_symbol_support_x_esm && _typeof(key) === 'symbol' ? key : to_string_x_esm_ToString(key);
}


// CONCATENATED MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js


var hop = {}.hasOwnProperty;
/**
 * The `hasOwnProperty` method returns a boolean indicating whether
 * the `object` has the specified `property`. Does not attempt to fix known
 * issues in older browsers, but does ES6ify the method.
 *
 * @param {!object} object - The object to test.
 * @throws {TypeError} If object is null or undefined.
 * @param {string|Symbol} property - The name or Symbol of the property to test.
 * @returns {boolean} `true` if the property is set on `object`, else `false`.
 */

function has_own_property_x_esm_hasOwnProperty(object, property) {
  return hop.call(toObject(object), toPropertyKey(property));
}


// CONCATENATED MODULE: ./node_modules/assert-is-object-x/dist/assert-is-object-x.esm.js


/**
 * Tests `value` to see if it is an object, throws a `TypeError` if it is
 * not. Otherwise returns the `value`.
 *
 * @param {*} value - The argument to be tested.
 * @throws {TypeError} Throws if `value` is not an object.
 * @returns {*} Returns `value` if it is an object.
 */

function assertIsObject(value) {
  if (is_primitive_default()(value)) {
    throw new TypeError("".concat(toStringSymbolsSupported(value), " is not an object"));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/object-define-property-x/dist/object-define-property-x.esm.js







var nativeDefProp = typeof Object.defineProperty === 'function' && Object.defineProperty;
var definePropertyFallback;

var toPropertyDescriptor = function _toPropertyDescriptor(desc) {
  var object = toObject(desc);
  var descriptor = {};

  if (has_own_property_x_esm_hasOwnProperty(object, 'enumerable')) {
    descriptor.enumerable = Boolean(object.enumerable);
  }

  if (has_own_property_x_esm_hasOwnProperty(object, 'configurable')) {
    descriptor.configurable = Boolean(object.configurable);
  }

  if (has_own_property_x_esm_hasOwnProperty(object, 'value')) {
    descriptor.value = object.value;
  }

  if (has_own_property_x_esm_hasOwnProperty(object, 'writable')) {
    descriptor.writable = Boolean(object.writable);
  }

  if (has_own_property_x_esm_hasOwnProperty(object, 'get')) {
    var getter = object.get;

    if (typeof getter !== 'undefined' && isFunction(getter) === false) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = getter;
  }

  if (has_own_property_x_esm_hasOwnProperty(object, 'set')) {
    var setter = object.set;

    if (typeof setter !== 'undefined' && isFunction(setter) === false) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = setter;
  }

  if ((has_own_property_x_esm_hasOwnProperty(descriptor, 'get') || has_own_property_x_esm_hasOwnProperty(descriptor, 'set')) && (has_own_property_x_esm_hasOwnProperty(descriptor, 'value') || has_own_property_x_esm_hasOwnProperty(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
}; // ES5 15.2.3.6
// http://es5.github.com/#x15.2.3.6
// Patch for WebKit and IE8 standard mode
// Designed by hax <hax.github.com>
// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
// IE8 Reference:
//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
// WebKit Bugs:
//     https://bugs.webkit.org/show_bug.cgi?id=36423

/**
 * This method defines a new property directly on an object, or modifies an
 * existing property on an object, and returns the object.
 *
 * @param {object} object - The object on which to define the property.
 * @param {string} property - The name of the property to be defined or modified.
 * @param {object} descriptor - The descriptor for the property being defined or modified.
 * @returns {object} The object that was passed to the function.
 * });.
 */


var $defineProperty; // check whether defineProperty works if it's given. Otherwise, shim partially.

if (nativeDefProp) {
  var testWorksWith = function _testWorksWith(object) {
    var testResult = attempt(nativeDefProp, object, 'sentinel', {});
    return testResult.threw === false && testResult.value === object && 'sentinel' in object;
  };

  var object_define_property_x_esm_doc = typeof document !== 'undefined' && document;

  if (testWorksWith({}) && (isFalsey(object_define_property_x_esm_doc) || testWorksWith(object_define_property_x_esm_doc.createElement('div')))) {
    $defineProperty = function defineProperty(object, property, descriptor) {
      return nativeDefProp(assertIsObject(object), toPropertyKey(property), toPropertyDescriptor(descriptor));
    };
  } else {
    definePropertyFallback = nativeDefProp;
  }
}

if (isFalsey(nativeDefProp) || definePropertyFallback) {
  var prototypeOfObject = Object.prototype; // If JS engine supports accessors creating shortcuts.

  var defineGetter;
  var defineSetter;
  var lookupGetter;
  var lookupSetter;
  var supportsAccessors = has_own_property_x_esm_hasOwnProperty(prototypeOfObject, '__defineGetter__');

  if (supportsAccessors) {
    /* eslint-disable-next-line no-underscore-dangle,no-restricted-properties */
    defineGetter = prototypeOfObject.__defineGetter__;
    /* eslint-disable-next-line no-underscore-dangle,no-restricted-properties */

    defineSetter = prototypeOfObject.__defineSetter__;
    /* eslint-disable-next-line no-underscore-dangle */

    lookupGetter = prototypeOfObject.__lookupGetter__;
    /* eslint-disable-next-line no-underscore-dangle */

    lookupSetter = prototypeOfObject.__lookupSetter__;
  }

  $defineProperty = function defineProperty(object, property, descriptor) {
    assertIsObject(object);
    var propKey = toPropertyKey(property);
    var propDesc = toPropertyDescriptor(descriptor); // make a valiant attempt to use the real defineProperty for IE8's DOM elements.

    if (definePropertyFallback) {
      var result = attempt.call(Object, definePropertyFallback, object, propKey, propDesc);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    } // If it's a data property.


    if (has_own_property_x_esm_hasOwnProperty(propDesc, 'value')) {
      // fail silently if 'writable', 'enumerable', or 'configurable' are requested but not supported
      if (supportsAccessors && (lookupGetter.call(object, propKey) || lookupSetter.call(object, propKey))) {
        // As accessors are supported only on engines implementing
        // `__proto__` we can safely override `__proto__` while defining
        // a property to make sure that we don't hit an inherited accessor.

        /* eslint-disable-next-line no-proto */
        var prototype = object.__proto__;
        /* eslint-disable-next-line no-proto */

        object.__proto__ = prototypeOfObject; // Deleting a property anyway since getter / setter may be defined on object itself.

        delete object[propKey];
        object[propKey] = propDesc.value; // Setting original `__proto__` back now.

        /* eslint-disable-next-line no-proto */

        object.__proto__ = prototype;
      } else {
        object[propKey] = propDesc.value;
      }
    } else {
      if (supportsAccessors === false && (propDesc.get || propDesc.set)) {
        throw new TypeError('getters & setters can not be defined on this javascript engine');
      } // If we got that far then getters and setters can be defined !!


      if (propDesc.get) {
        defineGetter.call(object, propKey, propDesc.get);
      }

      if (propDesc.set) {
        defineSetter.call(object, propKey, propDesc.set);
      }
    }

    return object;
  };
}

var defProp = $defineProperty;
/* harmony default export */ var object_define_property_x_esm = (defProp);


// CONCATENATED MODULE: ./node_modules/is-array-x/dist/is-array-x.esm.js
var is_array_x_esm_this = undefined;

function is_array_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var nativeIsArray = [].isArray;
var isArrayNative = typeof nativeIsArray === 'function' && nativeIsArray;
var testRes = isArrayNative && attempt(function () {
  is_array_x_esm_newArrowCheck(this, is_array_x_esm_this);

  return isArrayNative([]) === true && isArrayNative({
    length: 0
  }) === false;
}.bind(undefined));

var isArrayFn = function iife() {
  if (testRes && testRes.threw === false && testRes.value === true) {
    return isArrayNative;
  }
  /**
   * The isArray() function determines whether the passed value is an Array.
   *
   * @function isArray
   * @param {*} [value] - The object to be checked..
   * @returns {boolean} `true` if the object is an Array; otherwise, `false`.
   */


  return function isArray(value) {
    return toStringTag(value) === '[object Array]';
  };
}();

/* harmony default export */ var is_array_x_esm = (isArrayFn);


// EXTERNAL MODULE: ./node_modules/is-arguments/index.js
var is_arguments = __webpack_require__(9);
var is_arguments_default = /*#__PURE__*/__webpack_require__.n(is_arguments);

// EXTERNAL MODULE: ./node_modules/validate.io-undefined/lib/index.js
var lib = __webpack_require__(10);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/array-like-slice-x/dist/array-like-slice-x.esm.js






var getMax = function _getMax(a, b) {
  return a >= b ? a : b;
};

var getMin = function _getMin(a, b) {
  return a <= b ? a : b;
};

var setRelative = function _setRelative(value, length) {
  return value < 0 ? getMax(length + value, 0) : getMin(value, length);
};
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {!object} arrayLike - The array like object to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */


function slice(arrayLike, start, end) {
  var iterable = splitIfBoxedBug(toObject(arrayLike));
  var length = toLength2018(iterable.length);
  var k = setRelative(toInteger2018(start), length);
  var relativeEnd = lib_default()(end) ? length : toInteger2018(end);
  var finalEnd = setRelative(relativeEnd, length);
  var val = [];
  val.length = getMax(finalEnd - k, 0);
  var next = 0;

  while (k < finalEnd) {
    if (k in iterable) {
      val[next] = iterable[k];
    }

    next += 1;
    k += 1;
  }

  return val;
}


// CONCATENATED MODULE: ./node_modules/is-object-like-x/dist/is-object-like-x.esm.js


/**
 * Checks if `value` is object-like. A value is object-like if it's not a
 * primitive and not a function.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */

function isObjectLike(value) {
  return is_primitive_default()(value) === false && isFunction(value, true) === false;
}


// CONCATENATED MODULE: ./node_modules/math-clamp-x/dist/math-clamp-x.esm.js

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 */

function clamp(value) {
  var number = toNumber2018(value);
  var argsLength = arguments.length;

  if (argsLength < 2) {
    return number;
  }
  /* eslint-disable-next-line prefer-rest-params */


  var min = toNumber2018(arguments[1]);
  var max;

  if (argsLength < 3) {
    max = min;
    min = 0;
  } else {
    /* eslint-disable-next-line prefer-rest-params */
    max = toNumber2018(arguments[2]);
  }

  if (min > max) {
    throw new RangeError('"min" must be less than "max"');
  }

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
}


// CONCATENATED MODULE: ./node_modules/is-index-x/dist/is-index-x.esm.js





var reIsUint = /^(?:0|[1-9]\d*)$/;
var rxTest = reIsUint.test;
/**
 * This method determines whether the passed value is a zero based index.
 * JavaScript arrays are zero-indexed: the first element of an array is at
 * index 0, and the last element is at the index equal to the value of the
 * array's length property minus 1.
 *
 * @param {number|string} value - The value to be tested for being a zero based index.
 * @param {number} [length=MAX_SAFE_INTEGER] - The length that sets the upper bound.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 * zero based index within bounds.
 */

function isIndex(value, length) {
  var string = toStringSymbolsSupported(value);

  if (rxTest.call(reIsUint, string) === false) {
    return false;
  }

  var number = toNumber2018(string);

  if (arguments.length > 1) {
    return number < clamp(toInteger2018(length), max_safe_integer_default.a);
  }

  return number < max_safe_integer_default.a;
}


// CONCATENATED MODULE: ./node_modules/property-is-enumerable-x/dist/property-is-enumerable-x.esm.js


var propIsEnumerable = {}.propertyIsEnumerable;
/**
 * This method returns a Boolean indicating whether the specified property is
 * enumerable. Does not attempt to fix bugs in IE<9 or old Opera, otherwise it
 * does ES6ify the method.
 *
 * @param {!object} object - The object on which to test the property.
 * @param {string|Symbol} property - The name of the property to test.
 * @throws {TypeError} If target is null or undefined.
 * @returns {boolean} A Boolean indicating whether the specified property is
 *  enumerable.
 */

function propertyIsEnumerable(object, property) {
  return propIsEnumerable.call(toObject(object), toPropertyKey(property));
}


// CONCATENATED MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js










/** @type {ObjectConstructor} */

var object_get_own_property_descriptor_x_esm_castObject = {}.constructor;
var nativeGOPD = typeof object_get_own_property_descriptor_x_esm_castObject.getOwnPropertyDescriptor === 'function' && object_get_own_property_descriptor_x_esm_castObject.getOwnPropertyDescriptor;
var getOPDFallback1;
var getOPDFallback2; // ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var object_get_own_property_descriptor_x_esm_doesGOPDWork = function doesGOPDWork(object, prop) {
  object[toPropertyKey(prop)] = 0;
  var testResult = attempt(nativeGOPD, object, prop);
  return testResult.threw === false && testResult.value.value === 0;
}; // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.

/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 */


var $getOwnPropertyDescriptor;

if (nativeGOPD) {
  var object_get_own_property_descriptor_x_esm_doc = typeof document !== 'undefined' && document;
  var getOPDWorksOnDom = object_get_own_property_descriptor_x_esm_doc ? object_get_own_property_descriptor_x_esm_doesGOPDWork(object_get_own_property_descriptor_x_esm_doc.createElement('div'), 'sentinel') : true;

  if (getOPDWorksOnDom) {
    var object_get_own_property_descriptor_x_esm_res = attempt(nativeGOPD, object_get_own_property_descriptor_x_esm_castObject('abc'), 1);
    var worksWithStr = object_get_own_property_descriptor_x_esm_res.threw === false && object_get_own_property_descriptor_x_esm_res.value && object_get_own_property_descriptor_x_esm_res.value.value === 'b';

    if (worksWithStr) {
      var getOPDWorksOnObject = object_get_own_property_descriptor_x_esm_doesGOPDWork({}, 'sentinel');

      if (getOPDWorksOnObject) {
        var worksWithPrim = attempt(nativeGOPD, 42, 'name').threw === false;
        /* eslint-disable-next-line compat/compat */

        var worksWithObjSym = has_symbol_support_x_esm && object_get_own_property_descriptor_x_esm_doesGOPDWork({}, object_get_own_property_descriptor_x_esm_castObject(Symbol('')));

        if (worksWithObjSym) {
          if (worksWithPrim) {
            $getOwnPropertyDescriptor = nativeGOPD;
          } else {
            $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
              return nativeGOPD(toObject(object), property);
            };
          }
        } else if (worksWithPrim) {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(object, toPropertyKey(property));
          };
        } else {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(toObject(object), toPropertyKey(property));
          };
        }
      } else {
        getOPDFallback1 = nativeGOPD;
      }
    } else {
      getOPDFallback2 = nativeGOPD;
    }
  }
}

if (isFalsey($getOwnPropertyDescriptor) || getOPDFallback1 || getOPDFallback2) {
  var object_get_own_property_descriptor_x_esm_prototypeOfObject = object_get_own_property_descriptor_x_esm_castObject.prototype; // If JS engine supports accessors creating shortcuts.

  var object_get_own_property_descriptor_x_esm_lookupGetter;
  var object_get_own_property_descriptor_x_esm_lookupSetter;
  var object_get_own_property_descriptor_x_esm_supportsAccessors = has_own_property_x_esm_hasOwnProperty(object_get_own_property_descriptor_x_esm_prototypeOfObject, '__defineGetter__');

  if (object_get_own_property_descriptor_x_esm_supportsAccessors) {
    /* eslint-disable-next-line no-underscore-dangle */
    var lg = object_get_own_property_descriptor_x_esm_prototypeOfObject.__lookupGetter__;
    /* eslint-disable-next-line no-underscore-dangle */

    var ls = object_get_own_property_descriptor_x_esm_prototypeOfObject.__lookupSetter__;

    object_get_own_property_descriptor_x_esm_lookupGetter = function $lookupGetter(object, property) {
      return lg.call(object, property);
    };

    object_get_own_property_descriptor_x_esm_lookupSetter = function $lookupSetter(object, property) {
      return ls.call(object, property);
    };
  }

  $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
    var obj = toObject(object);
    var propKey = toPropertyKey(property);
    var result; // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.

    if (getOPDFallback1) {
      result = attempt.call(object_get_own_property_descriptor_x_esm_castObject, getOPDFallback1, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }

    var isStringIndex = is_string_default()(obj) && isIndex(propKey, obj.length);

    if (getOPDFallback2 && isStringIndex === false) {
      result = attempt.call(object_get_own_property_descriptor_x_esm_castObject, getOPDFallback2, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }
    /* eslint-disable-next-line no-void */


    var descriptor = void 0; // If object does not owns property return undefined immediately.

    if (isStringIndex === false && has_own_property_x_esm_hasOwnProperty(obj, propKey) === false) {
      return descriptor;
    } // If object has a property then it's for sure `configurable`, and
    // probably `enumerable`. Detect enumerability though.


    descriptor = {
      configurable: is_primitive_default()(object) === false && isStringIndex === false,
      enumerable: propertyIsEnumerable(obj, propKey)
    }; // If JS engine supports accessor properties then property may be a
    // getter or setter.

    if (object_get_own_property_descriptor_x_esm_supportsAccessors) {
      // Unfortunately `__lookupGetter__` will return a getter even
      // if object has own non getter property along with a same named
      // inherited getter. To avoid misbehavior we temporary remove
      // `__proto__` so that `__lookupGetter__` will return getter only
      // if it's owned by an object.

      /* eslint-disable-next-line no-proto */
      var prototype = obj.__proto__;
      var notPrototypeOfObject = obj !== object_get_own_property_descriptor_x_esm_prototypeOfObject; // avoid recursion problem, breaking in Opera Mini when
      // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
      // or any other Object.prototype accessor

      if (notPrototypeOfObject) {
        /* eslint-disable-next-line no-proto */
        obj.__proto__ = object_get_own_property_descriptor_x_esm_prototypeOfObject;
      }

      var getter = object_get_own_property_descriptor_x_esm_lookupGetter(obj, propKey);
      var setter = object_get_own_property_descriptor_x_esm_lookupSetter(obj, propKey);

      if (notPrototypeOfObject) {
        // Once we have getter and setter we can put values back.

        /* eslint-disable-next-line no-proto */
        obj.__proto__ = prototype;
      }

      if (getter || setter) {
        if (getter) {
          descriptor.get = getter;
        }

        if (setter) {
          descriptor.set = setter;
        } // If it was accessor property we're done and return here
        // in order to avoid adding `value` to the descriptor.


        return descriptor;
      }
    } // If we got this far we know that object has an own property that is
    // not an accessor so we set it as a value and return descriptor.


    if (isStringIndex) {
      descriptor.value = obj.charAt(propKey);
      descriptor.writable = false;
    } else {
      descriptor.value = obj[propKey];
      descriptor.writable = true;
    }

    return descriptor;
  };
}

var gOPS = $getOwnPropertyDescriptor;
/* harmony default export */ var object_get_own_property_descriptor_x_esm = (gOPS);


// CONCATENATED MODULE: ./node_modules/is-regexp-x/dist/is-regexp-x.esm.js






var regexExec = /none/.exec;
var regexClass = '[object RegExp]';

var tryRegexExecCall = function tryRegexExec(value, descriptor) {
  try {
    value.lastIndex = 0;
    regexExec.call(value);
    return true;
  } catch (e) {
    return false;
  } finally {
    object_define_property_x_esm(value, 'lastIndex', descriptor);
  }
};
/**
 * This method tests if a value is a regex.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if value is a regex; otherwise `false`.
 */


function isRegex(value) {
  if (isObjectLike(value) === false) {
    return false;
  }

  if (has_to_string_tag_x_esm === false) {
    return toStringTag(value) === regexClass;
  }

  var descriptor = object_get_own_property_descriptor_x_esm(value, 'lastIndex');
  var hasLastIndexDataProperty = descriptor && has_own_property_x_esm_hasOwnProperty(descriptor, 'value');

  if (hasLastIndexDataProperty !== true) {
    return false;
  }

  return tryRegexExecCall(value, descriptor);
}


// EXTERNAL MODULE: ./node_modules/object-keys/index.js
var object_keys = __webpack_require__(12);
var object_keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/object-keys-x/dist/object-keys-x.esm.js










var ObjectCtr = {}.constructor;
var nativeKeys = typeof ObjectCtr.keys === 'function' && ObjectCtr.keys;
var object_keys_x_esm_isWorking;
var throwsWithNull;
var object_keys_x_esm_worksWithPrim;
var worksWithRegex;
var worksWithArgs;
var object_keys_x_esm_worksWithStr;

if (nativeKeys) {
  var isCorrectRes = function _isCorrectRes(r, length) {
    return r.threw === false && is_array_x_esm(r.value) && r.value.length === length;
  };

  var either = function _either(r, a, b) {
    var x = r.value[0];
    var y = r.value[1];
    return x === a && y === b || x === b && y === a;
  };

  var testObj = {
    a: 1,
    b: 2
  };
  var object_keys_x_esm_res = attempt(nativeKeys, testObj);
  object_keys_x_esm_isWorking = isCorrectRes(object_keys_x_esm_res, 2) && either(object_keys_x_esm_res, 'a', 'b');

  if (object_keys_x_esm_isWorking) {
    testObj = Object('a');
    testObj.y = 1;
    object_keys_x_esm_res = attempt(nativeKeys, testObj);
    object_keys_x_esm_isWorking = isCorrectRes(object_keys_x_esm_res, 2) && either(object_keys_x_esm_res, '0', 'y');
  }

  if (object_keys_x_esm_isWorking) {
    throwsWithNull = attempt(nativeKeys, null).threw;
    object_keys_x_esm_worksWithPrim = isCorrectRes(attempt(nativeKeys, 42), 0);
    worksWithRegex = attempt(nativeKeys, /a/g).threw === false;
    object_keys_x_esm_res = attempt(nativeKeys, function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2));
    worksWithArgs = isCorrectRes(object_keys_x_esm_res, 2) && either(object_keys_x_esm_res, '0', '1');
    object_keys_x_esm_res = attempt(nativeKeys, Object('ab'));
    object_keys_x_esm_worksWithStr = isCorrectRes(object_keys_x_esm_res, 2) && either(object_keys_x_esm_res, '0', '1');
  }
}
/**
 * This method returns an array of a given object's own enumerable properties,
 * in the same order as that provided by a for...in loop (the difference being
 * that a for-in loop enumerates properties in the prototype chain as well).
 *
 * @param {*} obj - The object of which the enumerable own properties are to be returned.
 * @returns {Array} An array of strings that represent all the enumerable properties of the given object.
 */


var objectKeys;

if (object_keys_x_esm_isWorking) {
  if (throwsWithNull && object_keys_x_esm_worksWithPrim && worksWithRegex && worksWithArgs && object_keys_x_esm_worksWithStr) {
    objectKeys = nativeKeys;
  } else {
    objectKeys = function keys(object) {
      var obj = toObject ? toObject(object) : object;

      if (worksWithArgs !== true && is_arguments_default()(obj)) {
        obj = slice(obj);
      } else if (object_keys_x_esm_worksWithStr !== true && is_string_default()(obj)) {
        obj = splitIfBoxedBug(obj);
      } else if (worksWithRegex !== true && isRegex(obj)) {
        var regexKeys = [];
        /* eslint-disable-next-line no-restricted-syntax */

        for (var key in obj) {
          // noinspection JSUnfilteredForInLoop
          if (has_own_property_x_esm_hasOwnProperty(obj, key)) {
            regexKeys[regexKeys.length] = key;
          }
        }

        return regexKeys;
      }

      return nativeKeys(obj);
    };
  }
} else {
  objectKeys = function keys(object) {
    return object_keys_default()(toObject(object));
  };
}

var ok = objectKeys;
/* harmony default export */ var object_keys_x_esm = (ok);


// CONCATENATED MODULE: ./node_modules/array-filter-x/dist/array-filter-x.esm.js
var array_filter_x_esm_this = undefined;

function array_filter_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






/** @type {ArrayConstructor} */

var array_filter_x_esm_ArrayCtr = [].constructor;
/** @type {ObjectConstructor} */

var array_filter_x_esm_castObject = {}.constructor;
/** @type {BooleanConstructor} */

var array_filter_x_esm_castBoolean = true.constructor;
var nativFilter = typeof array_filter_x_esm_ArrayCtr.prototype.filter === 'function' && array_filter_x_esm_ArrayCtr.prototype.filter;
var array_filter_x_esm_isWorking;

if (nativFilter) {
  var array_filter_x_esm_spy = 0;
  var array_filter_x_esm_res = attempt.call([1, 2], nativFilter, function (item) {
    array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

    array_filter_x_esm_spy += item;
    return false;
  }.bind(undefined));
  array_filter_x_esm_isWorking = array_filter_x_esm_res.threw === false && array_filter_x_esm_res.value && array_filter_x_esm_res.value.length === 0 && array_filter_x_esm_spy === 3;

  if (array_filter_x_esm_isWorking) {
    array_filter_x_esm_spy = '';
    array_filter_x_esm_res = attempt.call(array_filter_x_esm_castObject('abc'), nativFilter, function (item, index) {
      array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

      array_filter_x_esm_spy += item;
      return index === 1;
    }.bind(undefined));
    array_filter_x_esm_isWorking = array_filter_x_esm_res.threw === false && array_filter_x_esm_res.value && array_filter_x_esm_res.value.length === 1 && array_filter_x_esm_res.value[0] === 'b' && array_filter_x_esm_spy === 'abc';
  }

  if (array_filter_x_esm_isWorking) {
    array_filter_x_esm_spy = 0;
    array_filter_x_esm_res = attempt.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3), nativFilter, function (item, index) {
      array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

      array_filter_x_esm_spy += item;
      return index === 2;
    }.bind(undefined));
    array_filter_x_esm_isWorking = array_filter_x_esm_res.threw === false && array_filter_x_esm_res.value && array_filter_x_esm_res.value.length === 1 && array_filter_x_esm_res.value[0] === 3 && array_filter_x_esm_spy === 6;
  }

  if (array_filter_x_esm_isWorking) {
    array_filter_x_esm_spy = 0;
    array_filter_x_esm_res = attempt.call({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, nativFilter, function (item) {
      array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

      array_filter_x_esm_spy += item;
      return false;
    }.bind(undefined));
    array_filter_x_esm_isWorking = array_filter_x_esm_res.threw === false && array_filter_x_esm_res.value && array_filter_x_esm_res.value.length === 0 && array_filter_x_esm_spy === 6;
  }

  if (array_filter_x_esm_isWorking) {
    var array_filter_x_esm_doc = typeof document !== 'undefined' && document;

    if (array_filter_x_esm_doc) {
      array_filter_x_esm_spy = null;
      var array_filter_x_esm_fragment = array_filter_x_esm_doc.createDocumentFragment();
      var array_filter_x_esm_div = array_filter_x_esm_doc.createElement('div');
      array_filter_x_esm_fragment.appendChild(array_filter_x_esm_div);
      array_filter_x_esm_res = attempt.call(array_filter_x_esm_fragment.childNodes, nativFilter, function (item) {
        array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

        array_filter_x_esm_spy = item;
        return item;
      }.bind(undefined));
      array_filter_x_esm_isWorking = array_filter_x_esm_res.threw === false && array_filter_x_esm_res.value && array_filter_x_esm_res.value.length === 1 && array_filter_x_esm_res.value[0] === array_filter_x_esm_div && array_filter_x_esm_spy === array_filter_x_esm_div;
    }
  }

  if (array_filter_x_esm_isWorking) {
    var array_filter_x_esm_isStrict = function returnIsStrict() {
      /* eslint-disable-next-line babel/no-invalid-this */
      return array_filter_x_esm_castBoolean(this) === false;
    }();

    if (array_filter_x_esm_isStrict) {
      array_filter_x_esm_spy = null;
      array_filter_x_esm_res = attempt.call([1], nativFilter, function () {
        array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

        /* eslint-disable-next-line babel/no-invalid-this */
        array_filter_x_esm_spy = typeof this === 'string';
      }.bind(undefined), 'x');
      array_filter_x_esm_isWorking = array_filter_x_esm_res.threw === false && array_filter_x_esm_res.value && array_filter_x_esm_res.value.length === 0 && array_filter_x_esm_spy === true;
    }
  }

  if (array_filter_x_esm_isWorking) {
    array_filter_x_esm_spy = {};
    var array_filter_x_esm_fn = ['return nativFilter.call("foo", function (_, __, context) {', 'if (castBoolean(context) === false || typeof context !== "object") {', 'spy.value = true;}});'].join('');
    /* eslint-disable-next-line no-new-func */

    array_filter_x_esm_res = attempt(Function('nativFilter', 'spy', 'castBoolean', array_filter_x_esm_fn), nativFilter, array_filter_x_esm_spy);
    array_filter_x_esm_isWorking = array_filter_x_esm_res.threw === false && array_filter_x_esm_res.value && array_filter_x_esm_res.value.length === 0 && array_filter_x_esm_spy.value !== true;
  }
}
/**
 * This method creates a new array with all elements that pass the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function is a predicate, to test each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with the elements that pass the test.
 */


var $filter;

if (nativFilter) {
  $filter = function filter(array, callBack
  /* , thisArg */
  ) {
    var args = [callBack];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativFilter.apply(array, args);
  };
} else {
  $filter = function filter(array, callBack
  /* , thisArg */
  ) {
    var object = toObject(array); // If no callback function or if callback is not a callable function

    assertIsFunction(callBack);
    var iterable = splitIfBoxedBug(object);
    var length = toLength2018(iterable.length);
    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var noThis = typeof thisArg === 'undefined';
    var result = [];

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        var item = iterable[i];

        if (noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object)) {
          result[result.length] = item;
        }
      }
    }

    return result;
  };
}

var arrayFilter = $filter;
/* harmony default export */ var array_filter_x_esm = (arrayFilter);


// CONCATENATED MODULE: ./node_modules/get-own-property-symbols-x/dist/get-own-property-symbols-x.esm.js



var nativeGOPS = {}.constructor.getOwnPropertySymbols;
var get_own_property_symbols_x_esm_isWorking;

if (has_symbol_support_x_esm && nativeGOPS && typeof nativeGOPS === 'function') {
  /* eslint-disable-next-line compat/compat */
  var get_own_property_symbols_x_esm_symbol = Symbol('');
  var get_own_property_symbols_x_esm_testObj = {
    a: 1
  };
  get_own_property_symbols_x_esm_testObj[get_own_property_symbols_x_esm_symbol] = 2;
  var get_own_property_symbols_x_esm_r = attempt(nativeGOPS, get_own_property_symbols_x_esm_testObj);
  get_own_property_symbols_x_esm_isWorking = get_own_property_symbols_x_esm_r.threw === false && get_own_property_symbols_x_esm_r.value && get_own_property_symbols_x_esm_r.value.length === 1 && get_own_property_symbols_x_esm_r.value[0] === get_own_property_symbols_x_esm_symbol;
}
/**
 * This method creates an array of all symbol properties found directly upon a
 * given object.
 *
 * @param {object} obj - The object whose symbol properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of all symbol properties found directly upon the
 *  given object.
 */


function getOwnPropertySymbols(obj) {
  var object = toObject(obj);
  return get_own_property_symbols_x_esm_isWorking ? nativeGOPS(object) : [];
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/dist/get-own-enumerable-property-symbols-x.esm.js
function get_own_enumerable_property_symbols_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





/**
 * This method returns only the enumerable own property symbols of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own property symbols.
 */

function getOwnEnumerablePropertySymbols(target) {
  var _this = this;

  var object = toObject(target);
  return array_filter_x_esm(getOwnPropertySymbols(object), function (symbol) {
    get_own_enumerable_property_symbols_x_esm_newArrowCheck(this, _this);

    return propertyIsEnumerable(object, symbol);
  }.bind(this));
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-keys-x/dist/get-own-enumerable-keys-x.esm.js



var concat = [].concat;
/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own keys.
 */

function getOwnNonEnumerableKeys(target) {
  var object = toObject(target);
  return concat.call(object_keys_x_esm(object), getOwnEnumerablePropertySymbols(object));
}


// CONCATENATED MODULE: ./node_modules/object-define-properties-x/dist/object-define-properties-x.esm.js
function object_define_properties_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






/**
 * This method defines new or modifies existing properties directly on an
 * object, returning the object.
 *
 * @param {object} object - The object on which to define or modify properties.
 * @param {object} properties - An object whose own enumerable properties
 *  constitute descriptors for the
 * properties to be defined or modified.
 * @returns {object} The object that was passed to the function.
 */

function defineProperties(object, properties) {
  var _this = this;

  assertIsObject(object);
  var props = toObject(properties);
  array_for_each_x_esm(getOwnNonEnumerableKeys(props), function (property) {
    object_define_properties_x_esm_newArrowCheck(this, _this);

    if (property !== '__proto__') {
      object_define_property_x_esm(object, property, props[property]);
    }
  }.bind(this));
  return object;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function is_nil_x_esm_isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (is_nil_x_esm_isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/to-object-x/dist/to-object-x.esm.js

var to_object_x_esm_castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function to_object_x_esm_toObject(value) {
  return to_object_x_esm_castObject(require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/is-array-x/dist/is-array-x.esm.js
var dist_is_array_x_esm_this = undefined;

function dist_is_array_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var is_array_x_esm_nativeIsArray = [].isArray;
var is_array_x_esm_isArrayNative = typeof is_array_x_esm_nativeIsArray === 'function' && is_array_x_esm_nativeIsArray;
var is_array_x_esm_testRes = is_array_x_esm_isArrayNative && attempt_x_esm_attempt(function () {
  dist_is_array_x_esm_newArrowCheck(this, dist_is_array_x_esm_this);

  return is_array_x_esm_isArrayNative([]) === true && is_array_x_esm_isArrayNative({
    length: 0
  }) === false;
}.bind(undefined));

var is_array_x_esm_isArrayFn = function iife() {
  if (is_array_x_esm_testRes && is_array_x_esm_testRes.threw === false && is_array_x_esm_testRes.value === true) {
    return is_array_x_esm_isArrayNative;
  }
  /**
   * The isArray() function determines whether the passed value is an Array.
   *
   * @function isArray
   * @param {*} [value] - The object to be checked..
   * @returns {boolean} `true` if the object is an Array; otherwise, `false`.
   */


  return function isArray(value) {
    return to_string_tag_x_esm_toStringTag(value) === '[object Array]';
  };
}();

/* harmony default export */ var dist_is_array_x_esm = (is_array_x_esm_isArrayFn);


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var dist_has_symbol_support_x_esm_this = undefined;

function has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var has_symbol_support_x_esm_hasSymbolSupport = attempt_x_esm_attempt(function () {
  has_symbol_support_x_esm_newArrowCheck(this, dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var dist_has_symbol_support_x_esm = (has_symbol_support_x_esm_hasSymbolSupport.threw === false && has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/array-slice-x/node_modules/is-primitive/index.js
var node_modules_is_primitive = __webpack_require__(6);
var node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var dist_has_to_string_tag_x_esm = (dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/to-string-x/dist/to-string-x.esm.js

var to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var to_string_x_esm_castString = to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_string_x_esm_ERROR_MESSAGE);
  }

  return to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return dist_to_string_x_esm_ToString(require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2018 = '';
var dist_white_space_x_esm_length = white_space_x_esm_list.length;

for (var dist_white_space_x_esm_i = 0; dist_white_space_x_esm_i < dist_white_space_x_esm_length; dist_white_space_x_esm_i += 1) {
  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2016) {
    white_space_x_esm_stringES2016 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }

  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2018) {
    white_space_x_esm_stringES2018 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }
}

var white_space_x_esm_string2018 = white_space_x_esm_stringES2018;
/* harmony default export */ var dist_white_space_x_esm = (white_space_x_esm_string2018);
var white_space_x_esm_string2016 = white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var dist_trim_left_x_esm_EMPTY_STRING = '';
var trim_left_x_esm_RegExpCtr = /none/.constructor;
var trim_left_x_esm_reLeft2016 = new trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_esm_string2016, "]+"));
var trim_left_x_esm_reLeft = new trim_left_x_esm_RegExpCtr("^[".concat(dist_white_space_x_esm, "]+"));
var trim_left_x_esm_replace = dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_esm_trimLeft2016(string) {
  return trim_left_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_esm_reLeft2016, dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_esm_trimLeft2018(string) {
  return trim_left_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_esm_reLeft, dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var dist_trim_right_x_esm_EMPTY_STRING = '';
var dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var trim_right_x_esm_reRight2016 = new dist_trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm_string2016, "]+$"));
var trim_right_x_esm_reRight2018 = new dist_trim_right_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm, "]+$"));
var dist_trim_right_x_esm_replace = dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_esm_trimRight2016(string) {
  return dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_esm_reRight2016, dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_esm_trimRight2018(string) {
  return dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_esm_reRight2018, dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_esm_trim2016(string) {
  return trim_left_x_esm_trimLeft2016(trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_esm_trim2018(string) {
  return trim_left_x_esm_trimLeft2018(trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var normalize_space_x_esm_SPACE = ' ';
var dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var normalize_space_x_esm_reNormalize2016 = new dist_normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm_string2016, "]+"), 'g');
var normalize_space_x_esm_reNormalize2018 = new dist_normalize_space_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm, "]+"), 'g');
var dist_normalize_space_x_esm_replace = normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalize_space_x_esm_normalizeSpace2016(string) {
  return dist_normalize_space_x_esm_replace.call(trim_x_esm_trim2016(string), normalize_space_x_esm_reNormalize2016, normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function normalize_space_x_esm_normalizeSpace2018(string) {
  return dist_normalize_space_x_esm_replace.call(trim_x_esm_trim2018(string), normalize_space_x_esm_reNormalize2018, normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var dist_replace_comments_x_esm_EMPTY_STRING = '';
var replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var dist_replace_comments_x_esm_replace = dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replace_comments_x_esm_replaceComments(string, replacement) {
  return dist_replace_comments_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? dist_to_string_x_esm_ToString(replacement) : dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/is-function-x/dist/is-function-x.esm.js
var dist_is_function_x_esm_this = undefined;

function dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var dist_is_function_x_esm_SPACE = ' ';
var is_function_x_esm_fToString = Function.prototype.toString;
var is_function_x_esm_funcTag = '[object Function]';
var is_function_x_esm_genTag = '[object GeneratorFunction]';
var is_function_x_esm_asyncTag = '[object AsyncFunction]';
var is_function_x_esm_ctrRx = /^class /;
var is_function_x_esm_test = is_function_x_esm_ctrRx.test;
var is_function_x_esm_hasNativeClass = attempt_x_esm_attempt(function () {
  dist_is_function_x_esm_newArrowCheck(this, dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var is_function_x_esm_testClassstring = function _testClassstring(value) {
  return is_function_x_esm_test.call(is_function_x_esm_ctrRx, normalize_space_x_esm_normalizeSpace2018(replace_comments_x_esm_replaceComments(is_function_x_esm_fToString.call(value), dist_is_function_x_esm_SPACE)));
};

var is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt_x_esm_attempt(is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (is_function_x_esm_hasNativeClass && allowClass === false && is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_esm_attempt.call(value, is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function is_function_x_esm_isFunction(value, allowClass) {
  if (node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (dist_has_to_string_tag_x_esm) {
    return is_function_x_esm_tryFuncToString(value, dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (is_function_x_esm_hasNativeClass && isFalsey(allowClass) && is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = to_string_tag_x_esm_toStringTag(value);
  return strTag === is_function_x_esm_funcTag || strTag === is_function_x_esm_genTag || strTag === is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var to_primitive_x_esm_ZERO = 0;
var to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var to_primitive_x_esm_UNDEFINED = void to_primitive_x_esm_ZERO;
var to_primitive_x_esm_NUMBER = 'number';
var to_primitive_x_esm_STRING = 'string';
var to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var to_primitive_x_esm_StringCtr = to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var to_primitive_x_esm_NumberCtr = to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_esm_symToPrimitive = dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_esm_symValueOf = dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== to_primitive_x_esm_NUMBER && hint !== to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === to_primitive_x_esm_STRING ? to_primitive_x_esm_toStringOrder : to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = to_primitive_x_esm_ZERO; i < to_primitive_x_esm_orderLength; i += to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (is_nil_x_esm_isNil(func) === false) {
    if (is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === to_primitive_x_esm_StringCtr) {
      return to_primitive_x_esm_STRING;
    }

    if (value === to_primitive_x_esm_NumberCtr) {
      return to_primitive_x_esm_NUMBER;
    }
  }

  return to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (dist_has_symbol_support_x_esm) {
    if (to_primitive_x_esm_symToPrimitive) {
      return to_primitive_x_esm_getMethod(value, to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return to_primitive_x_esm_symValueOf;
    }
  }

  return to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = to_primitive_x_esm_getHint(preferredType, arguments.length > to_primitive_x_esm_ONE);
  var exoticToPrim = dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? to_primitive_x_esm_STRING : hint;
  return to_primitive_x_esm_ordinaryToPrimitive(input, newHint === to_primitive_x_esm_DEFAULT ? to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var parse_int_x_esm_ref = '',
    parse_int_x_esm_charAt = parse_int_x_esm_ref.charAt;
var parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var dist_parse_int_x_esm_test = parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parse_int_x_esm_parseInt2016(string, radix) {
  var str = trim_left_x_esm_trimLeft2016(dist_to_string_x_esm_ToString(string));
  return parse_int_x_esm_nativeParseInt(str, parse_int_x_esm_castNumber(radix) || (dist_parse_int_x_esm_test.call(parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parse_int_x_esm_parseInt2018(string, radix) {
  var str = trim_left_x_esm_trimLeft2018(dist_to_string_x_esm_ToString(string));

  if (parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return dist_nan_x_esm;
  }

  return parse_int_x_esm_nativeParseInt(str, parse_int_x_esm_castNumber(radix) || (dist_parse_int_x_esm_test.call(parse_int_x_esm_hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/to-number-x/dist/to-number-x.esm.js





var to_number_x_esm_binaryRadix = 2;
var to_number_x_esm_octalRadix = 8;
var to_number_x_esm_testCharsCount = 2;
var dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var dist_to_number_x_esm_castNumber = to_number_x_esm_testCharsCount.constructor;
var to_number_x_esm_pStrSlice = dist_to_number_x_esm_ERROR_MESSAGE.slice;
var to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var to_number_x_esm_RegExpConstructor = to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var dist_to_number_x_esm_test = to_number_x_esm_binaryRegex.test;

var to_number_x_esm_isBinary = function _isBinary(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_binaryRegex, value);
};

var to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var to_number_x_esm_isOctal = function _isOctal(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_octalRegex, value);
};

var to_number_x_esm_nonWSregex2016 = new to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_nonWSregex2016, value);
};

var to_number_x_esm_nonWSregex2018 = new to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_nonWSregex2018, value);
};

var to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function to_number_x_esm_toNumber2016(argument) {
  var value = to_primitive_x_esm_toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (to_number_x_esm_isBinary(value)) {
      return to_number_x_esm_toNumber2016(parse_int_x_esm_parseInt2016(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_binaryRadix));
    }

    if (to_number_x_esm_isOctal(value)) {
      return to_number_x_esm_toNumber2016(parse_int_x_esm_parseInt2016(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_octalRadix));
    }

    if (to_number_x_esm_hasNonWS2016(value) || to_number_x_esm_isInvalidHexLiteral(value)) {
      return dist_nan_x_esm;
    }

    var trimmed = trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function to_number_x_esm_toNumber2018(argument) {
  var value = to_primitive_x_esm_toPrimitive(argument, dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (to_number_x_esm_isBinary(value)) {
      return to_number_x_esm_toNumber2018(parse_int_x_esm_parseInt2018(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_binaryRadix));
    }

    if (to_number_x_esm_isOctal(value)) {
      return to_number_x_esm_toNumber2018(parse_int_x_esm_parseInt2018(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_octalRadix));
    }

    if (to_number_x_esm_hasNonWS2018(value) || to_number_x_esm_isInvalidHexLiteral(value)) {
      return dist_nan_x_esm;
    }

    var trimmed = trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return to_number_x_esm_toNumber2018(trimmed);
    }
  }

  return dist_to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function dist_is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && dist_is_nan_x_esm_isNaN(number) === false && number !== dist_infinity_x_esm && number !== -dist_infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function math_sign_x_esm_sign2016(x) {
  var n = to_number_x_esm_toNumber2016(x);

  if (n === 0 || dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function math_sign_x_esm_sign2018(x) {
  var n = to_number_x_esm_toNumber2018(x);

  if (n === 0 || dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var to_integer_x_esm_abs = Math.abs,
    to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_integer_x_esm_toInteger2016(value) {
  var number = to_number_x_esm_toNumber2016(value);

  if (dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return math_sign_x_esm_sign2016(number) * to_integer_x_esm_floor(to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_integer_x_esm_toInteger2018(value) {
  var number = to_number_x_esm_toNumber2018(value);

  if (dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return math_sign_x_esm_sign2018(number) * to_integer_x_esm_floor(to_integer_x_esm_abs(number));
}


// EXTERNAL MODULE: ./node_modules/array-slice-x/node_modules/max-safe-integer/index.js
var node_modules_max_safe_integer = __webpack_require__(7);
var node_modules_max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(node_modules_max_safe_integer);

// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_length_x_esm_toLength2016(value) {
  var len = to_integer_x_esm_toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > node_modules_max_safe_integer_default.a) {
    return node_modules_max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_length_x_esm_toLength2018(value) {
  var len = to_integer_x_esm_toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > node_modules_max_safe_integer_default.a) {
    return node_modules_max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var dist_has_boxed_string_x_esm_string = 'a';
var has_boxed_string_x_esm_boxedString = {}.constructor(dist_has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var has_boxed_string_x_esm_hasBoxed = has_boxed_string_x_esm_boxedString[0] === dist_has_boxed_string_x_esm_string && 0 in has_boxed_string_x_esm_boxedString;
/* harmony default export */ var dist_has_boxed_string_x_esm = (has_boxed_string_x_esm_hasBoxed);


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var split_if_boxed_bug_x_esm_EMPTY_STRING = '';
var split_if_boxed_bug_x_esm_strSplit = split_if_boxed_bug_x_esm_EMPTY_STRING.split;
var split_if_boxed_bug_x_esm_isStringFn = dist_has_boxed_string_x_esm === false && typeof split_if_boxed_bug_x_esm_strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function split_if_boxed_bug_x_esm_splitIfBoxedBug(value) {
  return split_if_boxed_bug_x_esm_isStringFn && split_if_boxed_bug_x_esm_isStringFn(value) ? split_if_boxed_bug_x_esm_strSplit.call(value, split_if_boxed_bug_x_esm_EMPTY_STRING) : value;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/node_modules/array-like-slice-x/dist/array-like-slice-x.esm.js






var array_like_slice_x_esm_getMax = function _getMax(a, b) {
  return a >= b ? a : b;
};

var array_like_slice_x_esm_getMin = function _getMin(a, b) {
  return a <= b ? a : b;
};

var array_like_slice_x_esm_setRelative = function _setRelative(value, length) {
  return value < 0 ? array_like_slice_x_esm_getMax(length + value, 0) : array_like_slice_x_esm_getMin(value, length);
};
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {!object} arrayLike - The array like object to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */


function array_like_slice_x_esm_slice(arrayLike, start, end) {
  var iterable = split_if_boxed_bug_x_esm_splitIfBoxedBug(to_object_x_esm_toObject(arrayLike));
  var length = to_length_x_esm_toLength2018(iterable.length);
  var k = array_like_slice_x_esm_setRelative(to_integer_x_esm_toInteger2018(start), length);
  var relativeEnd = lib_default()(end) ? length : to_integer_x_esm_toInteger2018(end);
  var finalEnd = array_like_slice_x_esm_setRelative(relativeEnd, length);
  var val = [];
  val.length = array_like_slice_x_esm_getMax(finalEnd - k, 0);
  var next = 0;

  while (k < finalEnd) {
    if (k in iterable) {
      val[next] = iterable[k];
    }

    next += 1;
    k += 1;
  }

  return val;
}


// CONCATENATED MODULE: ./node_modules/array-slice-x/dist/array-slice-x.esm.js






var nativeSlice = [].slice;
var resultArray = nativeSlice ? attempt_x_esm_attempt.call([1, 2, 3], nativeSlice, 1, 2) : null;
var failArray = resultArray ? resultArray.threw || dist_is_array_x_esm(resultArray.value) === false || resultArray.value.length !== 1 || resultArray.value[0] !== 2 : false;
var resultString = nativeSlice ? attempt_x_esm_attempt.call('abc', nativeSlice, 1, 2) : null;
var failString = resultString ? resultString.threw || dist_is_array_x_esm(resultString.value) === false || resultString.value.length !== 1 || resultString.value[0] !== 'b' : false;
var array_slice_x_esm_doc = typeof document !== 'undefined' && document;
var resultDocElement = nativeSlice && array_slice_x_esm_doc ? attempt_x_esm_attempt.call(array_slice_x_esm_doc.documentElement, nativeSlice).threw : null;
var failDOM = resultDocElement ? resultDocElement.threw : false;
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {Array|object} array - The array to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice(1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the
 *  sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */

function array_slice_x_esm_slice(array, start, end) {
  var object = to_object_x_esm_toObject(array);

  if (failArray || failDOM && dist_is_array_x_esm(object) === false || failString && is_string_default()(object) || is_arguments_default()(object)) {
    return array_like_slice_x_esm_slice(object, start, end);
  }
  /* eslint-disable-next-line prefer-rest-params */


  return nativeSlice.apply(object, array_like_slice_x_esm_slice(arguments, 1));
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var has_boxed_string_x_dist_has_boxed_string_x_esm_string = 'a';
var dist_has_boxed_string_x_esm_boxedString = {}.constructor(has_boxed_string_x_dist_has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var dist_has_boxed_string_x_esm_hasBoxed = dist_has_boxed_string_x_esm_boxedString[0] === has_boxed_string_x_dist_has_boxed_string_x_esm_string && 0 in dist_has_boxed_string_x_esm_boxedString;
/* harmony default export */ var has_boxed_string_x_dist_has_boxed_string_x_esm = (dist_has_boxed_string_x_esm_hasBoxed);


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var dist_split_if_boxed_bug_x_esm_EMPTY_STRING = '';
var dist_split_if_boxed_bug_x_esm_strSplit = dist_split_if_boxed_bug_x_esm_EMPTY_STRING.split;
var dist_split_if_boxed_bug_x_esm_isStringFn = has_boxed_string_x_dist_has_boxed_string_x_esm === false && typeof dist_split_if_boxed_bug_x_esm_strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(value) {
  return dist_split_if_boxed_bug_x_esm_isStringFn && dist_split_if_boxed_bug_x_esm_isStringFn(value) ? dist_split_if_boxed_bug_x_esm_strSplit.call(value, dist_split_if_boxed_bug_x_esm_EMPTY_STRING) : value;
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var dist_has_symbol_support_x_esm_hasSymbolSupport = dist_attempt_x_esm_attempt(function () {
  dist_has_symbol_support_x_esm_newArrowCheck(this, has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_dist_has_symbol_support_x_esm = (dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/array-reduce-right-x/node_modules/is-primitive/index.js
var array_reduce_right_x_node_modules_is_primitive = __webpack_require__(3);
var array_reduce_right_x_node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(array_reduce_right_x_node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function to_boolean_x_dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var dist_to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function dist_to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return dist_to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_dist_has_to_string_tag_x_esm = (has_symbol_support_x_dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function dist_is_nil_x_esm_isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (dist_is_nil_x_esm_isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/to-string-x/dist/to-string-x.esm.js

var dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var dist_to_string_x_esm_castString = dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function to_string_x_dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return to_string_x_dist_to_string_x_esm_ToString(dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var dist_white_space_x_esm_stringES2018 = '';
var white_space_x_dist_white_space_x_esm_length = dist_white_space_x_esm_list.length;

for (var white_space_x_dist_white_space_x_esm_i = 0; white_space_x_dist_white_space_x_esm_i < white_space_x_dist_white_space_x_esm_length; white_space_x_dist_white_space_x_esm_i += 1) {
  if (dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].es2016) {
    dist_white_space_x_esm_stringES2016 += dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].string;
  }

  if (dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].es2018) {
    dist_white_space_x_esm_stringES2018 += dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].string;
  }
}

var dist_white_space_x_esm_string2018 = dist_white_space_x_esm_stringES2018;
/* harmony default export */ var white_space_x_dist_white_space_x_esm = (dist_white_space_x_esm_string2018);
var dist_white_space_x_esm_string2016 = dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var dist_trim_left_x_esm_reLeft2016 = new dist_trim_left_x_esm_RegExpCtr("^[".concat(dist_white_space_x_esm_string2016, "]+"));
var dist_trim_left_x_esm_reLeft = new dist_trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_dist_white_space_x_esm, "]+"));
var dist_trim_left_x_esm_replace = trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function dist_trim_left_x_esm_trimLeft2016(string) {
  return dist_trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_left_x_esm_reLeft2016, trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function dist_trim_left_x_esm_trimLeft2018(string) {
  return dist_trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_left_x_esm_reLeft, trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var trim_right_x_dist_trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var dist_trim_right_x_esm_reRight2016 = new trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm_string2016, "]+$"));
var dist_trim_right_x_esm_reRight2018 = new trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(white_space_x_dist_white_space_x_esm, "]+$"));
var trim_right_x_dist_trim_right_x_esm_replace = trim_right_x_dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function dist_trim_right_x_esm_trimRight2016(string) {
  return trim_right_x_dist_trim_right_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_right_x_esm_reRight2016, trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function dist_trim_right_x_esm_trimRight2018(string) {
  return trim_right_x_dist_trim_right_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_right_x_esm_reRight2018, trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function dist_trim_x_esm_trim2016(string) {
  return dist_trim_left_x_esm_trimLeft2016(dist_trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function dist_trim_x_esm_trim2018(string) {
  return dist_trim_left_x_esm_trimLeft2018(dist_trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var dist_normalize_space_x_esm_SPACE = ' ';
var normalize_space_x_dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var dist_normalize_space_x_esm_reNormalize2016 = new normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm_string2016, "]+"), 'g');
var dist_normalize_space_x_esm_reNormalize2018 = new normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_dist_white_space_x_esm, "]+"), 'g');
var normalize_space_x_dist_normalize_space_x_esm_replace = dist_normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function dist_normalize_space_x_esm_normalizeSpace2016(string) {
  return normalize_space_x_dist_normalize_space_x_esm_replace.call(dist_trim_x_esm_trim2016(string), dist_normalize_space_x_esm_reNormalize2016, dist_normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function dist_normalize_space_x_esm_normalizeSpace2018(string) {
  return normalize_space_x_dist_normalize_space_x_esm_replace.call(dist_trim_x_esm_trim2018(string), dist_normalize_space_x_esm_reNormalize2018, dist_normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING = '';
var dist_replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_dist_replace_comments_x_esm_replace = replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function dist_replace_comments_x_esm_replaceComments(string, replacement) {
  return replace_comments_x_dist_replace_comments_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? to_string_x_dist_to_string_x_esm_ToString(replacement) : replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_dist_is_function_x_esm_this = undefined;

function is_function_x_dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_function_x_dist_is_function_x_esm_SPACE = ' ';
var dist_is_function_x_esm_fToString = Function.prototype.toString;
var dist_is_function_x_esm_funcTag = '[object Function]';
var dist_is_function_x_esm_genTag = '[object GeneratorFunction]';
var dist_is_function_x_esm_asyncTag = '[object AsyncFunction]';
var dist_is_function_x_esm_ctrRx = /^class /;
var dist_is_function_x_esm_test = dist_is_function_x_esm_ctrRx.test;
var dist_is_function_x_esm_hasNativeClass = dist_attempt_x_esm_attempt(function () {
  is_function_x_dist_is_function_x_esm_newArrowCheck(this, is_function_x_dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var dist_is_function_x_esm_testClassstring = function _testClassstring(value) {
  return dist_is_function_x_esm_test.call(dist_is_function_x_esm_ctrRx, dist_normalize_space_x_esm_normalizeSpace2018(dist_replace_comments_x_esm_replaceComments(dist_is_function_x_esm_fToString.call(value), is_function_x_dist_is_function_x_esm_SPACE)));
};

var dist_is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = dist_attempt_x_esm_attempt(dist_is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var dist_is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (dist_is_function_x_esm_hasNativeClass && allowClass === false && dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return dist_attempt_x_esm_attempt.call(value, dist_is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function dist_is_function_x_esm_isFunction(value, allowClass) {
  if (array_reduce_right_x_node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_dist_has_to_string_tag_x_esm) {
    return dist_is_function_x_esm_tryFuncToString(value, to_boolean_x_dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (dist_is_function_x_esm_hasNativeClass && isFalsey(allowClass) && dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = dist_to_string_tag_x_esm_toStringTag(value);
  return strTag === dist_is_function_x_esm_funcTag || strTag === dist_is_function_x_esm_genTag || strTag === dist_is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var dist_to_primitive_x_esm_ZERO = 0;
var dist_to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var dist_to_primitive_x_esm_UNDEFINED = void dist_to_primitive_x_esm_ZERO;
var dist_to_primitive_x_esm_NUMBER = 'number';
var dist_to_primitive_x_esm_STRING = 'string';
var dist_to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var dist_to_primitive_x_esm_StringCtr = dist_to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var dist_to_primitive_x_esm_NumberCtr = dist_to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var dist_to_primitive_x_esm_symToPrimitive = has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var dist_to_primitive_x_esm_symValueOf = has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var dist_to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var dist_to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var dist_to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var dist_to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  dist_require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== dist_to_primitive_x_esm_NUMBER && hint !== dist_to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === dist_to_primitive_x_esm_STRING ? dist_to_primitive_x_esm_toStringOrder : dist_to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = dist_to_primitive_x_esm_ZERO; i < dist_to_primitive_x_esm_orderLength; i += dist_to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (dist_is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (array_reduce_right_x_node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var dist_to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (dist_is_nil_x_esm_isNil(func) === false) {
    if (dist_is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var dist_to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === dist_to_primitive_x_esm_StringCtr) {
      return dist_to_primitive_x_esm_STRING;
    }

    if (value === dist_to_primitive_x_esm_NumberCtr) {
      return dist_to_primitive_x_esm_NUMBER;
    }
  }

  return dist_to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_dist_has_symbol_support_x_esm) {
    if (dist_to_primitive_x_esm_symToPrimitive) {
      return dist_to_primitive_x_esm_getMethod(value, dist_to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return dist_to_primitive_x_esm_symValueOf;
    }
  }

  return dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function dist_to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (array_reduce_right_x_node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = dist_to_primitive_x_esm_getHint(preferredType, arguments.length > dist_to_primitive_x_esm_ONE);
  var exoticToPrim = to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (array_reduce_right_x_node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === dist_to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? dist_to_primitive_x_esm_STRING : hint;
  return dist_to_primitive_x_esm_ordinaryToPrimitive(input, newHint === dist_to_primitive_x_esm_DEFAULT ? dist_to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var nan_x_dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var dist_parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var dist_parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var dist_parse_int_x_esm_ref = '',
    dist_parse_int_x_esm_charAt = dist_parse_int_x_esm_ref.charAt;
var dist_parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var parse_int_x_dist_parse_int_x_esm_test = dist_parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function dist_parse_int_x_esm_parseInt2016(string, radix) {
  var str = dist_trim_left_x_esm_trimLeft2016(to_string_x_dist_to_string_x_esm_ToString(string));
  return dist_parse_int_x_esm_nativeParseInt(str, dist_parse_int_x_esm_castNumber(radix) || (parse_int_x_dist_parse_int_x_esm_test.call(dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function dist_parse_int_x_esm_parseInt2018(string, radix) {
  var str = dist_trim_left_x_esm_trimLeft2018(to_string_x_dist_to_string_x_esm_ToString(string));

  if (dist_parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return nan_x_dist_nan_x_esm;
  }

  return dist_parse_int_x_esm_nativeParseInt(str, dist_parse_int_x_esm_castNumber(radix) || (parse_int_x_dist_parse_int_x_esm_test.call(dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/to-number-x/dist/to-number-x.esm.js





var dist_to_number_x_esm_binaryRadix = 2;
var dist_to_number_x_esm_octalRadix = 8;
var dist_to_number_x_esm_testCharsCount = 2;
var to_number_x_dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var to_number_x_dist_to_number_x_esm_castNumber = dist_to_number_x_esm_testCharsCount.constructor;
var dist_to_number_x_esm_pStrSlice = to_number_x_dist_to_number_x_esm_ERROR_MESSAGE.slice;
var dist_to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var dist_to_number_x_esm_RegExpConstructor = dist_to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_dist_to_number_x_esm_test = dist_to_number_x_esm_binaryRegex.test;

var dist_to_number_x_esm_isBinary = function _isBinary(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_binaryRegex, value);
};

var dist_to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var dist_to_number_x_esm_isOctal = function _isOctal(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_octalRegex, value);
};

var dist_to_number_x_esm_nonWSregex2016 = new dist_to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var dist_to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_nonWSregex2016, value);
};

var dist_to_number_x_esm_nonWSregex2018 = new dist_to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var dist_to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_nonWSregex2018, value);
};

var dist_to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var dist_to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function dist_to_number_x_esm_toNumber2016(argument) {
  var value = dist_to_primitive_x_esm_toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (dist_to_number_x_esm_isBinary(value)) {
      return dist_to_number_x_esm_toNumber2016(dist_parse_int_x_esm_parseInt2016(dist_to_number_x_esm_pStrSlice.call(value, dist_to_number_x_esm_testCharsCount), dist_to_number_x_esm_binaryRadix));
    }

    if (dist_to_number_x_esm_isOctal(value)) {
      return dist_to_number_x_esm_toNumber2016(dist_parse_int_x_esm_parseInt2016(dist_to_number_x_esm_pStrSlice.call(value, dist_to_number_x_esm_testCharsCount), dist_to_number_x_esm_octalRadix));
    }

    if (dist_to_number_x_esm_hasNonWS2016(value) || dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return nan_x_dist_nan_x_esm;
    }

    var trimmed = dist_trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return dist_to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return to_number_x_dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function dist_to_number_x_esm_toNumber2018(argument) {
  var value = dist_to_primitive_x_esm_toPrimitive(argument, to_number_x_dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (dist_to_number_x_esm_isBinary(value)) {
      return dist_to_number_x_esm_toNumber2018(dist_parse_int_x_esm_parseInt2018(dist_to_number_x_esm_pStrSlice.call(value, dist_to_number_x_esm_testCharsCount), dist_to_number_x_esm_binaryRadix));
    }

    if (dist_to_number_x_esm_isOctal(value)) {
      return dist_to_number_x_esm_toNumber2018(dist_parse_int_x_esm_parseInt2018(dist_to_number_x_esm_pStrSlice.call(value, dist_to_number_x_esm_testCharsCount), dist_to_number_x_esm_octalRadix));
    }

    if (dist_to_number_x_esm_hasNonWS2018(value) || dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return nan_x_dist_nan_x_esm;
    }

    var trimmed = dist_trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return dist_to_number_x_esm_toNumber2018(trimmed);
    }
  }

  return to_number_x_dist_to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function is_nan_x_dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function is_finite_x_dist_is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && is_nan_x_dist_is_nan_x_esm_isNaN(number) === false && number !== infinity_x_dist_infinity_x_esm && number !== -infinity_x_dist_infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function dist_math_sign_x_esm_sign2016(x) {
  var n = dist_to_number_x_esm_toNumber2016(x);

  if (n === 0 || is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function dist_math_sign_x_esm_sign2018(x) {
  var n = dist_to_number_x_esm_toNumber2018(x);

  if (n === 0 || is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var dist_to_integer_x_esm_abs = Math.abs,
    dist_to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function dist_to_integer_x_esm_toInteger2016(value) {
  var number = dist_to_number_x_esm_toNumber2016(value);

  if (is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return dist_math_sign_x_esm_sign2016(number) * dist_to_integer_x_esm_floor(dist_to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function dist_to_integer_x_esm_toInteger2018(value) {
  var number = dist_to_number_x_esm_toNumber2018(value);

  if (is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return dist_math_sign_x_esm_sign2018(number) * dist_to_integer_x_esm_floor(dist_to_integer_x_esm_abs(number));
}


// EXTERNAL MODULE: ./node_modules/array-reduce-right-x/node_modules/max-safe-integer/index.js
var array_reduce_right_x_node_modules_max_safe_integer = __webpack_require__(8);
var array_reduce_right_x_node_modules_max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(array_reduce_right_x_node_modules_max_safe_integer);

// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function dist_to_length_x_esm_toLength2016(value) {
  var len = dist_to_integer_x_esm_toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > array_reduce_right_x_node_modules_max_safe_integer_default.a) {
    return array_reduce_right_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function dist_to_length_x_esm_toLength2018(value) {
  var len = dist_to_integer_x_esm_toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > array_reduce_right_x_node_modules_max_safe_integer_default.a) {
    return array_reduce_right_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/to-object-x/dist/to-object-x.esm.js

var dist_to_object_x_esm_castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function dist_to_object_x_esm_toObject(value) {
  return dist_to_object_x_esm_castObject(dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js


/* eslint-disable-next-line compat/compat */

var to_string_symbols_supported_x_esm_pToString = has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.toString;
var to_string_symbols_supported_x_esm_isSymbolFn = typeof to_string_symbols_supported_x_esm_pToString === 'function' && is_symbol_default.a;
/** @type {Function} */

var dist_to_string_symbols_supported_x_esm_castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

function to_string_symbols_supported_x_esm_toStringSymbolsSupported(value) {
  return to_string_symbols_supported_x_esm_isSymbolFn && to_string_symbols_supported_x_esm_isSymbolFn(value) ? to_string_symbols_supported_x_esm_pToString.call(value) : dist_to_string_symbols_supported_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

function assert_is_function_x_esm_assertIsFunction(callback) {
  if (dist_is_function_x_esm_isFunction(callback) === false) {
    var msg = array_reduce_right_x_node_modules_is_primitive_default()(callback) ? to_string_symbols_supported_x_esm_toStringSymbolsSupported(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
}


// CONCATENATED MODULE: ./node_modules/array-reduce-right-x/dist/array-reduce-right-x.esm.js
var array_reduce_right_x_esm_this = undefined;

function array_reduce_right_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { array_reduce_right_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { array_reduce_right_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return array_reduce_right_x_esm_typeof(obj); }

function array_reduce_right_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var array_reduce_right_x_esm_ArrayCtr = [].constructor;
var array_reduce_right_x_esm_castObject = {}.constructor;
var nativeReduceR = typeof array_reduce_right_x_esm_ArrayCtr.prototype.reduceRight === 'function' && array_reduce_right_x_esm_ArrayCtr.prototype.reduceRight; // ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight

var array_reduce_right_x_esm_isWorking;

if (nativeReduceR) {
  array_reduce_right_x_esm_isWorking = dist_attempt_x_esm_attempt.call([], nativeReduceR, function (acc) {
    array_reduce_right_x_esm_newArrowCheck(this, array_reduce_right_x_esm_this);

    return acc;
  }.bind(undefined)).threw;
  var array_reduce_right_x_esm_res;

  if (array_reduce_right_x_esm_isWorking) {
    array_reduce_right_x_esm_res = dist_attempt_x_esm_attempt.call(array_reduce_right_x_esm_castObject('abc'), nativeReduceR, function (acc, c) {
      array_reduce_right_x_esm_newArrowCheck(this, array_reduce_right_x_esm_this);

      return acc + c;
    }.bind(undefined), 'x');
    array_reduce_right_x_esm_isWorking = array_reduce_right_x_esm_res.threw === false && array_reduce_right_x_esm_res.value === 'xcba';
  }

  if (array_reduce_right_x_esm_isWorking) {
    array_reduce_right_x_esm_res = dist_attempt_x_esm_attempt.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3), nativeReduceR, function (acc, arg) {
      array_reduce_right_x_esm_newArrowCheck(this, array_reduce_right_x_esm_this);

      return acc + arg;
    }.bind(undefined), 1);
    array_reduce_right_x_esm_isWorking = array_reduce_right_x_esm_res.threw === false && array_reduce_right_x_esm_res.value === 7;
  }

  if (array_reduce_right_x_esm_isWorking) {
    array_reduce_right_x_esm_res = dist_attempt_x_esm_attempt.call({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, nativeReduceR, function (acc, arg) {
      array_reduce_right_x_esm_newArrowCheck(this, array_reduce_right_x_esm_this);

      return acc + arg;
    }.bind(undefined), 2);
    array_reduce_right_x_esm_isWorking = array_reduce_right_x_esm_res.threw === false && array_reduce_right_x_esm_res.value === 8;
  }

  if (array_reduce_right_x_esm_isWorking) {
    var array_reduce_right_x_esm_doc = typeof document !== 'undefined' && document;

    if (array_reduce_right_x_esm_doc) {
      var array_reduce_right_x_esm_fragment = array_reduce_right_x_esm_doc.createDocumentFragment();
      var array_reduce_right_x_esm_div = array_reduce_right_x_esm_doc.createElement('div');
      array_reduce_right_x_esm_fragment.appendChild(array_reduce_right_x_esm_div);
      array_reduce_right_x_esm_res = dist_attempt_x_esm_attempt.call(array_reduce_right_x_esm_fragment.childNodes, nativeReduceR, function (acc, node) {
        array_reduce_right_x_esm_newArrowCheck(this, array_reduce_right_x_esm_this);

        acc[acc.length] = node;
        return acc;
      }.bind(undefined), []);
      array_reduce_right_x_esm_isWorking = array_reduce_right_x_esm_res.threw === false && array_reduce_right_x_esm_res.value.length === 1 && array_reduce_right_x_esm_res.value[0] === array_reduce_right_x_esm_div;
    }
  }

  if (array_reduce_right_x_esm_isWorking) {
    array_reduce_right_x_esm_res = dist_attempt_x_esm_attempt.call('ab', nativeReduceR, function (_, __, ___, list) {
      array_reduce_right_x_esm_newArrowCheck(this, array_reduce_right_x_esm_this);

      return list;
    }.bind(undefined));
    array_reduce_right_x_esm_isWorking = array_reduce_right_x_esm_res.threw === false && array_reduce_right_x_esm_typeof(array_reduce_right_x_esm_res.value) === 'object';
  }
}
/**
 * This method applies a function against an accumulator and each value of the
 * array (from right-to-left) to reduce it to a single value..
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to execute for each element.
 * @param {*} [initialValue] - Value to use as the first argument to the first
 *  call of the callback. If no initial value is supplied, the first element in
 *  the array will be used. Calling reduceRight on an empty array without an initial
 *  value is an error.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @throws {TypeError} If called on an empty array without an initial value.
 * @returns {*} The value that results from the reduction.
 */


var $reduceRight;

if (nativeReduceR && array_reduce_right_x_esm_isWorking) {
  $reduceRight = function reduceRight(array, callBack
  /* , initialValue */
  ) {
    var args = [callBack];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeReduceR.apply(array, args);
  };
} else {
  $reduceRight = function reduceRight(array, callBack
  /* , initialValue */
  ) {
    var object = dist_to_object_x_esm_toObject(array); // If no callback function or if callback is not a callable function

    assert_is_function_x_esm_assertIsFunction(callBack);
    var iterable = dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(object);
    var length = dist_to_length_x_esm_toLength2018(iterable.length);
    var argsLength = arguments.length; // no value to return if no initial value, empty array

    if (length === 0 && argsLength < 3) {
      throw new TypeError('reduceRight of empty array with no initial value');
    }

    var result;
    var i = length - 1;

    if (argsLength > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      result = arguments[2];
    } else {
      do {
        if (i in iterable) {
          result = iterable[i];
          i -= 1;
          break;
        } // if array contains no values, no initial value to return


        i -= 1;

        if (i < 0) {
          throw new TypeError('reduceRight of empty array with no initial value');
        }
      } while (true);
      /* eslint-disable-line no-constant-condition */

    }

    while (i >= 0) {
      if (i in iterable) {
        result = callBack(result, iterable[i], i, object);
      }

      i -= 1;
    }

    return result;
  };
}

var rr = $reduceRight;
/* harmony default export */ var array_reduce_right_x_esm = (rr);


// CONCATENATED MODULE: ./dist/big-counter-x.esm.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BigCounter; });



/** @type {BooleanConstructor} */

var big_counter_x_esm_castBoolean = true.constructor;

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
  return array_reduce_right_x_esm(this.count, reducer, '');
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


function BigCounter() {
  if (big_counter_x_esm_castBoolean(this) === false || this instanceof BigCounter === false) {
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
      var clone = array_slice_x_esm_slice(this.count);
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



/***/ })
/******/ ]);
});
//# sourceMappingURL=big-counter-x.js.map