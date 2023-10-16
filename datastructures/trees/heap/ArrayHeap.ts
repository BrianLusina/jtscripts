import Heap from './Heap';

/**
 * ArrayHeap is an abstract data type for a heap that uses an Array as the concrete data type to store values in
 * a heap
 */
export abstract class ArrayHeap<T> extends Heap<T> {
  // represents item in the heap stored in an array
  items: T[];

  constructor() {
    super();
  }

  /**
   * Retrieves the root node and returns it without removing it from the heap
   * @returns {T} root node if available
   * @throws {Error} if heap is empty
   */
  protected rootNode(): T {
    if (this.items.length === 0) {
      throw new Error('Heap is empty, can not retrieve root node');
    }
    return this.items[0];
  }

  /**
   * Returns the last node in the heap without removing it from the heap
   * @returns {T} Last node in the heap
   * @throws {Error} if the heap is empty
   */
  protected lastNode(): T {
    if (this.items.length === 0) {
      throw new Error('Heap is empty, can not retrieve last node');
    }
    return this.items[this.items.length - 1];
  }

  /**
   * Retrieves the left child's index of the node at {index}. Note that the index returned could be
   * out of bounds, i.e. greater than or equal to the length of the items. Implementor must handle this case
   * @param {number} index index of the node
   * @returns {number} left child index of the given node
   */
  protected leftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  /**
   * Retrieves the right child's index of the node at {index}
   * Note that the index returned could be
   * out of bounds, i.e. greater than or equal to the length of the items. Implementor must handle this case
   * @param {number} index index of the node
   * @returns {number} right child index of the given node
   */
  protected rightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  /**
   * Retrieves the parent index of the node at {index}. Note that the when a negative value is found, 0 is always returned or
   * when a negative number is passed in, 0 will be returned.
   * This means that the node at this index is the root node and does not have a parent. This will end up returning the
   * same index as the argument passed in.
   * @param {number} index index of the node
   * @returns {number} parent index of the given node
   */
  protected parentIndex(index: number): number {
    const idx = Math.floor((index - 1) / 2);

    if (idx < 0) {
      return 0;
    }

    return idx;
  }

  size(): number {
    return this.items.length;
  }

  peek(): T {
    return this.rootNode();
  }
}
