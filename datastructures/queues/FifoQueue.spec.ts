import FifoQueue from "./FifoQueue";

describe('FifoQueue', () => {
    it('push(1) -> push(2) -> peek() -> pop() -> empty() should have a queue of [2] eventually', () => {
        const fifoQueue = new FifoQueue<number>();
        fifoQueue.push(1); // queue is: [1]
        fifoQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
        
        expect(fifoQueue.peek()).toEqual(1)
        
        // return 1, queue is [2]
        expect(fifoQueue.pop()).toEqual(1);
        
        // return false
        expect(fifoQueue.empty()).toBeFalsy(); 
    })
})