/*/*/
function Xbonacci(signature,n){
  var next = 0, count = 0, sigCopy = signature.slice(), first;
  if(signature.length === 1 || signature.length === 0){
    return signature;
  }
  else if(signature.length === 2){
    for (var x = 0; x < signature.length; x++){
      next = signature[x] + signature[x+1];
      signature.push(next);
      if(signature.length === n)
        break;
    }
  }else{
    for(var x = 0; x < signature.length;x++){
      next = sigCopy.reduce(function(a, b){return a+b;});
      signature.push(next);
      sigCopy = signature.slice();
      first = sigCopy.shift();
      if(signature.length === n){
        break;
      }
    }
  }

  return signature;
}

Test.assertSimilar(Xbonacci([0,1],10),[0,1,1,2,3,5,8,13,21,34])
Test.assertSimilar(Xbonacci([1,1],10),[1,1,2,3,5,8,13,21,34,55])
Test.assertSimilar(Xbonacci([0,0,0,0,1],10),[0,0,0,0,1,1,2,4,8,16])
Test.assertSimilar(Xbonacci([1,0,0,0,0,0,1],10),[1,0,0,0,0,0,1,2,3,6])
