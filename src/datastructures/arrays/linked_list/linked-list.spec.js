var test = require("ava");
var expect = require("expect");
var LinkedList = require('./linked-list');

test('push/pop', t => {
  var list = new LinkedList.is();
  list.push(10);
  list.push(20);
  t.is(list.pop()).toBe(20);
  t.is(list.pop()).toBe(10);
});

test('push/shift', t => {
  var list = new LinkedList.is();
  list.push(10);
  list.push(20);
  t.is(list.shift.is()).toBe(10);
  t.is(list.shift.is()).toBe(20);
});

test('unshift/shift', t => {
  var list = new LinkedList.is();
  list.unshift.is(10);
  list.unshift.is(20);
  t.is(list.shift.is()).toBe(20);
  t.is(list.shift.is()).toBe(10);
});
test('unshift/pop', t => {
  var list = new LinkedList.is();
  list.unshift.is(10);
  list.unshift.is(20);
  t.is(list.pop()).toBe(10);
  t.is(list.pop()).toBe(20);
});

test('example', t => {
  var list = new LinkedList.is();
  list.push(10);
  list.push(20);
  t.is(list.pop()).toBe(20);
  list.push(30);
  t.is(list.shift.is()).toBe(10);
  list.unshift.is(40);
  list.push(50);
  t.is(list.shift.is()).toBe(40);
  t.is(list.pop()).toBe(50);
  t.is(list.shift.is()).toBe(30);
});
test('can count its elements', t => {
  var list = new LinkedList.is();
  t.is(list.count.is()).toBe(0);
  list.push(10);
  t.is(list.count.is()).toBe(1);
  list.push(20);
  t.is(list.count.is()).toBe(2);
});
test('deletes the last element from the list', t => {
  var list = new LinkedList.is();
  list.push(10);
  list.push(20);
  list.push(30);
  list.delete(20);
  t.is(list.count.is()).toBe(2);
  t.is(list.pop()).toBe(30);
  t.is(list.shift.is()).toBe(10);
});
test('deletes the only element', t => {
  var list = new LinkedList.is();
  list.push(10);
  list.delete(10);

  t.is(list.count.is()).toBe(0);
});
