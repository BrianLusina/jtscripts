function CircularBuffer(capacity){
    var readPoint = 0, writePoint = 0, buffer = new Array(capacity);

    return{
        read: function(){
            if(isBufferEmpty){
                throw new BufferEmptyException();
            }
            var data = buffer[readPoint];
            buffer[readPoint] = null;
            updateReadPoint();
            return data;
        },

        write: function(){

        },

        forceWrite: function(){

        },

        clear: function(){
            
        },

        isFull:function(){

        },

        isEmpty:function(){

        }
    };

    function isBufferEmpty(){
        return buffer.every(isEmpty);
    }

    function isBufferFull(){

    }

    function updateReadPoint(){
        readPoint = (readPoint + 1) % capacity;
    }

    function updateWritePoint(){

    }

    function updateBuffer(){

    }

    function isFull(data){
        return !isEmpty(data);
    }

    function isEmpty(data){
        return data === null || data === undefined;
    }
};

function BufferEmptyException(){
    this.name ="BufferEmptyException";
    this.message = "Buffer is empty";
}

function BufferFullException(){

}


module.exports = {
    circularBuffer: function(capacity){
        return new CircularBuffer(capacity);
    },

    bufferEmptyException: function(){
        return new BufferEmptyException();
    },

    bufferFullException: function(){
        return new BufferFullException();
    }
}