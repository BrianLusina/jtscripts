function sym() {
  var ans = [], cnts = {}, currentMap;

  //Count through arguments
	for(var x = 0; x<arguments.length; x++){
  		currentMap = {};
  		//count each item in each array
  		arguments[x].forEach(function(item){
    		//if the object has the property of array item, increase its count
        if(!currentMap.hasOwnProperty()){
        		if(cnts.hasOwnProperty(item)){
      				++cnts[item].cnt;
      			}else{
      				//initialize the cnt and value
        			cnts[item] = {cnt: 1, val: item};
      			}
         		// keep track of whethere we've already counted this item in this array
        		currentMap[item] = true;
    	}});
    }
    //loop through each property of object
    for(var item in cnts){
    	//if the object has the property and has a count of 1, push it to the final array
    	if(cnts.hasOwnProperty(item) && cnts[item].cnt ===1)
      		ans.push(cnts[item].val);
      }
    return ans;
  }

console.log(sym([1, 2, 3], [5, 2, 1, 4]));// should return [3, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))// should return [1, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));// should contain only three elements.
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));// should return [1, 4, 5].
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));// should contain only three elements.
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));// should return [2, 3, 4, 6, 7].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));// should contain only five elements.
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));// should return [1, 2, 4, 5, 6, 7, 8, 9].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));// should contain only eight elements.
