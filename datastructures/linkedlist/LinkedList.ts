/* eslint-disable no-unused-vars */
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
   * Deletes a node from the LinkedList if the node can be found in the LinkedList
   * @param {T} node LinkedListNode to delete
   */
  abstract deleteNode(e: T): void;

  /**
   * Deletes the middle node from the linked list and returns it
   * @returns {LinkedListNode} middle node
   */
  abstract deleteMiddle(): LinkedListNode<T> | null;

  /**
   * Retrieves the middle node of a linked list
   * @returns {LinkedListNode} middle node of a linked list
   */
  abstract getMiddle(): LinkedListNode<T> | null;

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

  /**
   * Reverses the LinkedList such that the head becomes the tail and the tail becomes the head
   */
  abstract reverse(): void;

  abstract oddEvenList(): LinkedListNode<T> | null;

  /**
   * maximumPairSum returns the maximum twin sum of a node and its twin, where a node's twin is at the index (n-1-i) where n is the
   * number of nodes in the linked list.
   * For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only
   * nodes with twins for n = 4.
   */
  abstract maxPairSum(): T | null;

  /**
   * Inserts a given data element after the provided node
   * @param {LinkedListNode} node node to insert data after
   * @param {T} data data element to insert
   */
  // eslint-disable-next-line no-unused-vars
  abstract insertAfterNode(node: LinkedListNode<T>, data: T): void;

  /**
   * Swap two nodes in a linked list such as keyOne takes the place of keyTwo and vice versa
   * @param {T} keyOne First key to swap
   * @param {T} keyTwo Second key to swap
   */
  // eslint-disable-next-line no-unused-vars
  abstract swapNodes(keyOne: T, keyTwo: T): void;

  /**
   * Returns the kth to the last node in the linked list if available
   * @param k {number} the position from the last node in the linked list
   */
  abstract kthToLastNode(e: number): LinkedListNode<T> | null | undefined;

  /**
   * Count the number of occurrences of a data item in a linked list
   * If the linked list is empty(no head). 0 is returned.
   * otherwise the occurrences of the data element will be sought using the equality operator. This assumes that the
   * data element in each node already implements this operator.
   * Complexity:
   * The assumption here is that n is the number of nodes in the linked list.
   *
   * Time O(n): This is because the algorithm iterates through each node in the linked list to find data values in
   * each node that equal the provided data argument in the function. This is both for the worst and best case as
   * each node in the linked list has to be checked
   * Space O(1): no extra space is required other than the value being incremented for each node whose data element
   * equals the provided data argument.
   * @param {T} data element to count occurrences for.
   * @returns {number} number of occurrences for a given data item.
   */
  abstract countOccurrences(data: T): number;

  /**
   * Rotates a linked list by k position
   * @param {number} k positions to rotate linked list by
   * @returns {LinkedListNode} new head node
   */
  abstract rotate(k: number): LinkedListNode<T> | null;

  /**
   * Moves the tail node to the head node making the tail node the new head of the linked list
   * Uses two pointers where last pointer will be moved until it points to the last node in the linked list. The second pointer, previous, will
   * point to the second last node in the linked list.
   * Complexity Analysis:
   * An assumption is made where n is the number of nodes in the linked list
   * Time: O(n) as the the pointers have to be moved through each node in the linked list until both point to the last and second last nodes in the linked list
   * Space O(1) as no extra space is incurred in the iteration. Only pointers are moved at the end to move the tail node to the head and make the second to last node
   * the new tail
   */
  abstract moveTailToHead(): void;
}
