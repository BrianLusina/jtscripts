/**
 * Created by lusinabrian on 04/03/17.
 */
function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = this.firstName + " " + this.lastName;

  /* Getters */
  this.getFirstName = function () {
    return this.firstName;
  };

  this.getLastName = function () {
    return this.lastName;
  };

  this.getFullName = function () {
    return this.fullName;
  };

  /* Setters */
  this.setFirstName = function (first) {
    this.firstName = first;
  };

  this.setLastName = function (last) {
    this.lastName = last;
  };

  this.setFullName = function (fullName) {
    this.fullName = fullName;
  };

}

module.exports = Contact;
