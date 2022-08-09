const Triangle = function (s1, s2, s3) {
  this.s1 = s1;
  this.s2 = s2;
  this.s3 = s3;
};

Triangle.prototype.kind = function () {
  if (this.isIllegal()) {
    throw new TypeError('Illegal');
  }
  if (this.s1 === this.s2 && this.s2 === this.s3) {
    return 'equilateral';
  }
  if (this.s1 === this.s2 || this.s2 === this.s3 || this.s3 === this.s1) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

Triangle.prototype.isIllegal = function () {
  return this.violatesInequality() || this.hasImpossibleSides();
};

Triangle.prototype.violatesInequality = function () {
  return this.s1 + this.s2 < this.s3 || this.s1 + this.s3 < this.s2 || this.s2 + this.s3 < this.s1;
};

Triangle.prototype.hasImpossibleSides = function () {
  return this.s1 <= 0 || this.s2 <= 0 || this.s3 <= 0;
};

module.exports = Triangle;
