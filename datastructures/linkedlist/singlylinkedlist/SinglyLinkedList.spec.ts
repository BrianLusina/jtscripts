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
    
    describe("maximumPairSum", () => {
        type testCase = {
            values: number[];
            expected: number;
        }

        const testCases: testCase[] = [
            {
                values: [5, 4, 2, 1],
                expected: 6
            },
            {
                values: [4,2,2,3],
                expected: 7
            },
            {
                values: [1,100000],
                expected: 100001
            },
        ]

        describe("with list of integers", () => {

            testCases.forEach(({ values, expected }) => {
                it(`should return ${expected} from a linked list of ${values}`, () => {
                    const linkedList = new SinglyLinkedList(null)
                    for (const data of values) {
                        linkedList.append(data)
                    }
            
                    const actual = linkedList.maxPairSum()
                    expect(actual).toEqual(expected)
                })
            })
        })

        describe("using a stack", () => {
            testCases.forEach(({ values, expected }) => {
                it(`should return ${expected} from a linked list of ${values}`, () => {
                    const linkedList = new SinglyLinkedList(null)
                    for (const data of values) {
                        linkedList.append(data)
                    }
            
                    const actual = linkedList.maximumPairSumStack()
                    expect(actual).toEqual(expected)
                })
            })
        })

        describe('with reversing in place', () => {
            testCases.forEach(({ values, expected }) => {
                it(`should return ${expected} from a linked list of ${values}`, () => {
                    const linkedList = new SinglyLinkedList(null)
                    for (const data of values) {
                        linkedList.append(data)
                    }
            
                    const actual = linkedList.maximumPairSumReverseInPlace()
                    expect(actual).toEqual(expected)
                })
            })
        })
    })

    describe("swapping nodes", () => {
        it(`should swap nodes 2 & 3 in [1->2->3->4->5] to [1->3->2->4->5]`, () => {
            const data = [1, 2, 3, 4, 5]
            const linkedList = new SinglyLinkedList<number, number>(null)

            for (let d of data) {
                linkedList.append(d, d)
            }

            const expected = [1, 3, 2, 4, 5]
            linkedList.swapNodes(2, 3);

            let actualNodes: number[] = []

            let actualHead = linkedList.head

            while (actualHead){
                actualNodes.push(actualHead.data)
                actualHead = actualHead.next
            }

            const zipped = zip(actualNodes, expected)

            for(const [actual, expected] of zipped) {
                expect(actual).toEqual(expected)
            }
        })
    })

    describe("kth to last node", () => {
        type testCase<T> = {
            data: T[];
            n: number;
            expected: T;
        }

        const testCases: testCase<unknown>[] = [
            {
                data: ["A", "B", "C", "D"],
                n: 2,
                expected: "C"
            },
            {
                data: [1, 2, 3, 4],
                n: 2,
                expected: 3
            }
        ]

        testCases.forEach(({ data, n, expected }) => {
            it(`should return ${expected} from data=${data} with n=${n}`, () => {
                const linkedList = new SinglyLinkedList(null);
                for (let d of data) {
                    linkedList.append(d, d);
                }

                const actual = linkedList.kthToLastNode(n);
                expect(actual).toBeTruthy()

                expect(actual?.data).toEqual(expected);
            })
        })
    })
})