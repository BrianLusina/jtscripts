/**
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
*/
function dayFormatter(d1,d2){
    /*1st, 2nd, 3rd, 4th-20th, 21st,22nd,23rd,, 24th-30th, 31st*/
	var datesArr = [];
    d1 = String(parseInt(d1)), d2 = String(parseInt(d2));
    var regexSt = /(1)?|(21)?|(31)?/gi, regexNd = /(2)?|(22)?/gi, regexRd = /(3)?|(23)?/gi;
    /*Checking for day one*/
    if(d1.match(regexSt)){
        datesArr.push(d1+"st");
    }else if(d1.match(regexNd)){
		datesArr.push(d1+"nd");
    }else if(d1.match(regexRd)){
        datesArr.push(d1+"rd");
    }else if(d1.match(regexTh)){
        datesArr.push(d1+"th");
    }
    
    /*Checking for day 2*/    
    if(d2.match(regexSt)){
        datesArr.push(d2+"st");
    }else if(d2.match(regexNd)){
        datesArr.push(d2+"nd");
    }else if(d2.match(regexRd)){
        datesArr.push(d2+"rd");
    }else if(d2.match(regexTh)){
        datesArr.push(d2+"th");
    }
    return datesArr;
}

function makeFriendlyDates(arr) {
    'use strict';
    var months =["January","February","March","April","May","June","July","August","September","October","November","December"];
    var yr1 = arr[0].substr(0,4), yr2 = arr[1].substr(0,4);
    var mth1 = arr[0].substr(5,2), mth2 = arr[1].substr(5,2);
    var dy1 = arr[0].substr(-2), dy2 = arr[1].substr(-2);
    
    var days = dayFormatter(dy1,dy2); 
    
    var date1 = months[parseInt(mth1)+1] + " " + days[0];
    var date2 = months[parseInt(mth2)+1] + " " days[1];
    
    /*1. evaluating the year, 
      if the difference is 0, do not add the year to the result*/
      if ((parseInt(yr1) - parseInt(yr2)) === 0){
          //evaluating the month if year diff is 0
          if(months[parseInt(mth1)+1] === months[parseInt(mth2)+1]){
              return [date1,days[1]];
          }else{
              return [date1 + " " + yr1, date2];
          }
      /*the years are not the same, so add the month date and year to both dates*/
      }else{
         return [date1 + " " + yr1, date2 + " " + y2];
      }
}


console.log(makeFriendlyDates(['2016-07-01', '2016-07-04']));
makeFriendlyDates(["2016-12-01", "2017-02-03"]);// should return ["December 1st","February 3rd"].
makeFriendlyDates(["2016-12-01", "2018-02-03"]);// should return ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]);// should return ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]);// should return ["January 13th, 2018"].
makeFriendlyDates(["2022-09-05", "2023-09-04"]);// should return ["September 5th, 2022","September 4th"].
makeFriendlyDates(["2022-09-05", "2023-09-05"]);// should return ["September 5th, 2022","September 5th, 2023"]