function searchNames( logins ){
  var res = logins.filter(function filterFn(logins){
  	for(var x=0;x<logins.length;x++){
      if(logins[x].charAt(logins[x].length-1) === "_"){
        return logins[x];
			}
  	}
	});
  return res;
}

