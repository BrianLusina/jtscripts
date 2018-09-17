var test = require("ava");
var expect = require("expect");
var TimeDegrees = require('./time-degrees');

//TODO: unskip tests

test('1 minute passed 1 am', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('01:01')).toEqual('30:6');
});

test('12 midnight', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('00:00')).toEqual('360:360');
});

test('3 minutes passed 1am', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('01:03')).toEqual('30:18');
});

test('30 minutes passed 1am', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('01:30')).toEqual('30:180');
});

test('5 minutes passed 12noon', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('12:05')).toEqual('360:30');
});

test('invalid time', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('26:78')).toEqual('Check your time !');
});

test('invalid time', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('26:60')).toEqual('Check your time !');
});

test('invalid time', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('24:60')).toEqual('Check your time !');
});

test('25 minutes passed 4 pm', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('16:25')).toEqual('120:150');
});

test('9 minutes passed 5 pm', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('16:25')).toEqual('150:54');
});

test('7pm', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('19:00')).toEqual('210:360');
});

test('34 minutes passed 8pm', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('20:34')).toEqual('240:204');
});

test('20 minutes passed 11pm', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('23:20')).toEqual('330:120');
});

test('Invalid time', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('24:00')).toEqual('Check your time !');
});

test('Invalid time, negative time', t => {
  var timeDegree = new TimeDegrees();
  expect(timeDegree.clockDegree('-9:00')).toEqual('Check your time !');
});
