import { findRepeatedDnaSequences, findRepeatedDnaSequencesNaive } from "./repeatedDnaSequences";

type testCase = {
	dnaSequence: string;
	expectedResult: string[];
}

const testCases: testCase[] = [
	{
		dnaSequence: "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",
		expectedResult: ["AAAAACCCCC", "CCCCCAAAAA"],
	},
	{
		dnaSequence: "AAAAAAAAAAAAA",
		expectedResult: ["AAAAAAAAAA"],
	},
	{
		dnaSequence: "GGGGGGGGGGGGGGGGGGGG",
		expectedResult: ["GGGGGGGGGG"],
	},
	{
		dnaSequence: "TTTGGGAAATTTGGGAAACC",
		expectedResult: [],
	},
	{
		dnaSequence: "AAAAAAAAAAAAA",
		expectedResult: ["AAAAAAAAAA"],
	},
	{
		dnaSequence: "ACGTACGTACGTACGTACGTACGTACGTACGT",
		expectedResult: ["ACGTACGTAC", "CGTACGTACG", "GTACGTACGT", "TACGTACGTA"],
	},
	{
		dnaSequence: "GTACGTACGTACGCCCCCCCCGGGGG",
		expectedResult: [],
	},
];

describe("findRepeatedDnaSequences", () => {
	describe("Sliding Window", () => {
		testCases.forEach(( { dnaSequence, expectedResult } ) => {
			test(`dnaSequence: ${dnaSequence}`, () => {
				const actualResult = findRepeatedDnaSequences(dnaSequence);
				expect(actualResult.sort()).toEqual(expectedResult.sort());
			});
		});
	});

	describe("Naive", () => {
		testCases.forEach(( { dnaSequence, expectedResult } ) => {
			test(`dnaSequence: ${dnaSequence}`, () => {
				const actualResult = findRepeatedDnaSequencesNaive(dnaSequence);
				expect(actualResult.sort()).toEqual(expectedResult.sort());
			});
		});
	});
});
