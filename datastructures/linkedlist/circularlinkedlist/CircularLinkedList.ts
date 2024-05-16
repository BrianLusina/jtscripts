/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import LinkedList from '../LinkedList';
import { LinkedListNode } from '../nodes';
import CircularLinkedListIterator from './CircularLinkedListIterator';
import CircularLinkedNode from './CircularLinkedNode';

export default class CircularLinkedList<T>
  extends LinkedList<T>
  implements Iterable<CircularLinkedNode<T>>
{
  private _head: CircularLinkedNode<T> | null | undefined;

  constructor(headNode: CircularLinkedNode<T> | null = null) {
    super();
    this._head = headNode;
  }

  [Symbol.iterator](): Iterator<CircularLinkedNode<T>> {
    return new CircularLinkedListIterator(this._head);
  }

  public get head(): CircularLinkedNode<T> | null | undefined {
    return this._head;
  }

  append(data: T): void {
    const node = new CircularLinkedNode(data);
    if (!this._head) {
      this._head = node;
      node.next = this._head;
    } else {
      let current = this._head;
      while (current.next != this._head) {
        // @ts-ignore
        current = current.next;
      }
      current.next = node;
      node.next = this._head;
    }
  }

  prepend(data: T): void {
    const newNode = new CircularLinkedNode(data);
    let current = this._head;
    newNode.next = this._head;

    if (!this._head) {
      newNode.next = newNode;
    } else {
      while (current?.next != this._head) {
        current = current?.next;
      }
      current.next = newNode;
    }
    this._head = newNode;
  }

  length(): number {
    let count = 0;
    if (!this._head) {
      return 0;
    }

    for (const _ of this) {
      count += 1;
    }
    return count;
  }

  moveToHead(_e: T): void {
    throw new Error('Method not implemented.');
  }

  deleteNodeAtPosition(_e: number): LinkedListNode<T> | null | undefined {
    throw new Error('Method not implemented.');
  }

  deleteNode(_e: T): void {
    throw new Error('Method not implemented.');
  }

  deleteMiddle(): LinkedListNode<T> | null {
    throw new Error('Method not implemented.');
  }

  getMiddle(): LinkedListNode<T> | null {
    throw new Error('Method not implemented.');
  }

  deleteNodeByData(_e: T): LinkedListNode<T> | null {
    throw new Error('Method not implemented.');
  }

  alternateSplit(): [LinkedListNode<T>, LinkedListNode<T>] {
    throw new Error('Method not implemented.');
  }

  isPalindrome(): boolean {
    throw new Error('Method not implemented.');
  }

  pairwiseSwap(): LinkedListNode<T> | null {
    throw new Error('Method not implemented.');
  }

  swapNodesAtKthAndKPlusOne(_e: number): LinkedListNode<T> | null {
    throw new Error('Method not implemented.');
  }

  reverse(): void {
    throw new Error('Method not implemented.');
  }

  oddEvenList(): LinkedListNode<T> | null {
    throw new Error('Method not implemented.');
  }

  maxPairSum(): T | null {
    throw new Error('Method not implemented.');
  }

  insertAfterNode(_node: CircularLinkedNode<T>, _data: T): void {
    throw new Error('Method not implemented.');
  }

  swapNodes(_keyOne: T, _keyTwo: T): void {
    throw new Error('Method not implemented.');
  }

  kthToLastNode(_e: number): LinkedListNode<T> | null | undefined {
    throw new Error('Method not implemented.');
  }

  countOccurrences(_data: T): number {
    throw new Error('Method not implemented.');
  }

  rotate(_k: number): LinkedListNode<T> | null {
    throw new Error('Method not implemented.');
  }

  moveTailToHead(): void {
    throw new Error('Method not implemented.');
  }

  sumLinkedList(_other: CircularLinkedList<T>): LinkedList<T> {
    throw new Error('Method not implemented.');
  }
}
