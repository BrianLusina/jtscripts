export const isUnique = (inputString: string): boolean => {
  const charSet = new Set<string>();

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
};
