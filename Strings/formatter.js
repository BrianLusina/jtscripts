function buildString(...template){
  return "I like " + `${template.join(', ')}`;
}
console.log(buildString(process.argv[2]);