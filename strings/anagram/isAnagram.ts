/**
 * Checks if one word is an anagram of another
 * @param subject {string} The subject to compare
 * @param candidate {string} The candidate to compare
 * @returns {boolean} True if the candidate is an anagram of the subject
 */
export default function isAnagram(subject: string, candidate: string): boolean {
  // first normalize the strings by removing white spaces which might result in uneven lengths if s1 and s2 are anagrams of each other
  const original = subject.replace(/\s/g, '').toLowerCase();
  const test = candidate.replace(/\s/g, '').toLowerCase();

  // This map is used to keep track of the character count in the strings to check if the strings are anagrams
  // of each other, the character count must be equal in both strings. This enables the algorithm to keep track of this
  // count.
  const map = new Map<string, number>();

  // Loop through each character in the first string to count the number of characters and store them in the map
  // this is linear, so, O(n) where n is the number of characters in the string as the loop has to iterate over each
  // character
  for (let i = 0; i < original.length; i++) {
    const char = original[i];
    if (map.has(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    } else {
      map.set(char, 1);
    }
  }

  // Loops through each character in the second string checking for the existence of that character in the already
  // populated map. If a character, exists, the count is decremented, if not, the count is incremented. This
  // will be used to show the discrepancy in character count between the two strings
  for (let i = 0; i < test.length; i++) {
    const char = test[i];
    if (map.has(char)) {
      map.set(char, (map.get(char) || 0) - 1);
    } else {
      map.set(char, 1);
    }
  }
  // Finally, check each key in the map. If a given key's count is not equal to 0, then the algorithm exits
  // early as it's not possible to have a character count of more than 0 for strings that are anagrams, since the above
  // loop should have reduced the character count to 0. This shows a discrepancy, meaning there is an extra character
  // in a string that is not in another string
  // eslint-disable-next-line no-unused-vars
  for (const [_, value] of map) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}
