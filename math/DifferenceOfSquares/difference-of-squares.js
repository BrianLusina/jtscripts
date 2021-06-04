class Squares {
  constructor (number) {
    this.number = number
    this.squareOfSums = this.getSquareOfSum()
    this.sumOfSquares = this.getSumOfSquares()
    this.difference = this.getDifference()
  }

  /**
     * Gets the square of sum of the first N natural numbers
     * @returns{Number}
     */
  getSquareOfSum () {
    let total = 0
    for (let x = 1; x <= this.number; x++) {
      total += x
    }
    return Math.pow(total, 2)
  }

  /**
     * Returns the sum of squares of the first N natural numbers
     * @returns {Number}
     */
  getSumOfSquares () {
    let sum = 0
    for (let x = 1; x <= this.number; x++) {
      sum += Math.pow(x, 2)
    }

    return sum
  }

  /**
     * gets the difference between the sum of squares and square of sums of
     * the first N natural numbers
     * @returns {Number}
     */
  getDifference () {
    return this.squareOfSums - this.sumOfSquares
  }
}

module.exports = Squares
