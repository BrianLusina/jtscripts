/**
 * spreadsheetEncodeColumn encodes a Spreadsheet column ID as an integer and returns it.
 * Here the encoding uses the alphabets A, B, C, etc. and
 * further uses the indexing of the alphabet starting from 1 like: A=1, B=2, C=3,..., Z=26
 * Complexity
 * Where n represents the number of characters in the column_id
 * - Time O(n) as we iterate over each character in the column ID to calculate the encoding
 * - Space O(1) no extra space is required to perform the encoding
 * @param {string} columnId Column ID to encode
 * @returns {number} encoded column ID as an integer
 */
const spreadsheetEncodeColumn = (columnId: string): number => {
    let num = 0;
    // count will help in determining the power of the base as we convert the column id into the corresponding integer
    let count = columnId.length - 1

    for (let idx =0;idx< columnId.length;idx++) {
		// we use the base 26 system here as there are 26 letters in the alphabet
		// each character here is a string, but, we need to determine the unicode code point for it. We use string.codePointAt(idx) to get
        // the unicode code point of a character in the string. If undefined is returned we throw early and exit.
		// In order to make sure that A=1, we need to determine the relative difference from this rune and 'A' & from the representation
		// we require for base 26 system
		// Now we know that the unicode code point of 'A' equals 65. So if we find the Unicode code point of a character,
		// subtract 'A' from it, and then add 1 to it, we’ll get the representation we want for the base 26 system.

        const codePoint = columnId.codePointAt(idx);
        if (!codePoint) {
            throw Error(`Code point for character at idx ${idx} for ${columnId} is undefined`)
        }

        const base = Math.pow(26, count)
        const diff = (codePoint - 65 + 1);
        num += base * diff
        count-=1;
    }

    return num
}

export default spreadsheetEncodeColumn;
