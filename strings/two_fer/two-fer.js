class TwoFer {
  constructor() {}

  twoFer(name = '') {
    return `One for ${name === '' ? 'you' : name}, one for me.`;
  }
}

module.exports = TwoFer;
