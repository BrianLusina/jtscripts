/**
 * Checks by how many characters the first string can be moved to match the second
 * @param first word to check for number of characters to rotate.
 * @param second second word
 * @return the number of characters to move the first to match the second
 */
function shiftedDiff(first,second){
  // if they are at all the same, return 0
  // return early
  if(first === second){
    return 0;
  }
  
  // check if the first and second strings are not matching
  // return early
  if(first.length != second.length || !first.match(second)){
    return -1;
  } 
}

module.exports = shiftedDiff
