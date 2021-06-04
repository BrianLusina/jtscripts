const NameNumber = function () {}

NameNumber.prototype.nameThatNumber = function (num) {
  const NAMES = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' }

  const NAMESTWO = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  if (NAMES.hasOwnProperty(num)) {
    return NAMES[num]
  } else {
    tens = Math.floor(num / 10)
    ones = num % 10
    return `${NAMESTWO[tens - 2]} ${(ones != 0) ? NAMES[ones] : ''}`.trim()
  }
}
module.exports = NameNumber
