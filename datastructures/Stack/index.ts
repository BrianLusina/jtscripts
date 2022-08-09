// tslint:disable: no-any
/**
 * Stack class to create Stack objects for browserHistory
 * underscore denotes that these variables are private and should not be manipulated externally
 * top method returns the current position
 * push method updates the browserHistory increasing the position variable which will be the key
 * pop removes the current object and goes to the next previous one */
class Stack {
  // tslint:disable-next-line: no-any
  stack: any[];
  private storage: Record<number, any>;
  private position: number;
  private size: number;

  constructor(maxsize = 0) {
    this.stack = [];
    this.size = maxsize;
    this.storage = {};
    this.position = -1; // 0 indexed when we add items
  }

  push(item: any) {
    this.stack.push(item);
    this.position++;
    if (this.size) {
      this.size++;
    }
    this.storage[this.position] = item;
  }

  pop(): any {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    } else {
      if (this.position > -1) {
        delete this.storage[this.position];
        this.position--;
      }
      if (this.size) {
        this.size--;
      }
      return this.stack.pop();
    }
  }

  /**
   * Returns the top item in the stack without removing it
   **/
  peek(): any {
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

export default Stack;
