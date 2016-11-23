const HOURS_IN_A_DAY = 24;
const MINUTES_IN_AN_HOUR = 60;
const MINUTES_IN_A_DAY = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR;
const MILLIS_IN_A_MINUTE = 60 * 1000;
const MILLIS_IN_AN_HOUR = MINUTES_IN_AN_HOUR * MILLIS_IN_A_MINUTE;
const MILLIS_IN_A_DAY = HOURS_IN_A_DAY * MILLIS_IN_AN_HOUR;


var Clock = function(hour, minutes){
    minutes = minutes || 0;
    
    this.hour = hour;
    this.minutes = minutes;


}



module.exports = Clock;