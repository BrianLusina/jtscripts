const HashTag = function () {}

HashTag.prototype.generateHashtag = function (str) {
  let out = ''
  if (str === '') {
    return false
  } else {
    const words = str.split(' ')
    for (let x = 0; x < words.length; x++) {
    	out += words[x].charAt(0).toUpperCase() + words[x].substring(1)
    }
  }
  return (out.length > 140) ? false : '#' + out
}

module.exports = HashTag
