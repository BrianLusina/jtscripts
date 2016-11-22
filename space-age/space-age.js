const SPACE_AGES = {
     earthYear: 31557600
};

var SpaceAge = function(ageInSec) {
    this.ageInSec = ageInSec;
    this.seconds = ageInSec;
};

SpaceAge.prototype.onEarth = function(){

}

module.exports = SpaceAge;