import { generateHash } from "../../../utils/hash"
import DoublyLinkedList from "./DoublyLinkedList"

describe('Doubly Linked List', () => {
    describe("append", () => {
        it(`should append data to a new doubly linked list`, () => {
            const doublyLinkedList = new DoublyLinkedList()
            doublyLinkedList.append(10)
            doublyLinkedList.append(20)
    
            expect(doublyLinkedList.length()).toEqual(2)
        })
    })
    
    describe("prepend", () => {
        it(`should prepend data to a new doubly linked list`, () => {
            const doublyLinkedList = new DoublyLinkedList()
            doublyLinkedList.prepend(10)
            doublyLinkedList.prepend(20)
    
            expect(doublyLinkedList.length()).toEqual(2)
        })
    })
    
    describe("delete node", () => {
        describe('by key', () => {
            it(`should delete a node by a key for a doubly linked list`, () => {
                const doublyLinkedList = new DoublyLinkedList()
                doublyLinkedList.append(10)
                doublyLinkedList.append(20)
                doublyLinkedList.append(30)
        
                expect(doublyLinkedList.length()).toEqual(3)

                const key = generateHash(20)

                doublyLinkedList.deleteNodeByKey(key)

                const expectedData = [10, 30];

                expect(doublyLinkedList.length()).toEqual(2)

                const actualData = []
                for (const node of doublyLinkedList) {
                    actualData.push(node.data);
                }

                expect(actualData).toEqual(expectedData);
            })
        })
    })
})
