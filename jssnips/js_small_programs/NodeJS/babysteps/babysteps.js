var s = 0;
for (var x = 2; x < process.argv.length; x++) {
	s += Number(process.argv[x]);
}
console.log(s);
