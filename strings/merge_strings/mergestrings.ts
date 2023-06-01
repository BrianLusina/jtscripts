export default function mergeAlternately(word1: string, word2: string): string {
  const word1length = word1.length;
  const word2length = word2.length;
  let mergedWord = '';
  let firstPointer = 0;
  let secondPointer = 0;

  while (firstPointer < word1length || secondPointer < word2length) {
    if (firstPointer < word1length) {
      mergedWord += word1[firstPointer];
      firstPointer += 1;
    }

    if (secondPointer < word2length) {
      mergedWord += word2[secondPointer];
      secondPointer += 1;
    }
  }

  return mergedWord;
}

export function mergeAlternately2(word1: string, word2: string): string {
  const word1length = word1.length;
  const word2length = word2.length;
  let mergedWord = '';
  const n = Math.max(word1length, word2length);

  for (let pointer = 0; pointer <= n; pointer++) {
    if (pointer < word1length) {
      mergedWord += word1[pointer];
    }

    if (pointer < word2length) {
      mergedWord += word2[pointer];
    }
  }

  return mergedWord;
}
