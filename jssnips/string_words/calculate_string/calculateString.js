function calculate(string) {
  var t = string.split(" "), num=[], res = 0;
  for(var x = 0; x < t.length; x++){
  	if(/\d/.test(t[x]))
  		num.push(+(t[x]));
  }

  for(var x = 0; x < t.length; x++){
  	if(/loses/.test(t[x])){
  		res = num[0] - num[1];
  		break;
  	}else if(/gains/.test(t[x])){
  		res = num[0] + num[1];
  		break;  		
  	}
  }
  return res;
}
