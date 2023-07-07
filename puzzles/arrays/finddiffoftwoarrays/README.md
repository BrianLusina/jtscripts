# Find the Difference of Two Arrays

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

```plain
Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2.
Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2.
Therefore, answer[1] = [4,6].
Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once
and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
```

## Solution

### Approach: HashSet

#### Intuition

Instead of iterating over each element in the second array to check if it exists in the list or not, we can store the
elements in a HashSet. Then we can find if an element exists in the list or not in O(1) time

To find the elements that only exist in nums1, we first store the elements in nums2 in the HashSet. Then we iterate over
each element in the list nums1, and for each element, we check if it's there in the HashSet; if yes, we skip the
element; otherwise, we store it in the list onlyInNums1.

#### Algorithm

1. Define method getElementsOnlyInFirstList. This method accepts two lists of integers and returns the elements that are
   present only in the first argument:
    1. Iterate over the elements in the second argument nums2 and store each in the Hashset existsInNums2.
    2. Iterate over the elements in the first argument nums1 and for each element check if it's present in the set
       existsInNums2. If yes, skip to the next element; otherwise, store it in the set onlyInNums1.

2. Call the method getElementsOnlyInFirstList once for the param (nums1, nums2) and then again for (nums2, nums1).

#### Complexity Analysis

Here, N is the length of list nums1, and M is the length of nums2.

##### Time complexity: O(N + M)

For each of the two calls to getElementsOnlyInFirstList we create a hash set from the elements in the second list, which
takes linear time. Then we iterate over the elements in the first list and check in the set if it's present. The find
operation in the set takes O(1) time. Hence, the total time complexity would be O(N + M).

##### Space complexity: O(max(N,M))

The method getElementsOnlyInFirstList need to store elements in the set. In the first call, it would be nums1 elements
and in the second call, it would be nums2 elements. The space required to store the output list is not considered part
of space complexity, and hence the total space complexity would be equal to O(max(N,M)).

## Related Topics

- Array
- Hash Table
