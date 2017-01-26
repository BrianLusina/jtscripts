function getShortMessages(messages) {
	return messages.filter(function (obj) {
		return obj.message.length < 50;
	}).map(function (v) {
		return v.message;
	});
}

module.exports = getShortMessages;
