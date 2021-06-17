/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
    this.stream = Array(n).fill(null);
    this.pointer = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey] = value;
    
    if (idKey > this.pointer) {
        return [];
    }

    while(this.pointer < this.stream.length && this.stream[this.pointer]) {
        this.pointer +=1
    }

    return this.stream.slice(idKey, this.pointer);
};

export default OrderedStream;