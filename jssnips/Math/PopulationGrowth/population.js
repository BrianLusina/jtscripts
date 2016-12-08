var PopulationGrowth = function(){};

PopulationGrowth.prototype.nbYear = function(p0, percent, aug, p){
  var n = 0;
  while(p0 < p){
    p0 += p0 * (percent/100) + aug;
    n++;
  }
  return n;
};

module.exports = PopulationGrowth
