import ArrayMaxHeap from "./ArrayMaxHeap";


describe('Array Max Heap', () => {
    describe('Insert', () => {
        it('should insert nodes in the correct order', () => {
            const heap = new ArrayMaxHeap()

            const data = [100, 88, 25, 87, 16, 8, 12, 86, 50, 2, 15, 3]
        
            for (const d of data) {
                heap.insert(d)    
            }

            const expectedRoot = 100
            const actualRoot = heap.rootNode()

            expect(actualRoot).toEqual(expectedRoot)

            const actualLast = heap.lastNode()
            
            const expectedLast = 3
            expect(actualLast).toEqual(expectedLast)
        })
    })
})
