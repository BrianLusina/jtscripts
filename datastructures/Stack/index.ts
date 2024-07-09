// tslint:disable: no-any
/**
 * Stack abstract data structure */
export default class Stack<T> {
  // tslint:disable-next-line: no-any
  private stack: T[];
  private storage: Record<number, T>;
  private position: number;
  private size: number;

  constructor(maxsize = 0) {
    this.stack = [];
    this.size = maxsize;
    this.storage = {};
    this.position = -1; // 0 indexed when we add items
  }

  push(item: T) {
    this.stack.push(item);
    this.position += 1;
    if (this.size) {
      this.size += 1;
    }
    this.storage[this.position] = item;
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    } else {
      if (this.position > -1) {
        delete this.storage[this.position];
        this.position -= 1;
      }
      if (this.size) {
        this.size -= 1;
      }
      const value = this.stack.pop();
      if (!value) {
        throw new Error('Stack is empty');
      }
      return value;
    }
  }

  /**
   * Returns the top item in the stack without removing it
   **/
  peek(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.stack[this.stack.length - 1];
  }

  isFull(): boolean {
    return this.stack.length === this.size;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
