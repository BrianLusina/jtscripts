var at = require('./clock_2').at;
const test = require("ava");
const expect = require("expect");

test('on the hour', t => {
  expect(at(8).toString()).toEqual('08:00');
});

test('past the hour', t => {
  expect(at(11, 9).toString()).toEqual('11:09');
});

test('midnight is zero hours', t => {
  expect(at(24, 0).toString()).toEqual('00:00');
});

test('hour rolls over', t => {
  expect(at(25, 0).toString()).toEqual('01:00');
});

test('hour rolls over continuously', t => {
  expect(at(100, 0).toString()).toEqual('04:00');
});

test('sixty minutes is next hour', t => {
  expect(at(1, 60).toString()).toEqual('02:00');
});

test('minutes roll over', t => {
  expect(at(0, 160).toString()).toEqual('02:40');
});

test('minutes roll over continuously', t => {
  expect(at(0, 1723).toString()).toEqual('04:43');
});

test('hour and minutes roll over', t => {
  expect(at(25, 160).toString()).toEqual('03:40');
});

test('hour and minutes roll over continuously', t => {
  expect(at(201, 3001).toString()).toEqual('11:01');
});

test('hour and minutes roll over to exactly midnight', t => {
  expect(at(72, 8640).toString()).toEqual('00:00');
});

test('negative hour', t => {
  expect(at(-1, 15).toString()).toEqual('23:15');
});

test('negative hour rolls over', t => {
  expect(at(-25, 0).toString()).toEqual('23:00');
});

test('negative hour rolls over continuously', t => {
  expect(at(-91, 0).toString()).toEqual('05:00');
});

test('negative minutes', t => {
  expect(at(1, -40).toString()).toEqual('00:20');
});

test('negative minutes rolls over', t => {
  expect(at(1, -160).toString()).toEqual('22:20');
});

test('negative minutes rolls over continuously', t => {
  expect(at(1, -4820).toString()).toEqual('16:40');
});

test('negative hour and minutes both roll over', t => {
  expect(at(-25, -160).toString()).toEqual('20:20');
});

test('negative hour and minutes both roll over continuously', t => {
  expect(at(-121, -5810).toString()).toEqual('22:10');
});

test('add minutes', t => {
  expect(at(10, 0).plus(3).toString()).toEqual('10:03');
});

test('add no minutes', t => {
  expect(at(6, 41).plus(0).toString()).toEqual('06:41');
});

test('add to next hour', t => {
  expect(at(0, 45).plus(40).toString()).toEqual('01:25');
});

test('add more than one hour', t => {
  expect(at(10, 0).plus(61).toString()).toEqual('11:01');
});

test('add more than two hours with carry', t => {
  expect(at(0, 45).plus(160).toString()).toEqual('03:25');
});

test('add across midnight', t => {
  expect(at(23, 59).plus(2).toString()).toEqual('00:01');
});

test('add more than one day (1500 min = 25 hrs)', t => {
  expect(at(5, 32).plus(1500).toString()).toEqual('06:32');
});

test('add more than two days', t => {
  expect(at(1, 1).plus(3500).toString()).toEqual('11:21');
});

test('subtract minutes', t => {
  expect(at(10, 3).minus(3).toString()).toEqual('10:00');
});

test('subtract to previous hour', t => {
  expect(at(10, 3).minus(30).toString()).toEqual('09:33');
});

test('subtract more than an hour', t => {
  expect(at(10, 3).minus(70).toString()).toEqual('08:53');
});

test('subtract across midnight', t => {
  expect(at(0, 3).minus(4).toString()).toEqual('23:59');
});

test('subtract more than two hours', t => {
  expect(at(0, 0).minus(160).toString()).toEqual('21:20');
});

test('subtract more than two hours with borrow', t => {
  expect(at(6, 15).minus(160).toString()).toEqual('03:35');
});

test('subtract more than one day (1500 min = 25 hrs)', t => {
  expect(at(5, 32).minus(1500).toString()).toEqual('04:32');
});

test('subtract more than two days', t => {
  expect(at(2, 20).minus(3000).toString()).toEqual('00:20');
});

test('clocks with same time', t => {
  expect(at(15, 37).equals(at(15, 37))).toBeTruthy();
});

test('clocks a minute apart', t => {
  expect(at(15, 36).equals(at(15, 37))).toBeFalsy();
});

test('clocks an hour apart', t => {
  expect(at(14, 37).equals(at(15, 37))).toBeFalsy();
});

test('clocks with hour overflow', t => {
  expect(at(10, 37).equals(at(34, 37))).toBeTruthy();
});

test('clocks with hour overflow by several days', t => {
  expect(at(3, 11).equals(at(99, 11))).toBeTruthy();
});

test('clocks with negative hour', t => {
  expect(at(22, 40).equals(at(-2, 40))).toBeTruthy();
});

test('clocks with negative hour that wraps', t => {
  expect(at(17, 3).equals(at(-31, 3))).toBeTruthy();
});

test('clocks with negative hour that wraps multiple times', t => {
  expect(at(13, 49).equals(at(-83, 49))).toBeTruthy();
});

test('clocks with minute overflow', t => {
  expect(at(0, 1).equals(at(0, 1441))).toBeTruthy();
});

test('clocks with minute overflow by several days', t => {
  expect(at(2, 2).equals(at(2, 4322))).toBeTruthy();
});

test('clocks with negative minute', t => {
  expect(at(2, 40).equals(at(3, -20))).toBeTruthy();
});

test('clocks with negative minute that wraps', t => {
  expect(at(4, 10).equals(at(5, -1490))).toBeTruthy();
});

test('clocks with negative minute that wraps multiple times', t => {
  expect(at(6, 15).equals(at(6, -4305))).toBeTruthy();
});

test('clocks with negative hours and minutes', t => {
  expect(at(7, 32).equals(at(-12, -268))).toBeTruthy();
});

test('clocks with negative hours and minutes that wrap', t => {
  expect(at(18, 7).equals(at(-54, -11513))).toBeTruthy();
});
