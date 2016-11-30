function CircularBuffer(capacity){
    var readPoint = 0, writePoint = 0, buffer = new Array(capacity);

    return{
        read: function(){

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

    }

    function isBufferFull(){

    }

    function updateReadPoint(){

    }

    function updateWritePoint(){

    }

    function updateBuffer(){

    }

    function isFull(data){

    }

    function isEmpty(data){

    }
};

function BufferEmptyException(){

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