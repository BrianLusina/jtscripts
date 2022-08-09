class Words {
  count(phrase: string): Map<string, number> {
    const wordMap = new Map<string, number>();
    const singleSpaceRegex = /\s+/;

    const splitWords = phrase.toLowerCase().trim().split(singleSpaceRegex);

    splitWords.forEach((word: string) => {
      let count = wordMap.get(word);
      wordMap.set(word, count ? ++count : 1);
    });

    return wordMap;
  }
}

export default Words;
