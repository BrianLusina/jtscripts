function fearNotLetter(str) {
  const arr = [];
  for (let x = 0; x < str.length; x++) {
    arr.push(str.charCodeAt(x));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      str = String.fromCharCode(arr[i] + 1);
      break;
    } else {
      str = undefined;
    }
  }
  return str;
}
