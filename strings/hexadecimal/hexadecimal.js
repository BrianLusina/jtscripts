class Hexadecimal {
  constructor (hexa) {
    this.hexa = hexa
  }

  /**
     * Converts a hexadecimal number to decimal
     * @returns {Number}
     */
  toDecimal () {
    const regex = new RegExp(/[^0-9a-fA-F]/)

    for (let x = 0; x < this.hexa.length; x++) {
      if (regex.exec(this.hexa[x])) {
        return 0
      }
    }
    return parseInt(this.hexa, 16)
  }
}

module.exports = Hexadecimal
