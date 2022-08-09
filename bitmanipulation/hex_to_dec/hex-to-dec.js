const HexToDec = function () {};

HexToDec.prototype.hexToDec = function (hexString) {
  return parseInt(hexString, 16);
};

module.exports = HexToDec;
