module.exports = function (word: string) {
  return word.split('').reverse().join('');
};

export function reverseWords(words: string): string {
  const wordList = words.trim().split('');

  const reverseCharacters = (
    messageList: string[],
    frontIndex: number,
    backIndex: number,
  ): string[] => {
    // walk towards the middle, from both sides
    while (frontIndex < backIndex) {
      // swap the front char and back char
      const temp = messageList[frontIndex];
      messageList[frontIndex] = messageList[backIndex];
      messageList[backIndex] = temp;

      frontIndex += 1;
      backIndex -= 1;
    }

    return messageList;
  };

  reverseCharacters(wordList, 0, wordList.length - 1);

  let currentWordStartIndex = 0;

  for (let i = 0; i < wordList.length; i++) {
    // found the end of the current word!
    if (i === wordList.length || wordList[i] === ' ') {
      reverseCharacters(wordList, currentWordStartIndex, i - 1);

      // # if we haven't exhausted the string our
      // # next word's start is one character ahead
      currentWordStartIndex = i + 1;
    }
  }

  return wordList.join('');
}
