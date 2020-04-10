var test = require("ava");
var expect = require("expect");
var TimeDegrees = require('./time-degrees');

//TODO: unskip tests

test('1 minute passed 1 am', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('01:01'),'30:6');
});

test('12 midnight', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('00:00'),'360:360');
});

test('3 minutes passed 1am', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('01:03'),'30:18');
});

test('30 minutes passed 1am', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('01:30'),'30:180');
});

test('5 minutes passed 12noon', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('12:05'),'360:30');
});

test('invalid time 1', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('26:78'),'Check your time !');
});

test('invalid time 2', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('26:60'),'Check your time !');
});

test('invalid time 3', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('24:60'),'Check your time !');
});

test('25 minutes passed 4 pm', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('16:25'),'120:150');
});

test('9 minutes passed 5 pm', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('16:25'),'150:54');
});

test('7pm', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('19:00'),'210:360');
});

test('34 minutes passed 8pm', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('20:34'),'240:204');
});

test('20 minutes passed 11pm', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('23:20'),'330:120');
});

test('Invalid time', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('24:00'),'Check your time !');
});

test('Invalid time, negative time', t => {
  var timeDegree = new TimeDegrees();
  t.is(timeDegree.clockDegree('-9:00'),'Check your time !');
});
