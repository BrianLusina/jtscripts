function CircularBuffer(capacity) {
  let readPoint = 0;
  let writePoint = 0;
  let buffer = new Array(capacity);

  return {
    read: function () {
      if (isBufferEmpty()) {
        throw new BufferEmptyException();
      }
      const data = buffer[readPoint];
      buffer[readPoint] = null;
      updateReadPoint();
      return data;
    },

    write: function (data) {
      updateBuffer(data, function () {
        if (isBufferFull()) {
          throw new BufferFullException();
        }
        buffer[writePoint] = data;
      });
    },

    forceWrite: function (data) {
      updateBuffer(data, () => {
        if (isBufferFull()) {
          updateReadPoint();
        }
        buffer[writePoint] = data;
      });
    },

    clear: function () {
      readPoint = 0;
      writePoint = 0;
      buffer = new Array(capacity);
    },

    isFull: function () {
      return isBufferFull();
    },

    isEmpty: function () {
      return isBufferEmpty();
    },
  };

  function isBufferEmpty() {
    return buffer.every(isEmpty);
  }

  function isBufferFull() {
    return buffer.filter(isFull).length === capacity;
  }

  function updateReadPoint() {
    readPoint = (readPoint + 1) % capacity;
  }

  function updateWritePoint() {
    writePoint = (writePoint + 1) % capacity;
  }

  function updateBuffer(data, callback) {
    if (isEmpty(data)) {
      return;
    }
    callback();
    updateWritePoint();
  }

  function isFull(data) {
    return !isEmpty(data);
  }

  function isEmpty(data) {
    return data === null || data === undefined;
  }
}

function BufferEmptyException() {
  this.name = 'BufferEmptyException';
  this.message = 'Buffer is empty';
}

function BufferFullException() {
  this.name = 'BufferFullException';
  this.message = 'Buffer is Full';
}

module.exports = {
  circularBuffer: function (capacity) {
    return new CircularBuffer(capacity);
  },

  bufferEmptyException: function () {
    return new BufferEmptyException();
  },

  bufferFullException: function () {
    return new BufferFullException();
  },
};
