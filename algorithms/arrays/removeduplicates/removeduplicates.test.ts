import removeDuplicates, { removeDuplicatesTwo } from './removeduplicates';

type testCase = {
	expected: number
	given: number[]
}

const removeDuplicatesTwoTestCases: testCase[] = [
	{
		expected: 5,
		given:    [1, 1, 1, 2, 2, 3],
	},
	{
		expected: 7,
		given:    [0, 0, 1, 1, 1, 1, 2, 3, 3],
	},
]

describe("Remove Duplicates", () => {

    describe("Remove Duplicates test", () => {
        it("returns 2 for [1, 1, 2]", () => {
            let arr = [1, 1, 2];
            expect(removeDuplicates(arr)).toEqual(2);
        });
    })
    
    describe("Remove Duplicates Two", () => {
        removeDuplicatesTwoTestCases.forEach(({ given, expected }) => {
            it(`Given ${given}, should return ${expected}`, () => {
                expect(removeDuplicatesTwo(given)).toEqual(expected);
            });
        })
    })
})
