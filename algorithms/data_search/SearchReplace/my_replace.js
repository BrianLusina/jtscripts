function myReplace (str, before, after) {
  const arr = str.split(' ') // split into an array
  let character = ''
  let i = 0
  let ind = 0
  let l = ''
  // loop through the array
  for (let x = 0; x < arr.length; x++) {
    // if there is a match in the array to the word to replace
    if (arr[x] === before) {
      // check if any letter in the word is uppercase
      while (i < before.length) {
        character = before.charAt(i) //
        if (character === character.toUpperCase()) {
          ind = before.indexOf(character) // store the index of the capitalized char
          l = after.charAt(ind).toUpperCase()
          after = after.replace(after.charAt(ind), l)
        }
        i++
      }
      arr[x] = after
    }
  }
  str = arr.join(' ')
  return str
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
myReplace('Let us go to the store', 'store', 'mall')// should return "Let us go to the mall".
myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')// should return "He is Sitting on the couch".
myReplace('This has a spellngi error', 'spellngi', 'spelling') // should return "This has a spelling error".
myReplace('His name is Tom', 'Tom', 'john')// should return "His name is John".
myReplace('Let us get back to more Coding', 'Coding', 'algorithms')// should return "Let us get back to more Algorithms".
