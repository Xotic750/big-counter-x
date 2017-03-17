/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
   maxstatements:12, maxcomplexity:4 */

/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1 */

/* global JSON:true, expect, module, require, jasmine, describe, it,
   returnExports */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var BigCounter;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    BigCounter = require('../../index.js');
  } else {
    BigCounter = returnExports;
  }

  describe('Basic tests', function () {
    it('create an instance', function () {
      expect(new BigCounter()).toEqual(jasmine.any(BigCounter));
      /* jshint newcap:false */
      /* eslint new-cap: 1 */
      expect(BigCounter()).toEqual(jasmine.any(BigCounter));
    });

    it('getters', function () {
      var counter = new BigCounter();
      expect(counter.get()).toBe('0');
      expect(counter.toString()).toBe('0');
      expect(counter.valueOf()).toBe('0');
      expect(counter.toJSON()).toBe('0');
    });

    it('incrementing', function () {
      var counter = new BigCounter();
      expect(counter.get()).toBe('0');
      counter.next();
      expect(counter.get()).toBe('1');
      counter.inc();
      expect(counter.get()).toBe('2');
    });

    it('chaining', function () {
      var counter = new BigCounter();
      expect(counter.get()).toBe('0');
      counter.next().inc().next();
      expect(counter.get()).toBe('3');
    });

    it('resetting', function () {
      var counter = new BigCounter();
      expect(counter.get()).toBe('0');
      counter.next().next().next();
      expect(counter.get()).toBe('3');
      counter.reset();
      expect(counter.get()).toBe('0');
    });

    it('number coercion', function () {
      var counter = new BigCounter();
      expect(counter.get()).toBe('0');
      counter.next().next().next();
      expect(Number(counter)).toBe(3);
      expect(counter.get()).toBe('3');
      expect(Number(counter)).toBe(3);
      expect(counter.get()).toBe('3');
    });

    it('string coercion', function () {
      var counter = new BigCounter();
      expect(counter.get()).toBe('0');
      counter.next().next().next();
      expect('Count:' + counter).toBe('Count:3');
      expect(counter.get()).toBe('3');
      expect(String(counter)).toBe('3');
      expect(counter.get()).toBe('3');
    });
  });
}());
