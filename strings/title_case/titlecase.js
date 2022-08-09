const TitleCase = function () {};

TitleCase.prototype.titleCase = function (title, minorWords) {
  var minorWords = typeof minorWords !== 'undefined' ? minorWords.toLowerCase().split(' ') : [];
  return title
    .toLowerCase()
    .split(' ')
    .map(function (v, i) {
      if (v != '' && (minorWords.indexOf(v) === -1 || i === 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    })
    .join(' ');
};

module.exports = TitleCase;
