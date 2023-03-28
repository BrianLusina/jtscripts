# Queues

This is like a line at the Movie theatre, the first one at the line is the first one into the theatre. It follows the principle of **FIFO**, First In, First Out.

Queues have 2 main methods:

1. enqueue() adds an item
2. dequeue() removes and returns the item in line

They could also have utility methods

1. peek(), returns an item at the front of the queue, without removing it
2. is_empty(), returns True if the queue is empty, False otherwise.

---

## Fifo Queue

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.

Example:

```plain
Input
["FifoQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
FifoQueue fifoQueue = new MyQueue();
fifoQueue.push(1); // queue is: [1]
fifoQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
fifoQueue.peek(); // return 1
fifoQueue.pop(); // return 1, queue is [2]
fifoQueue.empty(); // return false
```

---
