
# simple-password-gen
[![package version](https://img.shields.io/npm/v/simple-password-gen.svg?style=flat-square)](https://npmjs.org/package/simple-password-gen)
[![package downloads](https://img.shields.io/npm/dm/simple-password-gen.svg?style=flat-square)](https://npmjs.org/package/simple-password-gen)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/simple-password-gen.svg?style=flat-square)](https://npmjs.org/package/simple-password-gen)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Generate a random password

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install simple-password-gen
$ # OR
$ yarn add simple-password-gen
```

## Usage

```js
import simplePasswordGen from 'simple-password-gen'

console.log(simplePasswordGen())
console.log(simplePasswordGen(16))

const newCharset = "ASDFGHJPOIUY"
const newLength = 6

console.log(simplePasswordGen(newLength, newCharset))

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3.Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    
