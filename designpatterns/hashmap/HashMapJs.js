/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.data = {};
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.data[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let keyString = key;
  if (this.data[key] !== undefined) {
    return this.data[key];
  } else {
    return null;
  }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  if (this.data[key]) {
    delete this.data[key];
  } else {
    return null;
  }
};

export default MyHashMap;
