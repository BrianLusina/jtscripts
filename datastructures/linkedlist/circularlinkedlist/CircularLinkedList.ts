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

  deleteNodeAtPosition(_e: number): LinkedListNode<T> | null | undefined {
    throw new Error('Method not implemented.');
  }

  deleteNode(_e: T): void {
    throw new Error('Method not implemented.');
  }

  deleteMiddle(): LinkedListNode<T> | null {
    throw new Error('Method not implemented.');
  }

  deleteNodeByKey(key: string) {
    if (this._head) {
      // if the head node's key matches the key we are looking for
      if (this._head.key === key) {
        // set the current pointer to the head node. This will be used to track the last node as the pointer
        // moves through the list
        let current: CircularLinkedNode<T> | undefined | null = this._head;
        // move through the list until we reach the pointer that points back to the head node.
        while (current?.next != this._head) {
          current = current?.next;
        }
        // if the head node equals the next node, that means that this linked list has a length of 1, i.e. just 1
        // node. The head node can be set to None
        if (this._head === this._head?.next) {
          this._head = null;
        } else {
          // set the current pointer's next to point to the head's next
          current.next = this._head?.next;
          // set the head to now become the next node
          this._head = this._head?.next;
        }
      } else {
        // we have a situation where the head node's key is not equal to the key, therefore, we need to
        // traverse the list to find the first node whose key matches the given key. Setting current to the head
        // node acts as the pointer that we keep track of
        let current = this._head;
        // previous pointer helps to keep track of the previous node as we traverse, it is initially set to null
        let previous: CircularLinkedNode<T> | null | undefined = null;

        // we iterate through the linked list as long as the next pointer of the current is not equal to
        // the head node. This is to avoid an infinite loop as this is a circular linked list.
        while (current.next !== this._head) {
          // we set the previous pointer to the current node to keep track of the node before we reset the
          // current pointer to the next node
          previous = current;
          // move the current pointer to the next node
          // @ts-ignore
          current = current.next;
        }
        // if the current node's key is equal to the key we are searching for
        if (current.key === key) {
          // we set the previous node's next pointer to point to the current node's next pointer.
          // Essentially removing the current node from the list
          // @ts-ignore
          previous.next = current.next;
          // set the current node to the current's next node
          current = current.next;
        }
      }
    }
  }

  moveToHead(_e: T): void {
    throw new Error('Method not implemented.');
  }

  getMiddle(): LinkedListNode<T> | null {
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
