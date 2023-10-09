class HashSet<T> {
  private container: Set<T>;

  constructor() {
    this.container = new Set();
  }

  /**
   * Adds a given key to the set, overwriting any similar keys
   * @param {T} key key to add to set
   */
  add(key: T): void {
    this.container.add(key);
  }

  /**
   * Removes a key from the set
   * @param {T} key Key to remove
   */
  remove(key: T): void {
    this.container.delete(key);
  }

  /**
   * Checks if a given key is in the set
   * @param {T} key Key to check.
   * @returns {boolean} true if the key is available, false otherwise
   */
  contains(key: T): boolean {
    return this.container.has(key);
  }
}

export default HashSet;
