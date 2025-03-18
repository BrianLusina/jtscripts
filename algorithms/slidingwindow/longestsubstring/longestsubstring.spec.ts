import { lengthOfLongestSubstringWithoutRepeatingChars } from './longestsubstring';

type TestCase = {
    input: string;
    expected: number;
};

const testCases: TestCase[] = [
    {
        input: 'abcabcbb',
        expected: 3,
    },
    {
        input: 'bbbbb',
        expected: 1,
    },
    {
        input: 'pwwkew',
        expected: 3,
    },
];

describe('Longest Substring Without Repeating Chars', () => {
    testCases.forEach(({ input, expected }) => {
        it(`should return ${expected} for input=${input}`, () => {
            const actual = lengthOfLongestSubstringWithoutRepeatingChars(input);
            expect(actual).toEqual(expected);
        });
    });
});