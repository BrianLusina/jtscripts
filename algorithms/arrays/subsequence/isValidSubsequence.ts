// IsValidSubsequence checks if the sequence is a valid subsequence of the array
export const IsValidSubsequence = (array: number[], sequence: number[]): boolean => {
  if (array.length === 0 || sequence.length > array.length) {
    return false;
  }

  let i = 0,
    j = 0;

  while (i < sequence.length && j < array.length) {
    if (sequence[i] === array[j]) {
      i += 1;
    }
    j += 1;
  }
  return i === sequence.length;
};

export const IsValidSubsequenceV2 = (array: number[], sequence: number[]): boolean => {
  if (sequence.length > array.length || array.length === 0 || sequence.length === 0) {
    return false;
  }

  let seek = 0;

  for (let i = 0; i < array.length; i++) {
    if (sequence[seek] === array[i]) {
      seek += 1;
    }
    if (seek === sequence.length) {
      return true;
    }
  }

  return false;
};
