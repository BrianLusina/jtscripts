// isPalindromePermutation checks if a string is a palindrome permutation.
export const isPalindromePermutation = (inputStr: string): boolean => {
  // normalize the input string by converting it to lowercase
  const normalizedInputStr = inputStr.replaceAll(' ', '').toLowerCase();

  // create a map to store the frequency of each character
  const frequency = new Map<string, number>();

  // iterate through the input string
  for (const char of normalizedInputStr) {
    if (frequency.has(char)) {
      frequency.set(char, (frequency.get(char) || 0) + 1);
    } else {
      frequency.set(char, 1);
    }
  }

  // create a variable to store the number of odd frequencies
  let oddCount = 0;

  // iterate through the frequency map
  for (const [, count] of frequency) {
    // if the count is odd
    if (count % 2 != 0 && oddCount == 0) {
      // increment the odd count
      oddCount += 1;
    } else if (count % 2 != 0 && oddCount != 0) {
      // if there is more than one character with an odd frequency
      // then it is not a palindrome permutation
      return false;
    }
  }

  // if there is more than one character with an odd frequency
  // then it is not a palindrome permutation
  return true;
};
