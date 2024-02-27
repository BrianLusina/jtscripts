import HashSet from '../hashset';
import { ArrayMinHeap as MinHeap } from '../trees/heap/binary/minheap';

export default class SmallestInfiniteSet {
  private hashSet: HashSet<number>;
  private minHeap: MinHeap<number>;
  private currentElement: number;

  constructor() {
    this.hashSet = new HashSet();
    this.minHeap = new MinHeap();
    this.currentElement = 1;
  }

  popSmallest(): number {
    let result: number;

    //  if we have elements in the heap, the top element is removed and returned
    if (this.minHeap.size() != 0) {
      // pop the smallest element from the list
      result = this.minHeap.delete();
      this.hashSet.remove(result);
    } else {
      // the smallest element is the current element, we return it and set the current element to the next element
      result = this.currentElement;
      this.currentElement += 1;
    }

    return result;
  }

  addBack(num: number): void {
    // if the num is greater than or equal to the current element, it is not added to the set, as it is greater than
    // our current element, this means that in the set of all positive integers, it already exists. Similarly, if it
    // is already in the element set, we do not add it as well as it might have been added before; this could be the
    // case where it is less than the current element.
    if (this.currentElement <= num || this.hashSet.contains(num)) {
      return;
    }
    this.minHeap.insert(num);
    this.hashSet.add(num);
  }
}
