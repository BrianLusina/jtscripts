import { zip } from 'lodash';
import SinglyLinkedList from "./SinglyLinkedList";

describe('SinglyLinkedList', () => {
    describe('oddEvenList', () => {
        const oddEvenListTest = (data: number[], expected: number[]) => {
            const linkedList = new SinglyLinkedList<number, number>(null)

            for(let d of data) {
                linkedList.append(d)
            }

            let actualHead = linkedList.oddEvenList()
            let actualNodes: number[] = []

            while (actualHead){
                actualNodes.push(actualHead.data)
                actualHead = actualHead.next
            }

            const zipped = zip(actualNodes, expected)

            for(const [actual, expected] of zipped) {
                expect(actual).toEqual(expected)
            }
        }

        it('linked list of [1, 2, 3, 4, 5] should return [1, 3, 5, 2, 4] as the new list', () => {
            const data = [1, 2, 3, 4, 5]
            const expected = [1, 3, 5, 2, 4]
            oddEvenListTest(data, expected)
        })

        it('linked list of [2, 1, 3, 5, 6, 4, 7] should return [2, 3, 6, 7, 1, 5, 4] as the new list', () => {
            const data = [2, 1, 3, 5, 6, 4, 7]
            const expected = [2, 3, 6, 7, 1, 5, 4]
            oddEvenListTest(data, expected)
        })
    })
})