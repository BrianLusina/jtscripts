var PeteTalk = require('../../jssnips/Regex/PeteTalk/pete-talk')

xdescribe('Pete Talk Tests', function () {
	xit('Test 1', function () {
		var pete = new PeteTalk();
		expect(pete.peteTalk('')).toEqual();
	});

	xit('Test 2', function () {
		var pete = new PeteTalk();
		expect(pete.peteTalk('I want to punch someone in the face')).toEqual('I w**t to p***h s*****e in t*e f**e');
	});

	xit('Test 3', function () {
		var pete = new PeteTalk();
		expect(pete.peteTalk('uh!')).toEqual('Uh!');
	});

	xit('Test 4', function () {
		var pete = new PeteTalk();
		expect(pete.peteTalk('What the hell am I doing here? And where is my wallet? PETE SMASH!')).toEqual('W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!');
	});

	xit('Test 5', function () {
		var pete = new PeteTalk();
		expect(pete.peteTalk('I want to punch someone in the face', ['someone', 'face'])).toEqual('I w**t to p***h someone in t*e face');
	});

	xit('Test 6', function () {
		var pete = new PeteTalk();
		expect(pete.peteTalk('I want to punch someone in the face', ['drink', 'job', 'girls'])).toEqual('I w**t to p***h s*****e in t*e f**e');
	});
});
