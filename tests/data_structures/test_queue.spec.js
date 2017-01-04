//import Queue from '../../jssnips/data_structures/queues/Queue';
var Queue = require('../../jssnips/data_structures/queues/Queue');

describe("Queue Tests", () =>{
    it("Test if queue is initialized", ()=>{
        var queue = new Queue(0);
        expect(queue instanceof Queue).toEqual(true);
    })
});
