import { LinkedListNode } from './nodes';

export default abstract class LinkedList<T> {
  /**
   * Create new node add it to the end of the Linked List
   * @param {T} data
   */
  abstract append(e: T): void;

  abstract prepend(e: T): void;

  /**
   * Returns the number of nodes in the linked list
   * This is an O(n) operation were n is the number of nodes in the linked list. Requires constant extra space resulting in
   * O(1) space complexity.
   * @returns {number} number of nodes in the linked list
   */
  abstract length(): number;

  abstract moveToHead(e: T): void;

  /**
   * Deletes a node from the specified position in the LinkedList. Assumes 0 based indexing
   * @param position Index of node to delete
   * @returns {LinkedListNode} deleted node
   */
  abstract deleteNodeAtPosition(e: number): LinkedListNode<T> | null | undefined;

  /**
   * Delets a node from the LinkedList if the node can be found in the LinkedList
   * @param {T} node LinkedListNode to delete
   */
  abstract deleteNode(e: T): void;

  /**
   * Deletes the middle node from the linked list and returns it
   * @returns {LinkedListNode} middle node
   */
  abstract deleteMiddle(): LinkedListNode<T> | null;

  /**
   * Delets a node from the LinkedList by its data if the node can be found in the LinkedList. This deletes the first occurrence
   * of the found data
   * @param {any} data data to find and delete
   * @returns {LinkedListNode}
   */
  abstract deleteNodeByData(e: T): LinkedListNode<T> | null;

  abstract alternateSplit(): [LinkedListNode<T>, LinkedListNode<T>];

  /**
   * Checks if a Linked list is a palindrome
   * @returns {boolean} True if the linked list can be read from tail to head as from head to tail
   */
  abstract isPalindrome(): boolean;

  /**
   * Swaps nodes in a linked list in pairs.
   * As there are different kinds of LinkedLists, it is up to the child class to implement this
   * The premise(idea) is to swap the data of each node with the data of the next node. This is while using
   * an iterative approach
   * Example:
   * 1 -> 2 -> 3 -> 4
   * becomes
   * 2 -> 1 -> 4 -> 3
   * @returns {LinkedListNode} new head of linked list
   */
  abstract pairwiseSwap(): LinkedListNode<T> | null;

  /**
   * Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node
   * from the end (the list is 1-indexed).
   * Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
   * Output: [7,9,6,6,8,7,3,0,9,5]
   * @param {number} k kth node from beginning & kth node position from end
   * @returns {LinkedListNode} head of linked list
   */
  abstract swapNodesAtKthAndKPlusOne(e: number): LinkedListNode<T> | null;

  /**
   * Swaps two nodes based on the data they contain. We search through the LinkedList looking for the data item in
   * each node. Once the first is found, we keep track of it and move on until we find the next data item. Once that
   * is found, we swap the two nodes' data items.
   * If we can't find the first data item nor the second. No need to perform swap. If the 2 data items are similar
   * no need to perform swap as well.
   * If the LinkedList is empty (i.e. has no head node), return, no need to swap when we have no LinkedList :)
   * @param {Any} dataOne Data Item One
   * @param {Any} dataTwo Data Item Two
   */
  // swapNodes(dataOne: T, dataTwo: T): void {
  //   if (!this.head) {
  //     throw Error('Empty LinkedList');
  //   }

  //   if (dataOne === dataTwo) {
  //     return;
  //   }

  //   let currentOne = this.head;
  //   let currentTwo = this.head;

  //   // @ts-ignore
  //   while (currentOne && currentOne.data !== dataOne) {
  //     // @ts-ignore
  //     currentOne = currentOne.next;
  //   }

  //   // @ts-ignore
  //   while (currentTwo && currentTwo.data !== dataTwo) {
  //     // @ts-ignore
  //     currentTwo = currentTwo.next;
  //   }

  //   if (!currentOne || !currentTwo) {
  //     return;
  //   }

  //   // @ts-ignore
  //   const tempOne = currentOne.data;
  //   // @ts-ignore
  //   const tempTwo = currentTwo.data;

  //   // @ts-ignore
  //   currentOne.data = tempOne;
  //   // @ts-ignore
  //   currentTwo.data = tempTwo;
  // }

  /**
   * Reverses the LinkedList such that the head becomes the tail and the tail becomes the head
   */
  abstract reverse(): void;
}
