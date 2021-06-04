function searchNames (logins) {
  const res = logins.filter(function filterFn (logins) {
  	for (let x = 0; x < logins.length; x++) {
      if (logins[x].charAt(logins[x].length - 1) === '_') {
        return logins[x]
      }
  	}
  })
  return res
}
