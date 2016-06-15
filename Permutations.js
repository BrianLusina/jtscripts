/**
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Idea: Idea is very simple. We will convert the string to an array. from the array we will pick one character and then permute rest of it. After getting the permutation of the rest of the characters, we will concatenate each of them with the character we have picked.
step-1 First copy original array to avoid changing it while picking elements
step-2 Use splice to removed element from the copied array. We copied the array because splice will remove the item from the array. We will need the picked item in the next iteration.
step-3 [1,2,3,4].splice(2,1) will return [3] and remaining array = [1,2,4]
step-4 Use recursive method to get the permutation of the rest of the elements by passing array as string
step-5 Finally, concat like a+permute(bc) for each

*/

function permutations(str){
var arr = str.split(''),len = arr.length, perms = [],rest,picked,restPerms,next;
    if (len === 0)
        return [str];

    for (var i=0; i<len; i++)
    {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));

       for (var j=0, jLen = restPerms.length; j< jLen; j++)
       {
           next = picked.concat(restPerms[j]);
           perms.push(next.join(''));
       }
    }
   return perms;
}

function permAlone(str) {
   var arr = permutations(str),regex = /(.)\1/gi, res =[];
   for(var x =0;x<arr.length;x++){
   console.log("Evaluated word:" + arr[x] + ",Regex: " + arr[x].match(regex));
   			if(!arr[x].match(regex)){
        		res.push(arr[x]);
        }
   }
   return res.length;
}
    
console.log(permAlone("aab"));
