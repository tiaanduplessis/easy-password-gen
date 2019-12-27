
interface Options {
  /**default: `256` */
  size: number
  /**default: `12` */
  length: number
  /**default: `false` */
  lowercase: boolean
  /**default: `false` */
  uppercase: boolean
  /**default: `true` */
  numbers: boolean
  /**default: `true` */
  symbols: boolean
}

declare function generatePassword(opts?: Partial<Options>): string

export = generatePassword
