var PhoneNumber = function () {
};

PhoneNumber.prototype.createPhoneNumber = function (phoneList) {
	return `(${phoneList[0]}${phoneList[1]}${phoneList[2]}) ${phoneList[3]}${phoneList[4]}${phoneList[5]}-${phoneList[6]}${phoneList[7]}${phoneList[8]}${phoneList[9]}`;
};
module.exports = PhoneNumber;
