function diffArray(arr1, arr2) {
  const newArr = [];
  for (let x = 0; x < arr1.length; x++) {
    if (arr2.indexOf(arr1[x]) === -1) {
      newArr.push(arr1[x]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}
