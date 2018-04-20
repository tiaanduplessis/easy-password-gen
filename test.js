import passwordGen from './src/index'

test("Should be defined", () => {
  expect(typeof passwordGen).toBe('function')
})

test("Should generate a random password", () => {
  expect(passwordGen().length).toBe(10)
  expect(passwordGen(16).length).toBe(16)
  expect(passwordGen(8, "QWERTYUIOASDFGHJKLZXCVBNM")).toMatch(/[A-Z]{8}/)
})
