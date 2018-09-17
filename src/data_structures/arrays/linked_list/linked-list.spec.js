var test = require("ava");
var expect = require("expect");
var LinkedList = require('./linked-list');

test('push/pop', t => {
  var list = new LinkedList();
  list.push(10);
  list.push(20);
  expect(list.pop()).toBe(20);
  expect(list.pop()).toBe(10);
});

test('push/shift', t => {
  var list = new LinkedList();
  list.push(10);
  list.push(20);
  expect(list.shift()).toBe(10);
  expect(list.shift()).toBe(20);
});

test('unshift/shift', t => {
  var list = new LinkedList();
  list.unshift(10);
  list.unshift(20);
  expect(list.shift()).toBe(20);
  expect(list.shift()).toBe(10);
});
test('unshift/pop', t => {
  var list = new LinkedList();
  list.unshift(10);
  list.unshift(20);
  expect(list.pop()).toBe(10);
  expect(list.pop()).toBe(20);
});

test('example', t => {
  var list = new LinkedList();
  list.push(10);
  list.push(20);
  expect(list.pop()).toBe(20);
  list.push(30);
  expect(list.shift()).toBe(10);
  list.unshift(40);
  list.push(50);
  expect(list.shift()).toBe(40);
  expect(list.pop()).toBe(50);
  expect(list.shift()).toBe(30);
});
test('can count its elements', t => {
  var list = new LinkedList();
  expect(list.count()).toBe(0);
  list.push(10);
  expect(list.count()).toBe(1);
  list.push(20);
  expect(list.count()).toBe(2);
});
test('deletes the last element from the list', t => {
  var list = new LinkedList();
  list.push(10);
  list.push(20);
  list.push(30);
  list.delete(20);
  expect(list.count()).toBe(2);
  expect(list.pop()).toBe(30);
  expect(list.shift()).toBe(10);
});
test('deletes the only element', t => {
  var list = new LinkedList();
  list.push(10);
  list.delete(10);

  expect(list.count()).toBe(0);
});
