import randomBytes from 'randombytes'

const sets = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()+_-=}{[]|:;"/?.><,`~'
}

const defaultOpts = {
  size: 256,
  length: 12,
  lowercase: false,
  uppercase: false,
  numbers: true,
  symbols: true
}

function generatePassword (opts = {}) {
  const {
    size = 256,
    length = 12,
    ...pools
  } = Object.assign({}, defaultOpts, opts)
  const rb = randomBytes(size)

  let pool = ''
  let password = ''

  Object.keys(pools).forEach(type => {
    if (pools[type]) { pool += sets[type] }
  })

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * size)
    password += pool[rb[index] % pool.length]
  }
  return password
}

export default generatePassword
