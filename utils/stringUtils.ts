/**
 * Checks if a passed in string is alphanumeric. An alphanumeric string or character that is between the range of 0-9, A-Z or a-z.
 * This uses the charCodeAt method on a string to check for code points as it is faster than using a Regex pattern as regex patterns have to be
 * first compiled and scanned to check for validity
 * @param str {string} string to check for alphanumeric property
 * @returns {boolean} true if the string is alphanumeric, false otherwise.
 */
export function isAlphaNumeric(str: string): boolean {
    for (let i = 0, len = str.length; i < len; i++) {
      let code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
};
