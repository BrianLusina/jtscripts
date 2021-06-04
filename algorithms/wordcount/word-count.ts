class Words {
  count(phrase: string): Map<String, number> {
    const wordMap = new Map<String, number>()
    const singleSpaceRegex = /\s+/

    const splitWords = phrase.toLowerCase().trim().split(singleSpaceRegex)

    splitWords.forEach((word: string) => {
      let count = wordMap.get(word)
      wordMap.set(word, count ? ++count : 1)
    })

    return wordMap
  }
}

export default Words
