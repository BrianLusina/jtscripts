/**
 * Created by lusinabrian on 04/03/17.
 */
var test = require("ava");
var expect = require("expect")
const AddressBook = require("./AddressBook");
const Contact = require("./Contact");

let addressBook, thisContact;

/**
 * setup each spec with new slate*/
test.before(t => {
  addressBook = new AddressBook();
  thisContact = new Contact();

  addressBook.getInitialContacts(t => {
    done();
  });
});

test("should be able to add a contact", t => {
  addressBook.addContact(thisContact);

  expect(addressBook.getContact(0)).toBe(thisContact);
});

test("should be able to delete a contact", t => {

  addressBook.addContact(thisContact);
  addressBook.deleteContact(thisContact);

  expect(addressBook.getContact(0)).not.toBeDefined();

});

test("should grab initial contacts", function (done) {
  expect(addressBook.initialComplete).toBe(true);
  done();
});
