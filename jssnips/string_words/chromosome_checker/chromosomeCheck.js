var ChromosomeCheck = function(chromosome){
  this.chromosome = chromosome;
}

ChromosomeCheck.prototype.chromosomeCheck = function(sperm) {
  return (sperm === "XX") ? "Congratulations! You're going to have a daughter.": "Congratulations! You're going to have a son."
}

module.exports = ChromosomeCheck
