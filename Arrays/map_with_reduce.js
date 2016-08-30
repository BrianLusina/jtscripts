module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(a, item, indx, arr){
        a.push(fn.call(thisArg, item, indx, arr));
        return a;        
    },[]);
}
