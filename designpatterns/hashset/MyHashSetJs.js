/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.map = new Map();
};

/**
 * Adds a key to the hashset
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.contains(key)) {
    this.map.set(key, true);
  }
};

/**
 * Removes a key from the hashset, if it's available
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.contains(key)) {
    this.map.delete(key);
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.map.has(key);
};

export default MyHashSet;
