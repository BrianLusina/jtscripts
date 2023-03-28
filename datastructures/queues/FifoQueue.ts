/**
 * Generic First In First Out Queue with push, pop, peek, empty operations.
 * Big O Complexity:
 * Space Complexity is O(n) where n is the number of items the queue can hold
 * Time complexity will depend on the operation. However, O(1) operation as the underlying storage is an array
 */
export default class FifoQueue<T> {
  private stack: T[];
  private size?: number;

  /**
   * Creates a new FifoQueue
   * @param {number} size optional size of the Queue. If defined, the Queue is limited to this size
   */
  constructor(size?: number) {
    this.size = size;
    this.stack = new Array(size);
  }

  /**
   * Adds an item/element to the back of the queue
   * Time is O(1) operation as items are immediately added to the underlying stack
   * @param {T} x item to add to queue
   * @throws {Error} if queue is full.
   */
  push(x: T): void {
    if (this.isFull()) {
      throw new Error(`Queue is at capacity`);
    }
    this.stack.push(x);
  }

  /**
   * Returns the first item in the Queue.
   * Time Complexity is O(1) operation as this is done in constant time
   * @returns {T} where T could also be undefined
   */
  pop(): T | undefined {
    return this.stack.shift();
  }

  /**
   * Returns the first item in the queue without removing it
   * @returns {T} first item in the queue
   * @throws {Error} if queue is empty
   */
  peek(): T {
    if (this.empty()) {
      throw new Error('Queue is empty');
    }
    return this.stack[0];
  }

  /**
   * Checks if the queue is empty
   * @returns {boolean} returns true if the queue is empty false otherwise
   */
  empty(): boolean {
    return this.stack.length === 0;
  }

  /**
   * Returns true if the queue is full, else returns false;
   * @returns {boolean} true if the queue is full, false otherwise
   */
  isFull(): boolean {
    if (this.size) {
      return this.stack.length === this.size;
    }
    return false;
  }

  /**
   * Current capacity of the queue
   * @returns {number} Current capacity of the queue
   */
  get capacity(): number {
    return this.stack.length;
  }
}
