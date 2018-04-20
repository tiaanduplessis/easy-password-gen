import simplePasswordGen from 'simple-password-gen'

console.log(simplePasswordGen())
console.log(simplePasswordGen(16))

const newCharset = "ASDFGHJPOIUY"
const newLength = 6

console.log(simplePasswordGen(newLength, newCharset))
