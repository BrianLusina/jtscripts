function number (busStops) {
  let res = 0
  for (let x = 0; x < busStops.length; x++) {
    res += busStops[x].reduce(function (x, y) {
      		return x - y
    })
  }
  return res
}
