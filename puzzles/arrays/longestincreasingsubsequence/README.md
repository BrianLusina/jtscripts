# Longest Increasing Subsequence

Find the longest increasing subsequence of a given array of integers, A.

In other words, find a subsequence of array in which the subsequence's elements are in strictly increasing order, and in
which the subsequence is as long as possible.

In this case, return the length of the longest increasing subsequence.

```plain
Input 1:

A = [1, 2, 1, 5]
Output = 3
The longest increasing subsequence: [1, 2, 5]

Input 2:

A = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
Output = 6
 The possible longest increasing subsequences: [0, 2, 6, 9, 13, 15] or [0, 4, 6, 9, 11, 15] or [0, 4, 6, 9, 13, 15]
 
Input 3:
arr[] = {3, 10, 2, 1, 20}
Output: 3
Explanation: The longest increasing subsequence is 3, 10, 20

Input 4:
arr[] = {3, 2}
Output:1
Explanation: The longest increasing subsequences are {3} and {2}

Input 5:
arr[] = {50, 3, 10, 7, 40, 80}
Output: 4
Explanation: The longest increasing subsequence is {3, 7, 40, 80}
```

## Solution

### Approach: Binary Search

We can achieve the solution using binary search. The method is called Patience Sorting and involves creating piles of numbers to stack our numbers on top. This piles array is what we will binary search over.

For each number in nums we can run a binary search on our piles array to find where we can place the number. We are looking for the best position in the
piles array where we can "place" our number on top. If the number is greater than all numbers, we create a new pile and append the number to
piles, if not, binary search will find us a number to place it on top of. Meaning we overwrite the number with the current number.

By "placing" the number on top of the pile in which the number is less than, we create an array in which the "top" number of each pile is in increasing order which allows us to binary search. This also means that the length of piles array represents our longest increasing subsequence.

Time Complexity: O(nlogn), where n is the length of nums. For each number in nums we are going to do a binary search over our piles array, which in the worst case may be size n.

Space Complexity: O(n), our piles array may be of size n in the worst case.

## Related Topics

- Array
- Binary Search
- Dynamic Programming
