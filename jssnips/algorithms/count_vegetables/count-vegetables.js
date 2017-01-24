function countVegetables(string){
  var veggies = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
  var counter = 0, obj= {};
  var arr = string.split(" ");

  for(var x = 0;x < arr.length; x++){
    for(var y = 0;y < veggies.length;y++){
      if(arr[x] === veggies[y]){
        if(obj.hasOwnProperty(veggies[y])){
            obj.veggies[y] = counter++;
        }
      }
    }
  }
  return obj;
}

module.exports = countVegetables;
