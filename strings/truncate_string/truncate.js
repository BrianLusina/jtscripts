function truncateString (str, num) {
  const dots = '...'

  if (num < dots.length) {
    return str.slice(0, num) + dots
  }
  if (str.length > num) {
    return str.slice(0, num - dots.length) + dots
  } else {
    return str
  }
}

console.log(truncatetring('pippi', 3))
