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
})
