/* eslint-disable @typescript-eslint/ban-ts-comment */

import LinkedList from '../LinkedList';
import { SinglyLinkedListNode } from '../nodes';

export default class SinglyLinkedList<K, D> extends LinkedList<SinglyLinkedListNode<K, D>> {
  head: SinglyLinkedListNode<K, D> | null;

  constructor(headNode: SinglyLinkedListNode<K, D> | null) {
    super(headNode);
    this.head = headNode;
  }

  append(node: SinglyLinkedListNode<K, D>): void {}

  prepend(node: SinglyLinkedListNode<K, D>): void {
    throw new Error('Method not implemented.');
  }

  moveToHead(node: SinglyLinkedListNode<K, D>): void {
    throw new Error('Method not implemented.');
  }

  deleteNodeAtPosition(position: number): SinglyLinkedListNode<K, D> | null | undefined {
    if (position < 0) {
      const errMessage = `Invalid Index position given. Index is ${position}, expected position >= 0"`;
      throw new Error(errMessage);
    }

    // Nothing to delete here
    if (this.head === null) {
      return null;
    }

    if (this.head != null && position === 0) {
      const current = this.head;
      this.head = null;
      return current;
    }

    let current = this.head;

    while (current) {
      for (let index = 0; index < position; index++) {
        // @ts-ignore
        current = current.next;

        if (!current) {
          throw new Error(`Invalid position ${position} specified, reached end of list`);
        }
      }
    }

    const node = current;

    // @ts-ignore
    current.data = current.next.Data;
    // @ts-ignore
    current.next = current.dext.Next;

    return node;
  }

  deleteNode(node: SinglyLinkedListNode<K, D>): void {
    throw new Error('Method not implemented.');
  }

  deleteNodeByData(data: any): SinglyLinkedListNode<K, D> | null {
    // @ts-ignore
    const dummyHead: SinglyLinkedListNode<number, any> = { data: -1, next: this.head, key: -1 };
    let current = dummyHead;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    // @ts-ignore
    return dummyHead.next;
  }

  alternateSplit(): [SinglyLinkedListNode<K, D>, SinglyLinkedListNode<K, D>] {
    if (!this.head || !this.head?.next) {
      throw new Error('Head should not be null');
    }

    let current = this.head;
    const first = current;
    const second = current.next;

    while (current && current.next) {
      const temp = current.next;

      // set the next node for the first linked list
      current.next = temp.next;

      // check if the next node is available for the second linked list
      if (current.next && current.next.next) {
        // set the next node for the second linked list
        temp.next = current.next.next;
      } else {
        // we are at the end
        temp.next = null;
      }
      // keep moving the pointer
      // @ts-ignore
      current = current.next;
    }

    // @ts-ignore
    return [first, second];
  }

  isPalindrome(): boolean {
    if (!this.head) {
      return false;
    }
    if (!this.head.next) {
      return true;
    }

    let current = this.head;
    const stack: any[] = [];

    while (current) {
      stack.push(current.data);
      // @ts-ignore
      current = current.next;
    }

    current = this.head;

    while (current) {
      const data = stack.pop();

      if (current.data !== data) {
        return false;
      }

      // @ts-ignore
      current = current.next;
    }

    return true;
  }

  pairwiseSwap(): SinglyLinkedListNode<K, D> | null {
    // there is no head here, nothing to do
    if (!this.head) {
      return this.head;
    }

    let current = this.head;

    // While there are at least 2 nodes left
    while (current && current.next) {
      // if the 2 nodes have the same data value
      if (current.data === current.next.data) {
        // @ts-ignore
        // then we move to the next pair
        current = current.next.next;
      } else {
        // Swap the 2 data values of the next pair
        const temp = current.data;
        current.data = current.next.data;
        current.next.data = temp;

        // @ts-ignore
        // move to the next pair
        current = current.next.next;
      }
    }

    return this.head;
  }

  swapNodesAtKthAndKPlusOne(k: number): SinglyLinkedListNode<K, D> | null {
    let a = this.head;
    let b = this.head;

    for (let index = 1; index < k; index++) {
      a = a?.next;
    }

    const node = a;

    // @ts-ignore
    a = a?.next;

    while (a) {
      // @ts-ignore
      a = a.next;
      // @ts-ignore
      b = b?.next;
    }

    const temp = node?.data;
    node.data = b?.data;
    b.data = temp;

    return this.head;
  }

  reverse() {
    if (this.head?.next === null) {
      return;
    }

    let listToReverse = this.head.next;
    let reversedList = this.head;
    reversedList.next = null;

    while (listToReverse) {
      const temp = listToReverse;

      // move pointer to next node
      // @ts-ignore
      listToReverse = listToReverse.next;

      temp.next = reversedList;
      reversedList = temp;
    }

    this.head = reversedList;
  }
}
