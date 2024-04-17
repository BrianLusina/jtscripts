/* eslint-disable @typescript-eslint/ban-ts-comment */

import { add } from '../../../utils/utils';
import LinkedList from '../LinkedList';
import SinglyLinkedListNode from './SinglyLinkedListNode';

export default class SinglyLinkedList<K, D> extends LinkedList<D> {
  head: SinglyLinkedListNode<K, D> | null;

  constructor(headNode: SinglyLinkedListNode<K, D> | null) {
    super();
    this.head = headNode;
  }

  append(data: D): void {
    const node = new SinglyLinkedListNode<K, D>(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    return;
  }

  prepend(data: D): void {
    const node = new SinglyLinkedListNode<K, D>(data);
    node.next = this.head;
    this.head = node;
  }

  length(): number {
    if (!this.head) {
      return 0;
    }
    let count = 0;
    let current = this.head;

    while (current) {
      // @ts-ignore
      current = current.next;
      count += 1;
    }
    return count;
  }

  moveToHead(data: D): void {
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

  deleteNode(data: D): void {
    throw new Error('Method not implemented.');
  }

  deleteNodeByData(data: D): SinglyLinkedListNode<K, D> | null {
    let current = this.head;

    // If the data we are deleting is at the head, then change the head to the next node in the linked list
    // and return
    if (current != null && current.data === data) {
      this.head = current.next;
      return current;
    }

    // this will be used to keep track of the previous node of the node to delete
    let previous: SinglyLinkedListNode<K, D>;

    // we move the pointer down the LinkedList until we find the Node whose data matches what we want to delete
    while (current != null && current.data !== data) {
      previous = current;
      current = current.next;
    }

    //if there is no node that matches the condition above, we exit
    if (current === null) {
      return null;
    }

    // re-assign the pointers of the nodes around the node to delete. That is, moving the previous node's next
    // pointer to the current node's next pointer. This essentially 'deletes' the node by the data attribute
    previous!.next = current.next;
    return current;
  }

  deleteMiddle(): SinglyLinkedListNode<K, D> | null {
    if (!this.head || !this.head.next) {
      return null;
    }

    const nodeCount = this.length();
    const middleIndex = nodeCount / 2;

    let current = this.head;
    for (let index = 0; index < middleIndex - 1; index++) {
      // @ts-ignore
      current = current.next;
    }

    const middleNode = current.next;
    // @ts-ignore
    current.next = current.next?.next;

    return middleNode;
  }

  deleteMiddle2Pointer(): SinglyLinkedListNode<K, D> | null {
    if (!this.head || !this.head.next) {
      return null;
    }

    let slowPointer = this.head;
    let fastPointer = this.head.next?.next;

    while (fastPointer && fastPointer.next) {
      // @ts-ignore
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }

    const middleNode = slowPointer?.next;
    // @ts-ignore
    slowPointer.next = slowPointer.next?.next;

    return middleNode;
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

  getMiddle(): SinglyLinkedListNode<K, D> | null {
    if (!this.head || !this.head.next) {
      return null;
    }

    const nodeCount = this.length();
    const middleIndex = nodeCount / 2;

    let current = this.head;
    for (let index = 0; index < middleIndex - 1; index++) {
      // @ts-ignore
      current = current.next;
    }

    const middleNode = current.next;

    return middleNode;
  }

  isPalindrome(): boolean {
    if (!this.head) {
      return false;
    }
    if (!this.head.next) {
      return true;
    }

    let current = this.head;
    const stack: D[] = [];

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

  reverse(): void {
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

  oddEvenList(): SinglyLinkedListNode<K, D> | null {
    if (!this.head || !this.head.next) {
      return this.head;
    }

    let odd = this.head;
    let even = this.head.next;
    const evenHead = even;

    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }

    odd.next = evenHead;
    return this.head;
  }

  maxPairSum(): D | null {
    if (this.head === null) {
      return null;
    }

    let current: SinglyLinkedListNode<K, D> | null = this.head;
    const values: D[] = [];

    while (current != null) {
      values.push(current.data);
      current = current.next;
    }

    let maximumSum: D | null = null;
    let left = 0;
    let right = values.length - 1;

    while (left < right) {
      const p = add(values[left], values[right]);
      maximumSum = max(maximumSum, p);
      left += 1;
      right -= 1;
    }

    return maximumSum;
  }

  maximumPairSumStack(): D | null {
    if (!this.head) {
      return null;
    }

    let current: SinglyLinkedListNode<K, D> | null | undefined = this.head;
    const stack: D[] = [];

    while (current) {
      stack.push(current.data);
      current = current.next;
    }

    current = this.head;
    let maximumSum: D | null = null;
    const size = stack.length;
    let count = 1;

    while (count < size / 2) {
      const topValue = stack.pop();

      maximumSum = max(maximumSum, add(current?.data, topValue));
      current = current?.next;
      count += 1;
    }

    return maximumSum;
  }

  maximumPairSumReverseInPlace(): D | null {
    if (!this.head) {
      return null;
    }

    const middleNode = this.getMiddle();

    // reverse the second half of linked list
    let current = middleNode;
    let previous: SinglyLinkedListNode<K, D> | null = null;
    let maximumSum: D | null = null;

    while (current) {
      current.next = previous;
      previous = current;
      current = current.next;
    }

    let start: SinglyLinkedListNode<K, D> | null | undefined = this.head;
    while (previous) {
      maximumSum = max(maximumSum, add(start?.data, previous?.data));
      previous = previous.next;
      start = start?.next;
    }

    return maximumSum;
  }

  insertAfterNode(node: SinglyLinkedListNode<K, D>, data: D): void {
    if (!node) {
      return;
    }
    // node to insert
    const newNode = new SinglyLinkedListNode<K, D>(data);

    // set the new node's next pointer to point to the prevNode's next pointer
    newNode.next = node.next;

    // set the prevNode's next pointer to point to the new node
    node.next = newNode;
  }
}
