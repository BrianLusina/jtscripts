import { ArrayHeap } from '../../ArrayHeap';

/**
 * ArrayMinHeap is an abstract data structure which implements a MinHeap using an array as the
 * underlying concrete data structure.
 * Note that the {T} must implement comparable operators such as >, < == for the comparison to work as the trickle
 * algorithm is run to ensure the heap maintains its max heap condition.
 */
export default class ArrayMinHeap<T> extends ArrayHeap<T> {
  constructor() {
    super();
    this.items = [];
  }

  insert(data: T): void {
    // add item to the end of the current list. Making this the last node
    this.items.push(data);

    // keep track of the newly added node index
    let newNodeIndex = this.items.length - 1;

    // execute the trickle up algorithm to move the newly inserted node into the right position
    // in the heap

    const insertedNode = this.items[newNodeIndex];
    const parentNodeIndex = this.parentIndex(newNodeIndex);
    const parentNode = this.items[parentNodeIndex];

    // if the new node is not in the root position and it's smaller than it's parent node
    while (newNodeIndex > 0 && insertedNode < parentNode) {
      // swap the new node with the parent node
      const temp = this.items[parentNodeIndex];
      this.items[parentNodeIndex] = this.items[newNodeIndex];
      this.items[newNodeIndex] = temp;

      // update the index of the new node
      newNodeIndex = parentNodeIndex;
    }
  }

  delete(): T {
    if (this.items.length === 0) {
      throw new Error('Failed to delete from heap, heap is already empty');
    }

    // we always delete the root node, so, we get the node at the first index to later return it.
    // note that using this.items.shift() will do the same thing, but will shift all nodes to the left
    // essentially adding an O(n) time complexity in the shift. Additionally, will bring about wrong results
    // as below when moving the last node to the root node
    const root = this.items[0];

    // we pop off the last node & make it the root before 'trickling' it down into the correct position
    const lastNode = this.items.pop();
    if (!lastNode) {
      throw new Error('Failed to pop off last node. heap is empty');
    }

    // make the last node the root node
    this.items.splice(0, 1, lastNode);

    // track the current index of the trickle node. We start off at 0
    let trickleNodeIndex = 0;

    // below is the trickle down algorithm. This is run as long as the trickle node has a child that is less than it
    while (this.hasLesserChild(trickleNodeIndex)) {
      // retrieve the index of the smaller child for this node
      const smallerChildIndex = this.getSmallerChildIndex(trickleNodeIndex);

      // swap the trickle node with it's smaller child

      // temp is used here to ensure that we don't lose the value of the node at the smallerChildIndex
      const temp = this.items[smallerChildIndex];
      this.items[smallerChildIndex] = this.items[trickleNodeIndex];
      this.items[trickleNodeIndex] = temp;

      // update the trickle node's new index
      trickleNodeIndex = smallerChildIndex;
    }

    return root;
  }

  /**
   * Checks if the node at the given index has a child that is less than it.
   * Returns true if that is the case
   * @param {number} index Index of node to check for greater child
   * @returns {boolean} true if the node has a smaller child, false otherwise
   */
  private hasLesserChild(index: number): boolean {
    const leftChildIdx = this.leftChildIndex(index);
    const rightChildIdx = this.rightChildIndex(index);

    // Both indices for the left & right child for this node are out of bounds. Therefore this node
    // does not have left nor right children, We return false
    if (leftChildIdx >= this.items.length && rightChildIdx >= this.items.length) {
      return false;
    }

    // left child index is out of bounds, therefore, this node does not have a left child, but has a right child
    if (leftChildIdx >= this.items.length && rightChildIdx < this.items.length) {
      // check if the right child is less
      return this.items[rightChildIdx] < this.items[index];
    }

    // right child index is out of bounds, therefore, this node does not have a right child, but has a left child
    if (rightChildIdx >= this.items.length && leftChildIdx < this.items.length) {
      // check if the left child is less
      return this.items[leftChildIdx] < this.items[index];
    }

    // node has both left and right children
    return (
      this.items[leftChildIdx] < this.items[index] || this.items[rightChildIdx] < this.items[index]
    );
  }

  /**
   * Retrieves the index of the node's smaller child and returns it.
   * @param index Index of the node in the heap
   * @returns {number} index of the smaller child
   */
  private getSmallerChildIndex(index: number): number {
    const rightChildIdx = this.rightChildIndex(index);
    const leftChildIdx = this.leftChildIndex(index);

    // Both indices for the left & right child for this node are out of bounds. Therefore this node
    // does not have left nor right children
    if (leftChildIdx >= this.items.length && rightChildIdx >= this.items.length) {
      throw new Error(`Node at ${index} does not have children`);
    }

    // right child index is out of bounds, therefore, this node does not have a right child, but has a left child
    if (rightChildIdx >= this.items.length && leftChildIdx < this.items.length) {
      return leftChildIdx;
    }

    // left child index is out of bounds, therefore, this node does not have a left child, but has a right child
    if (leftChildIdx >= this.items.length && rightChildIdx < this.items.length) {
      return rightChildIdx;
    }

    // at this point, the node has both left & right children, check which is smaller
    const leftChildNode = this.items[leftChildIdx];
    const rightChildNode = this.items[rightChildIdx];

    // if right child value is less than left child
    if (rightChildNode < leftChildNode) {
      // return right child index
      return rightChildIdx;
    } else {
      return leftChildIdx;
    }
  }
}
