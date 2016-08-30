module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(prev, curr, curr_indx, arr){
        prev.push(fn.call(thisArg, curr, curr_indx, arr));
        return prev;        
    },[]);
}
