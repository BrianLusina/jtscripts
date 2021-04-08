/*
Check if number is 1, return string literal of 1
if number is greater, create a range from 1 upto the number
add to an array each string literal (convert each number to a string)
perform a for loop on the reversed array, adding each string to output
remove the last element at each loop using pop
*/
function pattern(n){
 var output = "", range = [], res = [];
 if(n === 1){
   output="1";
 }else{
   for(var i = 1; i <= n; i++){
     range.push(String(i));
   }
   range.reverse();
   for(var x = 0;x < n;x++){
     res.push(range.join(""));
     var last = range.pop();
   }
   output = res.join("\n");
 }
 return output;
}


//console.log(pattern(1));//,"1"));
//console.log(pattern(2));//,"21\n2");
console.log(pattern(5));//,"54321\n5432\n543\n54\n5");
