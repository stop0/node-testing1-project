const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    // ✨ test away
    const obj = {name:' moe ', last:' dawod '}
    const newObj = utils.trimProperties(obj)
    expect(newObj).toEqual({name:'moe', last:'dawod'})
    expect(obj).toEqual(obj)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    // ✨ test away
    const obj = {foo: '  foo ', bar: 'bar '}
    const newObj = utils.trimPropertiesMutation(obj)
    expect(newObj).toEqual({foo:'foo', bar:'bar'})

  })
  it('[4] the object returned is the exact same one we passed in', () => {
    // ✨ test away
    const obj = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    expect(utils.trimPropertiesMutation(obj)).toBe(obj)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    // ✨ test away
    const array = [1,2,3,4]
    expect(utils.findLargestInteger(array)).toBe(4)

  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    // ✨ test away
    expect(counter.countDown()).toEqual(3)

  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    // ✨ test away
    counter.countDown()
    expect(counter.countDown()).toEqual(2)

  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    // ✨ test away
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toEqual(1)
    expect(counter.countDown()).toEqual(0)
    expect(counter.countDown()).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
    expect(seasons.next()).toEqual('summer')

  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
    seasons.next()
    expect(seasons.next()).toEqual('fall')

  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual('winter')

  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual('winter')

  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()

    expect(seasons.next()).toEqual('winter')

  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
    for(let i = 0; i < 39; i++){
      seasons.next()
    }
    expect(seasons.next()).toEqual('spring')

  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
    focus.drive(20)
    expect(focus.odometer).toEqual(20)

  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
    focus.drive(20)
    expect(focus.tank).toEqual(20 - 20/30)

  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
    focus.drive(600)
    expect(focus.tank).toEqual(0)
    focus.refuel(10)
    expect(focus.tank).toEqual(10)
    focus.drive(10)

  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
    focus.refuel(100)
    expect(focus.tank).toEqual(20)

  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    // ✨ test away
    expect( utils.isEvenNumberAsync(2)).toBe(true)

  })
  it('[20] resolves false if passed an odd number', () => {
    // ✨ test away
    expect( utils.isEvenNumberAsync(1)).toBe(false)

  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
    expect( utils.isEvenNumberAsync('test')).toMatch('number must be a number')

  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
    expect( utils.isEvenNumberAsync(NaN)).toMatch('number must be a number')

  })
})
