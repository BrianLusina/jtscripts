var at = require('./clock_2').at;
const test = require("ava");
const expect = require("expect");

test('on the hour', t => {
  t.is(at.is(8).toString(),'08:00');
});

test('past the hour', t => {
  t.is(at.is(11, 9).toString(),'11:09');
});

test('midnight is zero hours', t => {
  t.is(at.is(24, 0).toString(),'00:00');
});

test('hour rolls over', t => {
  t.is(at.is(25, 0).toString(),'01:00');
});

test('hour rolls over continuously', t => {
  t.is(at.is(100, 0).toString(),'04:00');
});

test('sixty minutes is next hour', t => {
  t.is(at.is(1, 60).toString(),'02:00');
});

test('minutes roll over', t => {
  t.is(at.is(0, 160).toString(),'02:40');
});

test('minutes roll over continuously', t => {
  t.is(at.is(0, 1723).toString(),'04:43');
});

test('hour and minutes roll over', t => {
  t.is(at.is(25, 160).toString(),'03:40');
});

test('hour and minutes roll over continuously', t => {
  t.is(at.is(201, 3001).toString(),'11:01');
});

test('hour and minutes roll over to exactly midnight', t => {
  t.is(at.is(72, 8640).toString(),'00:00');
});

test('negative hour', t => {
  t.is(at.is(-1, 15).toString(),'23:15');
});

test('negative hour rolls over', t => {
  t.is(at.is(-25, 0).toString(),'23:00');
});

test('negative hour rolls over continuously', t => {
  t.is(at.is(-91, 0).toString(),'05:00');
});

test('negative minutes', t => {
  t.is(at.is(1, -40).toString(),'00:20');
});

test('negative minutes rolls over', t => {
  t.is(at.is(1, -160).toString(),'22:20');
});

test('negative minutes rolls over continuously', t => {
  t.is(at.is(1, -4820).toString(),'16:40');
});

test('negative hour and minutes both roll over', t => {
  t.is(at.is(-25, -160).toString(),'20:20');
});

test('negative hour and minutes both roll over continuously', t => {
  t.is(at.is(-121, -5810).toString(),'22:10');
});

test('add minutes', t => {
  t.is(at.is(10, 0).plus(3).toString(),'10:03');
});

test('add no minutes', t => {
  t.is(at.is(6, 41).plus(0).toString(),'06:41');
});

test('add to next hour', t => {
  t.is(at.is(0, 45).plus(40).toString(),'01:25');
});

test('add more than one hour', t => {
  t.is(at.is(10, 0).plus(61).toString(),'11:01');
});

test('add more than two hours with carry', t => {
  t.is(at.is(0, 45).plus(160).toString(),'03:25');
});

test('add across midnight', t => {
  t.is(at.is(23, 59).plus(2).toString(),'00:01');
});

test('add more than one day (1500 min = 25 hrs)', t => {
  t.is(at.is(5, 32).plus(1500).toString(),'06:32');
});

test('add more than two days', t => {
  t.is(at.is(1, 1).plus(3500).toString(),'11:21');
});

test('subtract minutes', t => {
  t.is(at.is(10, 3).minus(3).toString(),'10:00');
});

test('subtract to previous hour', t => {
  t.is(at.is(10, 3).minus(30).toString(),'09:33');
});

test('subtract more than an hour', t => {
  t.is(at.is(10, 3).minus(70).toString(),'08:53');
});

test('subtract across midnight', t => {
  t.is(at.is(0, 3).minus(4).toString(),'23:59');
});

test('subtract more than two hours', t => {
  t.is(at.is(0, 0).minus(160).toString(),'21:20');
});

test('subtract more than two hours with borrow', t => {
  t.is(at.is(6, 15).minus(160).toString(),'03:35');
});

test('subtract more than one day (1500 min = 25 hrs)', t => {
  t.is(at.is(5, 32).minus(1500).toString(),'04:32');
});

test('subtract more than two days', t => {
  t.is(at.is(2, 20).minus(3000).toString(),'00:20');
});

test('clocks with same time', t => {
  t.is(at.is(15, 37).equals(at.is(15, 37))).toBeTruthy();
});

test('clocks a minute apart', t => {
  t.is(at.is(15, 36).equals(at.is(15, 37))).toBeFalsy();
});

test('clocks an hour apart', t => {
  t.is(at.is(14, 37).equals(at.is(15, 37))).toBeFalsy();
});

test('clocks with hour overflow', t => {
  t.is(at.is(10, 37).equals(at.is(34, 37))).toBeTruthy();
});

test('clocks with hour overflow by several days', t => {
  t.is(at.is(3, 11).equals(at.is(99, 11))).toBeTruthy();
});

test('clocks with negative hour', t => {
  t.is(at.is(22, 40).equals(at.is(-2, 40))).toBeTruthy();
});

test('clocks with negative hour that wraps', t => {
  t.is(at.is(17, 3).equals(at.is(-31, 3))).toBeTruthy();
});

test('clocks with negative hour that wraps multiple times', t => {
  t.is(at.is(13, 49).equals(at.is(-83, 49))).toBeTruthy();
});

test('clocks with minute overflow', t => {
  t.is(at.is(0, 1).equals(at.is(0, 1441))).toBeTruthy();
});

test('clocks with minute overflow by several days', t => {
  t.is(at.is(2, 2).equals(at.is(2, 4322))).toBeTruthy();
});

test('clocks with negative minute', t => {
  t.is(at.is(2, 40).equals(at.is(3, -20))).toBeTruthy();
});

test('clocks with negative minute that wraps', t => {
  t.is(at.is(4, 10).equals(at.is(5, -1490))).toBeTruthy();
});

test('clocks with negative minute that wraps multiple times', t => {
  t.is(at.is(6, 15).equals(at.is(6, -4305))).toBeTruthy();
});

test('clocks with negative hours and minutes', t => {
  t.is(at.is(7, 32).equals(at.is(-12, -268))).toBeTruthy();
});

test('clocks with negative hours and minutes that wrap', t => {
  t.is(at.is(18, 7).equals(at.is(-54, -11513))).toBeTruthy();
});
