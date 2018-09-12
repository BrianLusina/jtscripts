
function wherArtThou(collection, source) {
	var arr = [];
  // loop through JSON
	for (var i in source) {} // loop through each prop in source
	for (var x in collection) {
  // check if each obj in JSON has prop and if value is the equal
  	if (collection[x].hasOwnProperty(i) && collection[x][i] === source[i]) {
		arr.push(collection[x]);
    	}
	}
	return arr;
}
