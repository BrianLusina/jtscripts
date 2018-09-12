module.exports = function telephoneCheck(str) {
	var regex = /^(1\W)?(\([0-9]{3}\)|[0-9]{3})\W?[0-9]{3}\W?[0-9]{4}$/;
 	return regex.test(str);
}