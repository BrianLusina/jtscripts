const expect = require('expect')
const test = require('ava')
const Queue = require('./Queue')

test('Test if Queue enqueue', t => {
  const queue = new Queue(5)
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  queue.enqueue(5)
  t.is(queue.peek(), 1)
})
