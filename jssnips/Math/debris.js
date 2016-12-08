/**
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var result = [];
    var pi2 = 2 * Math.PI;
    /*Loop through each element in array, in this case, each object
    arr[x] will access each object, arr[x].avgAlt will access the average Altitude value
    arr[x].orbiralPeriod will create a new Property with the new value calculated*/    
    for(var x = 0; x<arr.length; x++){
        var eRadAlt = Math.pow(earthRadius + arr[x].avgAlt,3);
        var c = Math.sqrt(eRadAlt/GM);
        arr[x].orbitalPeriod = Math.round(pi2 * c);
        //delete the arr[x].avgAlt key and value
        delete arr[x].avgAlt;
        result.push(arr[x]);
    }
    return result;
}

console.log(orbitalPeriod([
    {name : "sputnik", avgAlt : 35873.5553}])); //should return [{name: "sputnik", orbitalPeriod: 86400}].

console.log(orbitalPeriod([
    {name: "iss", avgAlt: 413.6},
    {name: "hubble", avgAlt: 556.7},
    {name: "moon", avgAlt: 378632.553}]));
/*should return [
{name : "iss", orbitalPeriod: 5557},
{name: "hubble", orbitalPeriod: 5734},
{name: "moon", orbitalPeriod: 2377399}]
*/