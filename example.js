import easyPasswordGen from 'simple-password-gen'

console.log(easyPasswordGen())
console.log(easyPasswordGen(16))

const newCharset = "ASDFGHJPOIUY"
const newLength = 6

console.log(easyPasswordGen(newLength, newCharset))
