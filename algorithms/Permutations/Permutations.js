function permutations (str) {
  const arr = str.split('')
  const len = arr.length
  const perms = []
  let rest; let picked; let restPerms; let next
  if (len === 0) {
    return [str]
  }

  for (let i = 0; i < len; i++) {
    rest = Object.create(arr)
    picked = rest.splice(i, 1)

    restPerms = permutations(rest.join(''))

    for (let j = 0, jLen = restPerms.length; j < jLen; j++) {
      next = picked.concat(restPerms[j])
      perms.push(next.join(''))
    }
  }
  return perms
}

function permAlone (str) {
  const arr = permutations(str)
  const regex = /(.)\1/gi
  const res = []
  for (let x = 0; x < arr.length; x++) {
    console.log('Evaluated word:' + arr[x] + ',Regex: ' + arr[x].match(regex))
   			if (!arr[x].match(regex)) {
        		res.push(arr[x])
    }
  }
  return res.length
}

console.log(permAlone('aab'))
