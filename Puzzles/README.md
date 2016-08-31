# Common Puzzles

This directory contains Puzzles from everyday life solved in JavaScript. Not necessarily everyday life, but basically cool puzzles.

Each directory will contain the problem cases and the tests.

## Name Score

The 26 letters of the English alphabets are randomly divided into 5 groups of 5 letters with the remaining letter being ignored. Each of the group is assigned a score of more than 0. The ignored letter always has a score of 0.

With this kata, write a function nameScore(name) to work out the score of a name that is passed to the function.

The output should be returned as an object:

{'Mary Jane':20}
Only letters have a score. Spaces do not.

You can safely assume that name does not contain any punctuations or symbols. There will also be no empty string or null value.

A static alpha object for testing has been preloaded for your convenience in the following format:

{'ABCDE':1,'FGHIJ':2,'KLMNO':3,'PQRST':4,'UVWXY':5}  //'Z' is ignored
Note that the alpha object will be randomly generated each time you run the test.

Example

In accordance to the above alpha object, the name Mary Jane will have a name score of 20 => M=3 + a=1 + r=4 + y=5 + J=2 + a=1 + n=3 + e=1

---

## Permutations

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Idea: Idea is very simple. We will convert the string to an array. from the array we will pick one character and then permute rest of it. After getting the permutation of the rest of the characters, we will concatenate each of them with the character we have picked.

step-1 First copy original array to avoid changing it while picking elements
step-2 Use splice to remove element from the copied array. We copied the array because splice will remove the item from the array. We will need the picked item in the next iteration.
step-3 [1,2,3,4].splice(2,1) will return [3] and remaining array = [1,2,4]
step-4 Use recursive method to get the permutation of the rest of the elements by passing array as string
step-5 Finally, concat like a+permute(bc) for each
