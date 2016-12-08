/*A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.*/
function dominator(arr) {
   if(arr.length == 0)
     return -1;
   var modeMap = {};
   var maxEl = arr[0], maxCount = 1;
   for(var i = 0; i < arr.length; i++){
     var el = arr[i];
     if(modeMap[el] == null)
       modeMap[el] = 1;
     else
       modeMap[el]++;
     if(modeMap[el] > maxCount){
       maxEl = el;
       maxCount = modeMap[el];
     }
   }
   return maxEl;
}

console.log(dominator([3,4,3,2,3,1,3,3]));//3);
console.log(dominator([1,2,3,4,5]));//-1);
console.log(dominator([1,1,1,2,2,2]));//-1);
console.log(dominator([1,1,1,2,2,2,2]));//,2);
