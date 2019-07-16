import BigCounter from '../src/big-counter-x';

describe('basic tests', function() {
  it('should throw without "new"', function() {
    expect.assertions(1);
    expect(function() {
      /* eslint-disable-next-line babel/new-cap */
      BigCounter();
    }).toThrowErrorMatchingSnapshot();
  });

  it('create an instance', function() {
    expect.assertions(1);
    expect(new BigCounter()).toStrictEqual(expect.any(BigCounter));
  });

  it('getters', function() {
    expect.assertions(4);
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    expect(counter.toString()).toBe('0');
    expect(counter.valueOf()).toBe('0');
    expect(counter.toJSON()).toBe('0');
  });

  it('incrementing', function() {
    expect.assertions(3);
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter.next();
    expect(counter.get()).toBe('1');
    counter.next();
    expect(counter.get()).toBe('2');
  });

  it('chaining', function() {
    expect.assertions(2);
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter
      .next()
      .next()
      .next();
    expect(counter.get()).toBe('3');
  });

  it('resetting', function() {
    expect.assertions(3);
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter
      .reset()
      .next()
      .next()
      .next();
    expect(counter.get()).toBe('3');
    counter.reset();
    expect(counter.get()).toBe('0');
  });

  it('number coercion', function() {
    expect.assertions(5);
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter
      .next()
      .next()
      .next();
    expect(Number(counter)).toBe(3);
    expect(counter.get()).toBe('3');
    expect(Number(counter)).toBe(3);
    expect(counter.get()).toBe('3');
  });

  it('string coercion', function() {
    expect.assertions(5);
    const counter = new BigCounter();
    expect(counter.get()).toBe('0');
    counter
      .next()
      .next()
      .next();
    expect(`Count:${counter}`).toBe('Count:3');
    expect(counter.get()).toBe('3');
    expect(String(counter)).toBe('3');
    expect(counter.get()).toBe('3');
  });

  it('count a few', function() {
    expect.assertions(10001);
    const counter = new BigCounter();
    const howMany = 10000;
    new Array(howMany).fill().forEach(function(u, i) {
      expect(counter.get()).toBe(i.toString());
      counter.next();
    });
    expect(counter.get()).toBe(howMany.toString());
  });
});
