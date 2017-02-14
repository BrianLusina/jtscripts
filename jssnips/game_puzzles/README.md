# Common Puzzles

This directory contains Puzzles from everyday life solved in JavaScript. Not necessarily everyday life, but basically cool puzzles.

Each directory will contain the problem cases and the tests.


## Permutations

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Idea: Idea is very simple. We will convert the string to an array. from the array we will pick one character and then permute rest of it. After getting the permutation of the rest of the characters, we will concatenate each of them with the character we have picked.

step-1 First copy original array to avoid changing it while picking elements
step-2 Use splice to remove element from the copied array. We copied the array because splice will remove the item from the array. We will need the picked item in the next iteration.
step-3 [1,2,3,4].splice(2,1) will return [3] and remaining array = [1,2,4]
step-4 Use recursive method to get the permutation of the rest of the elements by passing array as string
step-5 Finally, concat like a+permute(bc) for each
