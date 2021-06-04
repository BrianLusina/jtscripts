function array_diff (a, b) {
  const res = []
  for (let x = 0; x < a.length; x++) {
    for (let i = 0; i < b.length; i++) {
      if (a[x] !== b[i]) {
        res.push(a[x])
      }
    }
  }
  return res
}
