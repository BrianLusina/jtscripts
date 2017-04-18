function number(busStops) {
	var res = 0;
	for (var x = 0; x < busStops.length; x++) {
		res += busStops[x].reduce(function (x, y) {
      		return x - y;
		});
	}
	return res;
}
