function Spy(target, method) {
	var spy = {count: 0};
	var oldie = target[method];

	target[method] = function () {
		spy.count++;
		return oldie.apply(target, arguments);
	};

	return spy;
}

module.exports = Spy;
