export const arbitraryPrecisionIncrement = (input: number[]): number[] => {
  const result = [...input];
  result[result.length - 1] += 1;

  for (let i = result.length - 1; i > 0; i--) {
    if (result[i] !== 10) {
      break;
    }

    result[i] = 0;
    result[i - 1] += 1;
  }

  if (result[0] === 10) {
    result[0] = 1;
    result.push(0);
  }

  return result;
};
