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
  it('Should throw without "new"', function () {
    expect(function () {
      // eslint-disable-next-line new-cap
      BigCounter();
    }).toThrow();
  });

  it('create an instance', function () {
    expect(new BigCounter()).toEqual(jasmine.any(BigCounter));
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
    counter.next();
    expect(counter.get()).toBe('2');
  });

  it('chaining', function () {
    var counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter.next().next().next();
    expect(counter.get()).toBe('3');
  });

  it('resetting', function () {
    var counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter.reset().next().next().next();
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

  it('Count a few', function () {
    var counter = new BigCounter();
    var howMany = 10000;
    new Array(howMany).fill().forEach(function (u, i) {
      expect(counter.get()).toBe(i.toString());
      counter.next();
    });
    expect(counter.get()).toBe(howMany.toString());
  });
});
