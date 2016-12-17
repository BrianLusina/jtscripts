var MaxMin = function(){};

MaxMin.prototype.getMaxMin = function(arr){
  return [Math.min.apply(null,arr),Math.max.apply(null,arr)];
};

module.export = MaxMin