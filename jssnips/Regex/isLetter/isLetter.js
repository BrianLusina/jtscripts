String.prototype.isLetter = function () {
	return (/^([a-z]{1})$/gi).test(this);
};
