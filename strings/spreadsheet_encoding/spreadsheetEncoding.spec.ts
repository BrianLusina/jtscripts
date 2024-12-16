import spreadSheetEncodeColumn from './spreadsheetEncoding';

type testCase = {
	columnId: string
	expected: number
}

const testCases: testCase[] = [
	{
		columnId: "ZZ",
		expected: 702,
	},
]

describe('SpreadSheet Encode Column', () => {
    testCases.forEach(({ columnId, expected}) => {
        it(`should return ${expected} for ColumnID=${columnId}`, () => {
            const actual = spreadSheetEncodeColumn(columnId);
            expect(actual).toEqual(expected);
        })
    })
})
