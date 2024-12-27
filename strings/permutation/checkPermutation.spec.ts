import {
    checkPermutationWithMap,
    checkPermutationWithSorting,
} from "./checkPermutation";

type testCase = {
    str1: string;
    str2: string;
    expected: boolean;
};

const testCases: testCase[] = [
    {
        str1: "",
        str2: "",
        expected: true,
    },
    { str1: "a", str2: "a", expected: true },
    { str1: "a", str2: "b", expected: false },
    { str1: "ab", str2: "ba", expected: true },
    { str1: "abc", str2: "bca", expected: true },
    { str1: "abc", str2: "bcd", expected: false },
    { str1: "abc", str2: "abcd", expected: false },
    { str1: "abc", str2: "ab", expected: false },
    { str1: "abc", str2: "ac", expected: false },
    { str1: "abc", str2: "bc", expected: false },
    { str1: "abc", str2: "cd", expected: false },
    { str1: "abc", str2: "abd", expected: false },
    { str1: "abc", str2: "acb", expected: true },
    { str1: "abc", str2: "bac", expected: true },
    { str1: "abc", str2: "cab", expected: true },
    { str1: "google", str2: "ooggle", expected: true },
    { str1: "google", str2: "oogleg", expected: true },
    { str1: "not", str2: "top", expected: false },
];

describe("checkPermutationWith", () => {
    describe("checkPermutationWithSorting", () => {
        testCases.forEach(({ str1, str2, expected }) => {
            it(`should return ${expected} for str1 = ${str1} and str2 = ${str2}`, () => {
                const actual = checkPermutationWithSorting(str1, str2);
                expect(actual).toEqual(expected);
            });
        });
    });

    describe("checkPermutationWithMap", () => {
        testCases.forEach(({ str1, str2, expected }) => {
            it(`should return ${expected} for str1 = ${str1} and str2 = ${str2}`, () => {
                const actual = checkPermutationWithMap(str1, str2);
                expect(actual).toEqual(expected);
            });
        });
    });
});
