import generatePassword from 'easy-password-gen'

const pass1 = generatePassword({
  lowercase: true,
  length: 40
})
const pass2 = generatePassword({
  uppercase: true,
  numbers: false,
  symbols: false
})

console.log(pass1)
console.log(pass2)
