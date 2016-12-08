function sumAll(arr){
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[1],arr[0]);
  return (max + min) * (max - min+1)/2;
}
