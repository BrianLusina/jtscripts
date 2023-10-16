/* eslint-disable no-unused-vars */
export default abstract class Heap<T> {
  /**
   * Inserts a value into a Heap. This moves the inserted data item to the correct position in the heap
   * depending on the heap implementation.
   * The time complexity is O(log(n)) as the inserted data item is moved up the heap into the correct position
   * @param {T} data Data item to insert into heap
   */
  abstract insert(data: T): void;

  /**
   * Deletes an item from the heap and returns it.
   * This will always return the root node and re-balance the heap to maintain the heap property
   * Note that this is an O(log(n)) operation
   * @returns {T} root at heap
   */
  abstract delete(): T;

  /**
   * Returns the size of the heap, i.e. the number of elements in the heap
   * @returns {number} number of elements in the heap
   */
  abstract size(): number;

  /**
   * Returns the root node without removing it
   * @returns {T} root node
   */
  abstract peek(): T;
}
