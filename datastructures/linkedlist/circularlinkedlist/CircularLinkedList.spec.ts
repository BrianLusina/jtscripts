import CircularLinkedList from "./CircularLinkedList"
import CircularLinkedNode from "./CircularLinkedNode";

describe('CircularLinkedList', () => {
    describe(`Append`, () => {
        type testCase = {
            data       : any[];
            appendData : any;
            expected   : any[];
        }
        
        const testCases: testCase[] = [
            {
                data:       [1, 2, 3, 4, 5, 6],
                appendData: 7,
                expected:   [1, 2, 3, 4, 5, 6, 7],
            },
        ]

        testCases.forEach(({ data, appendData, expected }) => {
            it(`should append ${appendData} to ${data} to become ${expected}`, () => {
                const circularLinkedList = new CircularLinkedList();
                for (const d of data) {
                    circularLinkedList.append(d)
                }

                circularLinkedList.append(appendData)

                const actualHead = circularLinkedList.head
                expect(actualHead).toBeTruthy()

                const actualData = []

                for (const node of circularLinkedList) {
                    actualData.push(node.data)
                }            

                expect(actualData).toEqual(expected)
            })
        })

    })

    describe(`Prepend`, () => {
        type testCase = {
            initialData       : any[];
            data : any;
            expected   : any[];
        }
        
        const testCases: testCase[] = [
            {
                initialData:       [1, 2, 3, 4, 5, 6],
                data: 7,
                expected:   [7, 1, 2, 3, 4, 5, 6],
            },
        ]

        testCases.forEach(({ initialData, data, expected }) => {
            it(`should prepend ${data} to ${initialData} to become ${expected}`, () => {
                const circularLinkedList = new CircularLinkedList();
                for (const d of initialData) {
                    circularLinkedList.append(d)
                }

                circularLinkedList.prepend(data)

                const actualHead = circularLinkedList.head
                expect(actualHead).toBeTruthy()
                expect(actualHead?.data).toEqual(expected[0])

                const actualData = []

                for (const node of circularLinkedList) {
                    actualData.push(node.data)
                }

                expect(actualData).toEqual(expected)
            })
        })
    })

    describe(`Length`, () => {
        type testCase = {
            data       : any[];
            expected   : number;
        }
        
        const testCases: testCase[] = [
            {
                data:       [1, 2, 3, 4, 5, 6],
                expected:   6,
            },
        ]

        testCases.forEach(({ data, expected }) => {
            it(`should return length of ${expected} for ${data}`, () => {
                const circularLinkedList = new CircularLinkedList();
                for (const d of data) {
                    circularLinkedList.append(d)
                }

                const actual = circularLinkedList.length()
                expect(actual).toEqual(expected)
            })
        })
    })

    describe(`Delete Node By Key`, () => {
        type testCase = {
            initialData       : any[];
            key : any;
            expected   : any[];
        }
        
        const testCases: testCase[] = [
            {
                initialData:       [1, 2, 3, 4, 5, 6],
                key: 3,
                expected:   [1, 2, 4, 5, 6],
            },
        ]

        testCases.forEach(({ initialData, key, expected }) => {
            it(`should deleteNodeByKey(${key}) from ${initialData} to become ${expected}`, () => {
                const circularLinkedList = new CircularLinkedList();
                for (const d of initialData) {
                    circularLinkedList.append(d)
                }

                circularLinkedList.deleteNodeByKey(key)

                const actualHead = circularLinkedList.head
                expect(actualHead).toBeTruthy()
                expect(actualHead?.data).toEqual(expected[0])

                const actualData = []

                for (const node of circularLinkedList) {
                    actualData.push(node.data)
                }

                expect(actualData).toEqual(expected)
            })
        })

    })

    describe(`Delete Node`, () => {
        type testCase = {
            initialData       : any[];
            node : CircularLinkedNode<any>;
            expected   : any[];
        }
        
        const testCases: testCase[] = [
            {
                initialData:       [1, 2, 3, 4, 5, 6],
                node: new CircularLinkedNode(3),
                expected:   [1, 2, 4, 5, 6],
            },
        ]

        testCases.forEach(({ initialData, node, expected }) => {
            it(`should deleteNode(${node}) from ${initialData} to become ${expected}`, () => {
                const circularLinkedList = new CircularLinkedList();
                for (const d of initialData) {
                    circularLinkedList.append(d)
                }

                circularLinkedList.deleteNode(node)

                const actualData = []

                for (const node of circularLinkedList) {
                    actualData.push(node.data)
                }

                expect(actualData).toEqual(expected)
            })
        })

    })
        
    describe(`Split List`, () => {
        type testCase = {
            data       : any[];
            expectedOne : any[];
            expectedTwo   : any[];
        }
        
        const testCases: testCase[] = [
            {
                data:       [1, 2, 3, 4, 5, 6],
                expectedOne: [1, 2, 3],
                expectedTwo:   [4, 5, 6],
            },
        ]

        testCases.forEach(({ data, expectedOne, expectedTwo }) => {
            it(`should splitList from ${data} to become [${expectedOne}, ${expectedTwo}]`, () => {
                const circularLinkedList = new CircularLinkedList();
                for (const d of data) {
                    circularLinkedList.append(d)
                }

                const actual = circularLinkedList.splitList()
                expect(actual).toBeDefined()

                const actualOne = actual?.[0]
                expect(actualOne).toBeDefined()
                
                const actualTwo = actual?.[1]
                expect(actualTwo).toBeDefined()

                const actualDataOne = []
                const actualDataTwo = []

                for (const node of actualOne!) {
                    actualDataOne.push(node.data)
                }
                
                for (const node of actualTwo!) {
                    actualDataTwo.push(node.data)
                }

                expect(actualDataOne).toEqual(expectedOne)
                expect(actualDataOne).toEqual(expectedTwo)
            })
        })

    })

})