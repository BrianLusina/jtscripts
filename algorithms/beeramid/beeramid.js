// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    let beers = Math.floor(bonus / price)
    let levels = 0
    
    while(Math.pow((levels + 1), 2) <= beers) {
      levels += 1
      beers -= Math.pow(levels, 2)
    }
    
    return levels;
  }