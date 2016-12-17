function digital_root(n) {
  var strArr = String(n).split("");
  return strArr.reduce(function(x, y){
    return parseInt(x) + parseInt(y);
  });
}