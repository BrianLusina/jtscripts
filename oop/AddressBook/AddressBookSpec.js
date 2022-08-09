/**
 * Created by lusinabrian on 04/03/17.
 */

const AddressBook = require('./AddressBook');
const Contact = require('./Contact');

let addressBook, thisContact;

/**
 * setup each spec with new slate */
test.before(() => {
  addressBook = new AddressBook();
  thisContact = new Contact();

  addressBook.getInitialContacts(() => {
    done();
  });
});

test('should be able to add a contact', () => {
  addressBook.addContact(thisContact);

  t(addressBook.getContact(0)).toBe(thisContact);
});

test('should be able to delete a contact', () => {
  addressBook.addContact(thisContact);
  addressBook.deleteContact(thisContact);

  t(addressBook.getContact(0)).not.toBeDefined();
});

test('should grab initial contacts', function (done) {
  t(addressBook.initialComplete).toBe(true);
  done();
});
