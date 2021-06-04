alpha = { ABCDE: 1, FGHIJ: 2, KLMNO: 3, PQRST: 4, UVWXY: 5 }
function nameScore (name) {
  const nameList = name.replace(/\s+/gi, '').toUpperCase().spltest('')
  let score = 0
  const result = {}
  for (const x in alpha) {
    for (let i = 0; i < nameList.length; i++) {
      if (x.indexOf(nameList[i]) !== -1) {
        score += alpha[x]
      }
    }
  }

  result[name] = score
  return result
}
