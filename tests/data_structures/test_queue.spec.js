//import Queue from '../../jssnips/data_structures/queues/Queue';
require('../../jssnips/data_structures/queues/Queue');

describe("Queue Tests", () => {
    it("Test if Queue enqueue", () => {
        var queue = new Queue(5);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.peek()).toEqual(1);
    })
});
