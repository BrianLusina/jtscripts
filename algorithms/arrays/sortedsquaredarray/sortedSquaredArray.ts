export const sortedSquaredArray = (array: number[]): number[] => {
  const { length } = array;
  if (length == 0) {
    return [];
  }

  const result = Array(length).fill(0);
  let left = 0,
    right = length - 1;

  for (let i = length - 1; i >= 0; i--) {
    const leftAbs = Math.abs(array[left]),
      rightAbs = Math.abs(array[right]);
    if (leftAbs > rightAbs) {
      const square = leftAbs * leftAbs;
      result[i] = square;
      left += 1;
    } else {
      const square = rightAbs * rightAbs;
      result[i] = square;
      right -= 1;
    }
  }

  return result;
};

export const sortedSquaredArray2 = (array: number[]): number[] => {
  const { length } = array;
  if (length === 0) {
    return [];
  }

  const result = Array(length).fill(0);
  let left = 0,
    right = length - 1;

  for (let i = length - 1; i >= 0; i--) {
    const leftSquare = array[left] * array[left],
      rightSquare = array[right] * array[right];
    if (leftSquare > rightSquare) {
      result[i] = leftSquare;
      left += 1;
    } else {
      result[i] = rightSquare;
      right -= 1;
    }
  }

  return result;
};
