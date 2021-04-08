/*  it uses a regex to create 3 groups: 1) first letter, 2) rest of the word, then 3) either space or end of the string. The "g" in the end of it means that it has not to stop at the first match, but it has to find all the (non overlapping) occurrences of it.
That is the red part; the rest reutilizes the groups (using \$n, with n being the group number) to recompose the string :) */
function pigtest(str) {
	return str.replace(/(\w)(\w*)(\s|$)/g, '\$2\$1ay\$3');
}

console.log(pigtest(process.argv[2]));
