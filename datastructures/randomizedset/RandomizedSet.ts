export default class RandomizedSet<T> {
  private containerMap: Map<T, number>;
  private data: T[];

  constructor() {
    this.containerMap = new Map();
    this.data = [];
  }

  insert(val: T): boolean {
    if (this.containerMap.has(val)) {
      return false;
    }

    // add the element to the dictionary. Setting the value as the
    // length of the list will accurately point to the index of the
    // new element. (len(some_list) is equal to the index of the last item +1)

    this.containerMap.set(val, this.data.length);
    this.data.push(val);
    return true;
  }

  remove(val: T): boolean {
    if (!this.containerMap.has(val)) {
      return false;
    }

    // essentially, we're going to move the last element in the list into the location of the element we want to
    // remove. This is a significantly more efficient operation than the obvious solution of removing the item and
    // shifting the values of every item in the dictionary to match their new position in the list
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = this.containerMap.get(val)!;
    if (index !== this.data.length - 1) {
      const lastElement = this.data[this.data.length - 1];
      [this.data[index], this.data[this.data.length - 1]] = [lastElement, this.data[index]];
      this.containerMap.set(lastElement, index);
    }

    this.containerMap.delete(val);
    this.data.pop();

    return true;
  }

  getRandom(): T {
    const randomIndex = Math.floor(Math.random() * this.data.length);
    return this.data[randomIndex];
  }
}
