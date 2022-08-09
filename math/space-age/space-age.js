const SPACE_AGES = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const SpaceAge = function (seconds) {
  this.seconds = seconds;
  this.earthYears = seconds / 31557600;
};

SpaceAge.prototype.yearsOnPlanet = function (planet) {
  const years = this.earthYears / SPACE_AGES[planet];
  return parseFloat(years.toFixed(2));
};

SpaceAge.prototype.onEarth = function () {
  return this.yearsOnPlanet('earth');
};

SpaceAge.prototype.onMercury = function () {
  return this.yearsOnPlanet('mercury');
};

SpaceAge.prototype.onVenus = function () {
  return this.yearsOnPlanet('venus');
};

SpaceAge.prototype.onMars = function () {
  return this.yearsOnPlanet('mars');
};

SpaceAge.prototype.onJupiter = function () {
  return this.yearsOnPlanet('jupiter');
};

SpaceAge.prototype.onSaturn = function () {
  return this.yearsOnPlanet('saturn');
};

SpaceAge.prototype.onUranus = function () {
  return this.yearsOnPlanet('uranus');
};

SpaceAge.prototype.onNeptune = function () {
  return this.yearsOnPlanet('neptune');
};

module.exports = SpaceAge;
