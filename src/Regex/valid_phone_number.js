function validPhoneNumber(phoneNumber) {
	var reg = /^\([0-9]{3}\)\s[0-9]{3}\-[0-9]{4}$/g;
	return reg.test(phoneNumber);
}
