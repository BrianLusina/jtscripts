// JS demonstrating us of objects
/* New object contacts using the Object literal Notation. This contacts objects will have other objects as properties
Each object will have their own key-value pair,
    obj = {
    firstName:"",
    lastName:"",
    phone:"",
  }
*/

var contacts = {
	brian: {
		firstName: 'Brian',
		lastName: 'Lusina',
		phone: 789 - 531
	},
	alex: {
		firstName: 'Alex',
		lastName: 'Simon',
		phone: 786 - 132
	},
	lucy: {
		firstName: 'Lucy',
		lastName: 'Locker',
		phone: 535 - 118
	},
	george: {
		firstName: 'George',
		lastName: 'Woodard',
		phone: 423 - 759
	}
};

// this function shall list all the contacts in contacts object
var listContact = function (obj) {
	for (var prop in obj) {
		console.log(prop);
	}
};

/* this is a search function that will allow a user to enter a name and search through contacts object
it will bring up the match of the first name
*/

var searchContact = function (fname) {
// go through each object in contacts object
	for (var s in contacts) {
    // if the name strictly matches any firsNames in objects return it
		if (contacts[s].firstName === name) {
			console.log(contacts[s]);
			return contacts[s];
		}
	}
};

console.log(contacts);
