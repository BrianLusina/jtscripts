/**
 * Created by lusinabrian on 04/03/17.
 */
function AddressBook () {
  this.contacts = []
  this.initialComplete = false
}

/**
 * Adds a contact to the address book. will simply push the contact on the the array
 * @param{Object} contact, the contact to add to the address book
 * */
AddressBook.prototype.addContact = function (contact) {
  this.contacts.push(contact)
}

/**
 * retrieves a contact from the Address book based on the index
 * @param index, the index of the contact to fetch
 * @returns the contact */
AddressBook.prototype.getContact = function (index) {
  return this.contacts[index]
}

/**
 * Deletes a contact from the address book. an index of the contact is passed onto the function
 * which retrieves the contact and deletes it
 * */
AddressBook.prototype.deleteContact = function (index) {
  this.contacts.splice(index, 1)
}

/**
 * retrieves the initial contact book from an api asynchronously
 *
 * */
AddressBook.prototype.getInitialContacts = function (contactBook) {
  const self = this

  setTimeout(function () {
    self.initialComplete = true
    if (contactBook) {
      return contactBook()
    }
  }, 3)
}

module.exports = AddressBook
