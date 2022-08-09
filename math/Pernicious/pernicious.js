const Pernicious = function () {};

Pernicious.prototype.is_pernicious = function (num) {
  const b = num.toString(10);
  const prim = [];
  for (let i = 0; i < b.length; i++) {
    if (this.isPrime(b[i])) {
      prim.push(b[i]);
    }
  }
};

Pernicious.prototype.isPrime = function (n) {
  if (n < 2) {
    return false;
  }

  const q = parseInt(Math.sqrt(n));

  for (let i = 2; i <= q; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = Pernicious;
