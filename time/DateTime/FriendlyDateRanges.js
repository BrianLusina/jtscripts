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
function dayFormatter(d1, d2) {
  /* 1st, 2nd, 3rd, 4th-20th, 21st,22nd,23rd,, 24th-30th, 31st */
  const datesArr = [];
  d1 = String(parseInt(d1));
  d2 = String(parseInt(d2));
  const regexSt = /(^1$)|(^21$)|(^31$)/gi;
  const regexNd = /(^2$)|(^22$)/gi;
  const regexRd = /(^3$)|(^23$)/gi;
  /* Checking for day one */
  if (d1.match(regexSt)) {
    datesArr.push(d1 + 'st');
  } else if (d1.match(regexNd)) {
    datesArr.push(d1 + 'nd');
  } else if (d1.match(regexRd)) {
    datesArr.push(d1 + 'rd');
  } else {
    datesArr.push(d1 + 'th');
  }

  /* Checking for day 2 */
  if (d2.match(regexSt)) {
    datesArr.push(d2 + 'st');
  } else if (d2.match(regexNd)) {
    datesArr.push(d2 + 'nd');
  } else if (d2.match(regexRd)) {
    datesArr.push(d2 + 'rd');
  } else {
    datesArr.push(d2 + 'th');
  }
  return datesArr;
}

function makeFriendlyDates(arr) {
  'use strict';
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const yr1 = parseInt(arr[0].substr(0, 4));
  const yr2 = parseInt(arr[1].substr(0, 4));
  const mth1 = parseInt(arr[0].substr(5, 2));
  const mth2 = parseInt(arr[1].substr(5, 2));
  const dy1 = arr[0].substr(-2);
  const dy2 = arr[1].substr(-2);

  const days = dayFormatter(dy1, dy2);

  const date1 = months[mth1 - 1] + ' ' + days[0];
  const date2 = months[mth2 - 1] + ' ' + days[1];

  /* Dates are the same */
  if (arr[0] === arr[1]) {
    return [date1 + ' ' + yr1];
  } else if (yr1 - yr2 === 0) {
    /* 1. evaluating the year, if the difference btwn yr1 and yr2,mth1 and mth2 is 0, do not add the year to the result */
    if (months[mth1 - 1] === months[mth2 - 1]) {
      return [date1, days[1]];
    } else {
      return [date1 + ', ' + yr1, date2];
    }
  } else if (yr2 - yr1 === 1) {
    /* the years are not the same,but the diff is 1, meaning the diff is within a year */
    if (months[mth1 - 1] !== months[mth2 - 1]) {
      return [date1, date2];
    } else if (months[mth1 - 1] === months[mth2 - 1] && days[0] === days[1]) {
      /* the diff btwn the years is 1, but the months are the same, thus 1 whole year apart */
      return [date1 + ', ' + yr1, date2 + ', ' + yr2];
    } else {
      return [date1 + ', ' + yr1, date2];
    }
  } else {
    return [date1 + ', ' + yr1, date2 + ', ' + yr2];
  }
}
// document.write(makeFriendlyDates(['2016-07-01', '2016-07-04']));// ["July 1st","4th"]
// document.write('<br>');
// document.write(makeFriendlyDates(['2016-12-01', '2017-02-03']));// ["December 1st","February 3rd"].
// document.write('<br>');
// document.write(makeFriendlyDates(['2016-12-01', '2018-02-03']));// ["December 1st, 2016","February 3rd, 2018"].
// document.write('<br>');
// document.write(makeFriendlyDates(['2017-03-01', '2017-05-05']));// ["March 1st, 2017","May 5th"]
// document.write('<br>');
// document.write(makeFriendlyDates(['2018-01-13', '2018-01-13']));// ["January 13th, 2018"].
// document.write('<br>');
// document.write(makeFriendlyDates(['2022-09-05', '2023-09-04']));// ["September 5th, 2022","September 4th"].
// document.write('<br>');
// document.write(makeFriendlyDates(['2022-09-05', '2023-09-05']));// ["September 5th, 2022","September 5th, 2023"]
// document.write('<br>');
