function calculate (string) {
  const t = string.spltest(' '); const num = []; let res = 0
  for (var x = 0; x < t.length; x++) {
  	if (/\d/.test(t[x])) { num.push(+(t[x])) }
  }

  for (var x = 0; x < t.length; x++) {
  	if (/loses/.test(t[x])) {
  		res = num[0] - num[1]
  		break
  	} else if (/gains/.test(t[x])) {
  		res = num[0] + num[1]
  		break
  	}
  }
  return res
}

function calculate_v2 (string) {
  return eval(string.match(/\d+|lose|gain/g).join('').replace('lose', '-').replace('gain', '+'))
}

console.log(calculate_v2('Panda has 48 apples and gains 4'))
