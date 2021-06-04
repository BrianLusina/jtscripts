function sumAll (arr) {
  const max = Math.max(arr[0], arr[1])
  const min = Math.min(arr[1], arr[0])
  return (max + min) * (max - min + 1) / 2
}
