var expect = require("expect");
var test = require("ava");
var Queue = require('./Queue');

test('Test if Queue enqueue', t => {
  var queue = new Queue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  expect(queue.peek()).toEqual(1);
});
