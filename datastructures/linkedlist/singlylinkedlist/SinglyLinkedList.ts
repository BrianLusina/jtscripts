/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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

  append(data: D, key: K | null = null): void {
    const node = SinglyLinkedListNode.create({ data, key });

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
    data;
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

  deleteNode(_node: SinglyLinkedListNode<K, D>): void {
    throw new Error('Method not implemented.');
  }

  deleteNodeByKey(key: K): SinglyLinkedListNode<K, D> | null {
    let current = this.head;

    // If the data we are deleting is at the head, then change the head to the next node in the linked list
    // and return
    if (current != null && current.key === key) {
      this.head = current.next;
      return current;
    }

    // this will be used to keep track of the previous node of the node to delete
    let previous: SinglyLinkedListNode<K, D>;

    // we move the pointer down the LinkedList until we find the Node whose data matches what we want to delete
    while (current != null && current.key !== key) {
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

    let current: SinglyLinkedListNode<K, D> | null = this.head;
    const stack: D[] = [];

    while (current) {
      stack.push(current.data);
      current = current.next;
    }

    current = this.head;

    while (current) {
      const data = stack.pop();

      if (current.data !== data) {
        return false;
      }

      current = current.next;
    }

    return true;
  }

  isPalindromeTwoPointers(): boolean {
    if (!this.head) {
      return false;
    }

    if (!this.head.next) {
      return true;
    }

    let firstPointer: SinglyLinkedListNode<K, D> | null = this.head;
    let lastPointer: SinglyLinkedListNode<K, D> | null = this.head;
    const previous: SinglyLinkedListNode<K, D>[] = [];
    let i = 0;

    while (lastPointer) {
      previous.push(lastPointer);
      lastPointer = lastPointer.next;
      i += 1;
    }
    lastPointer = previous[i - 1];

    let count = 0;

    while (count <= i / 2 + 1) {
      if (previous[previous.length - count - 1].data != firstPointer?.data) {
        return false;
      }

      firstPointer = firstPointer?.next;
      count += 1;
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
    let a: SinglyLinkedListNode<K, D> | null | undefined = this.head;
    let b: SinglyLinkedListNode<K, D> | null | undefined = this.head;

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
    // @ts-ignore
    node.data = b?.data;
    // @ts-ignore
    b.data = temp;

    return this.head;
  }

  reverse(): void {
    if (!this.head) {
      return;
    }

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
    let even: SinglyLinkedListNode<K, D> | null = this.head.next;
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
      // @ts-ignore
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

      // @ts-ignore
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
      // @ts-ignore
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

  // @ts-ignore
  swapNodes(keyOne: K, keyTwo: K): void {
    if (!this.head) {
      throw Error('Empty LinkedList');
    }

    if (keyOne === keyTwo) {
      return;
    }

    let currentOne: SinglyLinkedListNode<K, D> | null = this.head;
    let currentTwo: SinglyLinkedListNode<K, D> | null = this.head;

    while (currentOne && currentOne.key !== keyOne) {
      currentOne = currentOne.next;
    }

    while (currentTwo && currentTwo.key !== keyTwo) {
      currentTwo = currentTwo.next;
    }

    if (!currentOne || !currentTwo) {
      return;
    }

    const tempOne = currentOne.data;
    const tempTwo = currentTwo.data;

    currentOne.data = tempOne;
    currentTwo.data = tempTwo;
  }

  kthToLastNode(k: number): SinglyLinkedListNode<K, D> | null | undefined {
    if (k < 0) {
      throw new Error(`k ${k} can not be less than 0`);
    }

    let leftNode: SinglyLinkedListNode<K, D> | null | undefined = this.head;
    let rightNode = this.head;

    for (let index = 0; index < k - 1; index++) {
      if (!rightNode?.next) {
        throw new Error(`k ${k} is larger than the length of the linked list`);
      }

      rightNode = rightNode.next;
    }

    while (rightNode?.next) {
      rightNode = rightNode.next;
      leftNode = leftNode?.next;
    }

    return leftNode;
  }

  countOccurrences(data: D): number {
    if (!this.head) {
      return 0;
    }

    let occurrences = 0;
    let current: SinglyLinkedListNode<K, D> | null = this.head;

    while (current) {
      if (current.data === data) {
        occurrences += 1;
      }
      current = current.next;
    }

    return occurrences;
  }

  rotate(k: number): SinglyLinkedListNode<K, D> | null {
    if (k === 0) {
      return this.head;
    }

    if (!this.head || !this.head.next) {
      return this.head;
    }

    let current: SinglyLinkedListNode<K, D> | null = this.head;
    let count = 1;

    // move pointer until it reaches the kth node
    while (current && count < k) {
      current = current.next;
      count += 1;
    }

    // if we don't have a kth node(current is nil), k is greater than or equal to
    // count of nodes in linked list. So no need to rotate
    if (!current) {
      return null;
    }

    const kthNode = current;

    // move pointer to the end of the linked list
    while (current.next) {
      current = current?.next;
    }

    // change next of current node to point to previous head. This makes the linked list circular
    current.next = this.head;

    // change head to k+1th node
    this.head = kthNode.next;

    // break the circular linked list by setting the next of the kth node to null
    kthNode.next = null;
    return this.head;
  }

  moveTailToHead(): void {
    if (this.head && this.head.next) {
      // pointer that is initially set to the head node of the linked list. This will be used to keep track of the last node in the linked list
      let last = this.head;
      // secondToLast is a pointer initially set to nil that will be used to keep track of the second to last node in the linked list that will become
      // the new tail
      let secondToLast: SinglyLinkedListNode<K, D> | null = null;

      // move the last pointer to the end of the linked list while the node has a next pointer. This will set the previous pointer to last while also
      // setting the last pointer to the last node. After this loop, the previous will be at the second last node while the last will be at the last node
      // in the linked list
      while (last.next) {
        secondToLast = last;
        last = last.next;
      }
      // set the last node's next pointer to point to the head node. Note that at this point in time this has become a circular linked list
      last.next = this.head;
      // set the previous'(second to last node) next pointer to nil, consequentially breaking the circular linked list and setting this node as the last(tail)
      // node in the linked list
      // @ts-ignore
      secondToLast.next = null;
      // set the new head of the linked list as the last node
      this.head = last;
    }
  }

  // @ts-ignore
  sumLinkedList(other: SinglyLinkedList<K, D>): SinglyLinkedList<K, D> {
    let firstHead = this.head;
    let secondHead = other.head;
    const summedList = new SinglyLinkedList<K, D>(null);

    let carry = 0;

    while (firstHead || secondHead) {
      const i = firstHead ? firstHead.data : 0;
      const j = secondHead ? secondHead.data : 0;

      const s = (i as number) + (j as number) + carry;

      if (s >= 10) {
        carry = 1;
        const remainder = s & 10;
        summedList.append(remainder as D);
      } else {
        carry = 0;
        summedList.append(s as D);
      }

      if (firstHead != null) {
        firstHead = firstHead.next;
      }
      if (secondHead != null) {
        secondHead = secondHead.next;
      }
    }

    return summedList;
  }

  removeDuplicates(): void {
    throw Error('Not implemented');
  }
}
