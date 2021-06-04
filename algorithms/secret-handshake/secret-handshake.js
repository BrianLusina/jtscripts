class SecretHandshake {
  // perform a sanity check and throw an error early
  constructor (num) {
    if (typeof num !== 'number') {
      throw new Error('Handshake must be a number')
    } else {
      this.num = num
    }
    this.allCommands = ['wink', 'double blink', 'close your eyes', 'jump', 'REVERSE']
  }

  /**
     * Create a list of commands from the provided number
     * @returns {Array} String array with the secret handshake
     */
  commands () {
    const resultCommands = []

    for (let x = 0; x < this.allCommands.length; x++) {
      const currentCommand = this.allCommands[x]

      const hasCommand = (this.num & Math.pow(2, x))

      if (hasCommand) {
        if (currentCommand == 'REVERSE') {
          resultCommands.reverse()
        } else {
          resultCommands.push(this.allCommands[x])
        }
      }
    }

    return resultCommands
  }
}

module.exports = SecretHandshake
