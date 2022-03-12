export default abstract class LinkedList<Node> {
  head: Node | null | undefined;

  constructor(head: Node | null) {
    this.head = head;
  }

  /**
   * Create new node add it to the end of the Linked List
   * @param {Node} node
   */
  abstract append(node: Node): void;

  abstract prepend(node: Node): void;

  abstract moveToHead(node: Node): void;

  /**
   * Deletes a node from the specified position in the LinkedList. Assumes 0 based indexing
   * @param position Index of node to delete
   * @returns {Node} deleted node
   */
  abstract deleteNodeAtPosition(position: number): Node | null | undefined;

  /**
   * Delets a node from the LinkedList if the node can be found in the LinkedList
   * @param {Node} node Node to delete
   * @returns {Node}
   */
  abstract deleteNode(node: Node): void;

  /**
   * Delets a node from the LinkedList by its data if the node can be found in the LinkedList. This deletes the first occurrence
   * of the found data
   * @param {any} data data to find and delete
   * @returns {Node}
   */
  abstract deleteNodeByData(data: any): Node | null;

  abstract alternateSplit(): [Node, Node];

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
   * @returns {Node} new head of linked list
   */
  abstract pairwiseSwap(): Node | null;

  /**
   * Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node
   * from the end (the list is 1-indexed).
   * Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
   * Output: [7,9,6,6,8,7,3,0,9,5]
   * @param {number} k kth node from beginning & kth node position from end
   * @returns {Node} head of linked list
   */
  abstract swapNodesAtKthAndKPlusOne(k: number): Node | null;

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
  swapNodes(dataOne: any, dataTwo: any) {
      if (!this.head) {
        throw Error("Empty LinkedList")
      }

      if (dataOne === dataTwo) {
        return;
      }

      let currentOne = this.head;
      let currentTwo = this.head;

      // @ts-ignore
      while(currentOne && currentOne.data !== dataOne) {
        // @ts-ignore
        currentOne = currentOne.next;
      }

      // @ts-ignore
      while(currentTwo && currentTwo.data !== dataTwo) {
          // @ts-ignore
          currentTwo = currentTwo.next;
      }

      if (!currentOne || !currentTwo) {
        return;
      }
      
      // @ts-ignore
      let tempOne = currentOne.data;
        // @ts-ignore
      let tempTwo = currentTwo.data;

    // @ts-ignore
      currentOne.data = tempOne;
            // @ts-ignore
      currentTwo.data = tempTwo; 
  }

  /**
   * Reverses the LinkedList such that the head becomes the tail and the tail becomes the head
   */
  abstract reverse(): void
}
