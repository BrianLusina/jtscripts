class MyHashSet {
  container: Set<unknown>;

  constructor() {
    this.container = new Set();
  }

  add(key: number): void {
    this.container.add(key);
  }

  remove(key: number): void {
    this.container.delete(key);
  }

  contains(key: number): boolean {
    return this.container.has(key);
  }
}

export default MyHashSet;
