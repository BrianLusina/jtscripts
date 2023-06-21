// reverseVowels reverses all the vowels in the string
export function reverseVowels(word: string): string {
  let leftPointer = 0;
  let rightPointer = word.length - 1;

  const letters = word.split('');

  while (leftPointer < rightPointer) {
    while (leftPointer < rightPointer && !isVowel(word[leftPointer])) {
      leftPointer += 1;
    }

    while (leftPointer < rightPointer && !isVowel(word[rightPointer])) {
      rightPointer -= 1;
    }

    letters[leftPointer] = letters[rightPointer];
    letters[rightPointer] = letters[leftPointer];

    leftPointer += 1;
    rightPointer -= 1;
  }

  return letters.join('');
}

function isVowel(character: string): boolean {
  return (
    character == 'a' ||
    character == 'i' ||
    character == 'e' ||
    character == 'o' ||
    character == 'u' ||
    character == 'A' ||
    character == 'I' ||
    character == 'E' ||
    character == 'O' ||
    character == 'U'
  );
}
