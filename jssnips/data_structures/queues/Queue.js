var Exception = require('../../jssnips/exceptions/Exceptions');
/**
 * Queue Data structure implementation in JavaScript.
 * Methods:
    enqueue adds an item to the queue
    dequeue removes an item from the front of the queue
    size returns the size of the queue
    peek returns the element at the front of the queue, without removing it
    is_full checks if the queue is full
    is_empty checks if the queue is empty
 */
class Queue {

	constructor(size) {
        // super(size);
		this.queue = [];
		this.size = size;
	}

    /** Adds an item to the front of the queue
     * Checks if the item is full before adding an item to the queue
    */
	enqueue(item) {
		if (!this.is_full) {
			this.queue.push(item);
		} else {
			throw new Exception('QueueFull', 'Queue if currently full.');
		}
	}

    /** Removes an item from the front of the queue and returns it
     * Checks if the queue has any item before returning the first item in the queue
    */
	dequeue() {
		if (!this.is_empty) {
			return this.queue.shift();
		} else {
			throw new Exception('QueueEmpty', 'Queue is currently empty.');
		}
	}

    // Gets the size of the queue
	size() {
		return this.queue.length;
	}

    /** Gets the item at the front of the queue without removing it
     * Will first check if there are items in the queue before peeking
    */
	peek() {
		if (this.is_empty) {
			throw new Exception('QueueEmpty', 'Queue is currently empty');
		} else {
			return this.queue[0];
		}
	}

    //* *Checks if the queue is full */
	is_full() {
		return this.queue.length == this.size;
	}

    /** checks if a the queue is empty */
	is_empty() {
		return this.queue.length == 0;
	}
}

module.exports = Queue;
