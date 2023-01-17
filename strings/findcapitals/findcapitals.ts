function isUpper(letter: string): boolean {
  return letter === letter.toUpperCase();
}

export default function findCapitals(word: string): number[] {
  const capitals: number[] = [];
  for (const letter of word) {
    if (isUpper(letter)) {
      const index = word.indexOf(letter);
      capitals.push(index);
    }
  }

  return capitals;
}
