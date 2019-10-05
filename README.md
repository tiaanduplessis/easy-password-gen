
# easy-password-gen
[![package version](https://img.shields.io/npm/v/easy-password-gen.svg?style=flat-square)](https://npmjs.org/package/easy-password-gen)
[![package downloads](https://img.shields.io/npm/dm/easy-password-gen.svg?style=flat-square)](https://npmjs.org/package/easy-password-gen)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/easy-password-gen.svg?style=flat-square)](https://npmjs.org/package/easy-password-gen)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Generate a random password

## Table of Contents

- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)

## Usage

```js
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
```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install easy-password-gen
$ # OR
$ yarn add easy-password-gen
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
