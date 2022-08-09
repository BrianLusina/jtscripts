let s = 0;
for (let x = 2; x < process.argv.length; x++) {
  s += Number(process.argv[x]);
}
console.log(s);
