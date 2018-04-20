const defaultCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}()[]#:;^,.?!|&_`~@$%/\\=+-'\"*"

function passwordGen (len = 10, charset = defaultCharset) {
  const length = charset.length
  let password = ''

  for (let i = 0; i < len; i++) {
    password += charset.charAt(Math.floor(Math.random() * length))
  }

  return password
}

export default passwordGen
