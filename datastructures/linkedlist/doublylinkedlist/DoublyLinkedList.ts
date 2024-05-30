/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LinkedList from '../LinkedList';
import DoubleNode from './DoubleNode';

export default class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoubleNode<T> | null | undefined;
  protected tail: DoubleNode<T> | null | undefined;
  private size: number;

  constructor(headNode: DoubleNode<T> | null = null) {
    super();
    this.size = 0;
    this.head = headNode;
    this.tail = headNode;
  }

  append(data: T): void {
    const newNode = new DoubleNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current?.next) {
        current = current.next;
      }
      if (current) {
        current.next = newNode;
        newNode.previous = current;
        this.tail = newNode;
      }
    }
  }

  prepend(data: T): void {
    const newNode = new DoubleNode(data);

    if (this.head) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  moveToHead(_data: T): void {
    throw new Error('Method not implemented.');
  }

  deleteNode(data: DoubleNode<T>): void {
    let currentNode = this.head;

    if (data) {
      while (currentNode) {
        // we have found our node
        if (currentNode.data === data) {
          // if it has a previous node(not the head) and a next node(not the tail). we move pointers around this
          // node, i.e. it's next is assigned to it's previous' next and its previous' next is assigned to its next
          if (currentNode.previous && currentNode.next) {
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
          } else if (currentNode.previous && !currentNode.next) {
            // in this instance we are dealing with the tail node, it has no next
            currentNode.previous.next = currentNode.next;
            this.tail = currentNode.previous;
          } else if (!currentNode.previous && currentNode.next) {
            // otherwise we have no previous node, but we have a next node. K, Dhis is the head node.
            // we make the head node's next the new head and the head node's next previous now points to null
            this.head = currentNode.next;
            currentNode.next.previous = null;
          }
        }
        // move the pointer down the linked list
        currentNode = currentNode.next;
      }
    }
    return;
  }

  deleteNodeByKey(_data: T): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }

  deleteNodeAtPosition(_position: number): DoubleNode<T> | null | undefined {
    throw new Error('Method not implemented.');
  }

  pairwiseSwap(): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }

  swapNodesAtKthAndKPlusOne(_k: number): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }

  alternateSplit(): [DoubleNode<T>, DoubleNode<T>] {
    throw new Error('Method not implemented.');
  }

  isPalindrome(): boolean {
    throw new Error('Method not implemented.');
  }

  reverse(): void {
    if (this.head && this.head.next === null) {
      return;
    }

    let current = this.head;
    let previous: DoubleNode<T> | null | undefined = null;
    let next: DoubleNode<T> | null | undefined = null;

    while (current != undefined) {
      // copy a pointer to the next element, before we overwrite the current
      // eslint-disable-next-line prefer-destructuring
      next = current.next;

      // reverse the next pointer & previous pointer
      current.next = previous;
      current.previous = next;

      // step forward in the list
      previous = current;
      // @ts-ignore
      current = next;
    }

    this.head = previous;
  }

  length(): number {
    let count = 0;
    if (!this.head) {
      return count;
    }

    let current: DoubleNode<T> | null | undefined = this.head;
    while (current) {
      current = current.next;
      count += 1;
    }
    return count;
  }

  swapNodes(_keyOne: T, _keyTwo: T): void {
    return;
  }

  kthToLastNode(_e: number): DoubleNode<T> | null {
    return null;
  }

  countOccurrences(data: T): number {
    if (!this.head) {
      return 0;
    }

    let occurrences = 0;
    let current: DoubleNode<T> | null | undefined = this.head;

    while (current) {
      if (current.data === data) {
        occurrences += 1;
      }
      current = current.next;
    }

    return occurrences;
  }
  deleteMiddle(): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }
  getMiddle(): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }
  oddEvenList(): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }
  maxPairSum(): T | null {
    throw new Error('Method not implemented.');
  }
  insertAfterNode(_node: DoubleNode<T>, _data: T): void {
    throw new Error('Method not implemented.');
  }

  rotate(_k: number): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }

  moveTailToHead(): void {
    throw new Error('Method not implemented.');
  }

  sumLinkedList(_other: DoublyLinkedList<T>): DoublyLinkedList<T> {
    throw new Error('Method not implemented.');
  }
}
