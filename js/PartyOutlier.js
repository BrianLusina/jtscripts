/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The integers in the array are either entirely odd or entirely even except for a single integer N. Write a method that takes the array as an argument and returns N.
For example:
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160
*/
function findOutlier(integers){
  integers.filter(function(v){
    if(v%2 === 0){
    	return v;
    }
  });
}

console.log(findOutlier([0, 1, 2])); //1)
console.log(findOutlier([1, 2, 3])); //2)
console.log(findOutlier([2,6,8,10,3])); //3)
console.log(findOutlier([0,0,3,0,0])); //3)
console.log(findOutlier([1,1,0,1,1])); //0)
