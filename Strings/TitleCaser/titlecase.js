function titleCase(str) {
  return str.replace(/\w\S*/g,function(txt){
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

titleCase("I'm a little tea pot"); //returns "I'm A Little Tea Pot"