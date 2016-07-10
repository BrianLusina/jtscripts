/**Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.**/
//noprotect
function smallestCommons(arr) {
  arr = arr.sort();
  var j =arr[1],i=arr[0];
  var lcm = j;
  for(var k=j;; k++){
    var islcm = true;
    for(var l=j; l>=i; l--){
      if(k%l !== 0){
        islcm = false;
        break;
      }
    }

    if(islcm){
      lcm = k;
      break;
    }

  }
  return lcm;
}


smallestCommons([1,5]);


/*Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).*/
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function(num){
  return num % 2 === 0;
});


/**
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.*/
function dropElements(arr, func) {
  while(!func(arr[0])){
  	arr.shift();
    if(arr.length === 0){
    	break;
    }
  }
 return arr;
}


/**
Flatten a nested array. You must account for varying levels of nesting.

**/
function steamrollArray(arr) {
		var res = [];
    flatten(arr);

    function flatten(a){
  		for(var x = 0;x<a.length;x++){
  			if(!Array.isArray(a[x])){
      		res.push(a[x]);
    		}else{
      		flatten(a[x]);
	  		}
  		}
		}

  return res;
}






/**
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/
function truthCheck(collection, pre) {
	var keys=[];
  var boo;
  var arr=[0,null,undefined,NaN,""];
	for(var x in collection){
  	keys = Object.keys(collection[x]);
    if(keys.indexOf(pre)=== -1){
    		boo = false;
        break;
    }else if(arr.indexOf(collection[x][pre])!==-1 || Number.isNaN(collection[x][pre])){
    	boo=false;
      break;
    }else{
    	boo= true;
    }
  }
  return boo;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));// should return true.

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));// should return false.

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));// should return false.

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"));// should return false

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"));// should return true

console.log(truthCheck([{"single": "yes"}], "single"));// should return true

console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));// should return false

console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"));// should return false

console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));// should return false


/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.*/
function addTogether() {
    var args = Array.prototype.slice.call(arguments);
    function validNumber(test){
        if (typeof test !== 'number'){
            return false;
        }else{
            return true;
        }
    }
    if(args.length >=2){
    		for(var x = 0;x<args.length;x++){
        	if(validNumber(args[x]) && validNumber(args[x+1])){
          		return args.reduce(function(x,y){
              						return x+y;
                          });
        	}else{
          		return undefined;
          }
        }
    }else{
        if(!validNumber(args[0])){
            //if not a valid number
            return undefined;
        }else{
            return function(newNumber){
                if(validNumber(newNumber)){
                    return args[0] + newNumber;
                }else{
                    return undefined;
                }
            };
        }
    }
}

console.log(addTogether(2, 3));// should return 5.
console.log(addTogether(2, 3, 4));// should return 5.
console.log(addTogether(2, 3, 4,"5"));// should return 5.
var sum =addTogether(2);
console.log(sum(3));// should return 5.
console.log(addTogether("http://bit.ly/IqT6zt"));// should return undefined.
console.log(addTogether(2, "3"));// should return undefined.
var add = addTogether(2);
console.log(add([3]));// should return undefined
