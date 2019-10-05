import generate from '../'

test("should be defined", () => {
  expect(typeof generate).toBe('function')
})

test("should generate a random password of set length", () => {
  expect(generate().length).toBe(12)
  expect(generate({length: 20}).length).toBe(20)
})

test('should only include specified pools in password', () => {
  expect(generate({
    uppercase: true,
    numbers: false,
    symbols: false
  })).toMatch(/[A-Z]{12}/)

  expect(generate({
    lowercase: true,
    numbers: false,
    symbols: false
  })).toMatch(/[a-z]{12}/)


  expect(generate({
    symbols: false
  })).toMatch(/[0-9]{12}/)
})
