function Xbonacci(signature,n){
  var next = 0, count = 0, sigCopy = signature.slice(), first;
    switch(signature.length){
        case 0:
        case 1:
            return signature;
        case 2:
        for (var x = 0; x < signature.length; x++){
            next = signature[x] + signature[x+1];
            signature.push(next);
            if(signature.length === n)
                break;
        }
            return signature;
        default:
            while (count <= n){
            //console.log("Signature Copy " + sigCopy + " Signature: " + signature);
            next = sigCopy.reduce(function(a,b){return a+b;});
            signature.push(next);
            ++count;
            //copy the new array and remove the first element
            sigCopy = signature.slice();
            first = sigCopy.shift();
            if (signature.length == n)
                break;
        }
            return signature;
    }
}
