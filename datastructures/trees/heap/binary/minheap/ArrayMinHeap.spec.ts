import ArrayMinHeap from "./ArrayMinHeap";


describe('Array Max Heap', () => {
    describe('Insert', () => {
        it('should insert nodes in the correct order', () => {
            const heap = new ArrayMinHeap()

            const data = [3, 7, 5, 11, 10, 6, 8, 15, 20, 13, 12]

            for (const d of data) {
                heap.insert(d)    
            }

            const expectedRoot = 3
            const actualRoot = heap.rootNode()

            expect(actualRoot).toEqual(expectedRoot)

            const actualLast = heap.lastNode()
            
            const expectedLast = 12
            expect(actualLast).toEqual(expectedLast)
        })
    })
    describe('Delete', () => {

        it('should delete root node & maintain heap in correct order', () => {
            const heap = new ArrayMinHeap()

            const data = [3, 7, 5, 11, 10, 6, 8, 15, 20, 13, 12]
        
            for (const d of data) {
                heap.insert(d)    
            }

            const expectedRoot = 3
            const actualRoot = heap.delete()
            expect(actualRoot).toEqual(expectedRoot)

            const newActualRoot = heap.rootNode()
            const expectedNewRoot = 5
            expect(newActualRoot).toEqual(expectedNewRoot)

            const actualLast = heap.lastNode()            
            const expectedLast = 13
            expect(actualLast).toEqual(expectedLast)
        })
    })
})
