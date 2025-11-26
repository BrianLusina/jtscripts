export const findRepeatedDnaSequences = (dnaSequence: string): string[] => {
  const toIntMap: Record<string, number> = { A: 0, C: 1, G: 2, T: 3 };
  const encodedSequence: number[] = [];
  for (const c of dnaSequence) {
    const n = toIntMap[c];
    encodedSequence.push(n);
  }

  const dnaSequenceLength = dnaSequence.length; // Length of DNA sequence to check
  const dnaSequenceSubstrLength = 10;

  if (dnaSequenceLength <= dnaSequenceSubstrLength) {
    return [];
  }

  const baseAEncoding = 4; // Base-4 encoding
  let rollingHashValue = 0;
  const output = new Set<string>(); // Sets to track hashes and repeated sequences map[string]bool{}
  const seenHashes: Set<number> = new Set();
  let aK = 1; // Stores a^k for hash updates

  // Compute the initial hash using base-4 multiplication
  for (let i = 0; i < dnaSequenceSubstrLength; i++) {
    rollingHashValue = rollingHashValue * baseAEncoding + encodedSequence[i];
    aK *= baseAEncoding; // Precompute a^k for later use in rolling hash updates
  }

  // Store the initial hash
  seenHashes.add(rollingHashValue);

  // Sliding window approach to update the hash efficiently
  for (let start = 1; start < dnaSequenceLength - dnaSequenceSubstrLength + 1; start++) {
    // Remove the leftmost character and add the new rightmost character
    rollingHashValue =
      rollingHashValue * baseAEncoding -
      encodedSequence[start - 1] * aK +
      encodedSequence[start + dnaSequenceSubstrLength - 1];

    // If this hash has been seen_hashes before, add the corresponding substring to the output
    const found = seenHashes.has(rollingHashValue);
    if (found) {
      const d = dnaSequence.substring(start, start + dnaSequenceSubstrLength);
      output.add(d);
    } else {
      seenHashes.add(rollingHashValue);
    }
  }

  // Convert set to list before returning
  const result = [];
  for (const k of output) {
    result.push(k);
  }
  return result;
};

export const findRepeatedDnaSequencesNaive = (dnaSequence: string): string[] => {
  if (dnaSequence.length <= 10) {
    return [];
  }

  const resultSet: Set<string> = new Set();
  const seen: Set<string> = new Set();

  for (let idx = 0; idx < dnaSequence.length; idx++) {
    if (idx + 10 > dnaSequence.length) {
      break;
    }
    const subsequence = dnaSequence.substring(idx, idx + 10);
    if (subsequence.length < 10) {
      continue;
    }
    if (seen.has(subsequence)) {
      resultSet.add(subsequence);
    } else {
      seen.add(subsequence);
    }
  }
  const result = [];
  for (const k of resultSet) {
    result.push(k);
  }
  return result;
};
