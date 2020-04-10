var expect = require("expect");
var test = require("ava");
var circularBuffer = require('./circular-buffer').circularBuffer;
var bufferEmptyException = require('./circular-buffer').bufferEmptyException;
var bufferFullException = require('./circular-buffer').bufferFullException;

test('reading an empty buffer throws a BufferEmptyException', t => {
  var buffer = circularBuffer(1);
  t.is(buffer.read).toThrow(bufferEmptyException());
});

test('write and read back one item', t => {
  var buffer = circularBuffer(1);
  buffer.write('1');
  t.is(buffer.read()).toBe('1');
  t.is(buffer.read).toThrow(bufferEmptyException());
});

test('write and read back multiple items', t => {
  var buffer = circularBuffer(2);
  buffer.write('1');
  buffer.write('2');
  t.is(buffer.read()).toBe('1');
  t.is(buffer.read()).toBe('2');
  t.is(buffer.read).toThrow(bufferEmptyException());
});

test('clearing a buffer', t => {
  var buffer = circularBuffer(2);
  buffer.write('1');
  buffer.write('2');
  buffer.clear();
  t.is(buffer.read).toThrowError;
  buffer.write('3');
  buffer.write('4');
  t.is(buffer.read()).toBe('3');
  t.is(buffer.read()).toBe('4');
});

test('alternate write and read', t => {
  var buffer = circularBuffer(2);
  buffer.write('1');
  t.is(buffer.read()).toBe('1');
  buffer.write('2');
  t.is(buffer.read()).toBe('2');
});

test('reads back oldest item', t => {
  var buffer = circularBuffer(3);
  buffer.write('1');
  buffer.write('2');
  buffer.read();
  buffer.write('3');
  t.is(buffer.read()).toBe('2');
  t.is(buffer.read()).toBe('3');
});

test('writes of undefined or null don\'t occupy buffer', t => {
  var buffer = circularBuffer(3);
  buffer.write(null);
  buffer.write(undefined);
  [1, 2, 3].map(function (i) {
    buffer.write(i.toString());
  });
  t.is(buffer.read()).toBe('1');
});

test('writing to a full buffer throws a BufferFullException', t => {
  var buffer = circularBuffer(2);
  buffer.write('1');
  buffer.write('2');
  t.is(t => {
    buffer.write('A');
  }).toThrow(bufferFullException());
});

test('forced writes over write oldest item in a full buffer', t => {
  var buffer = circularBuffer(2);
  buffer.write('1');
  buffer.write('2');
  buffer.forceWrite('A');
  t.is(buffer.read()).toBe('2');
  t.is(buffer.read()).toBe('A');
  t.is(buffer.read).toThrow(bufferEmptyException());
});

test('forced writes act like write in a non-full buffer', t => {
  var buffer = circularBuffer(2);
  buffer.write('1');
  buffer.forceWrite('2');
  t.is(buffer.read()).toBe('1');
  t.is(buffer.read()).toBe('2');
  t.is(buffer.read).toThrow(bufferEmptyException());
});

test('alternate force write and read into full buffer', t => {
  var buffer = circularBuffer(5);
  [1, 2, 3].map(function (i) {
    buffer.write(i.toString());
  });
  buffer.read();
  buffer.read();
  buffer.write('4');
  buffer.read();
  [5, 6, 7, 8].map(function (i) {
    buffer.write(i.toString());
  });
  buffer.forceWrite('A');
  buffer.forceWrite('B');
  t.is(buffer.read()).toBe('6');
  t.is(buffer.read()).toBe('7');
  t.is(buffer.read()).toBe('8');
  t.is(buffer.read()).toBe('A');
  t.is(buffer.read()).toBe('B');
  t.is(buffer.read).toThrow(bufferEmptyException());
});
