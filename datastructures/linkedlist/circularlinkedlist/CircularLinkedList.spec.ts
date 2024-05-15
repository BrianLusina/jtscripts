import CircularLinkedList from "./CircularLinkedList"

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
})