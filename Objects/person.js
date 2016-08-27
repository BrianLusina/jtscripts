/*
$(document).ready(function(){
    $('#codeView').empty().html();
});
*/

var Person = function (firstAndLast) {
    var fullName = firstAndLast;

    /*Getters*/
    this.getFirstName= function(){
        return fullName.split(" ")[0];
    };

    this.getLastName = function(){
        return fullName.split(" ")[1];
    };

    this.getFullName = function(){
        return fullName;
    };

    /*Setters*/
    this.setFirstName = function(first){
        fullName = first + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(last){
        fullName = fullName.split(" ")[0] + " "+ last;
    };

    this.setFullName = function(firstlast){
        fullName = firstlast;
    };
};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length + " should return 6.");
console.log(String(bob instanceof Person) + " should return true");
console.log(bob.firstName + " should return undefined");
console.log(bob.lastName + " should return undefined");
console.log(bob.getFirstName() + " should return 'Bob'");
console.log(bob.getLastName() + " should return 'Ross'");
console.log(bob.getFullName()+" should return 'Bob Ross'");
console.log("Above Tests pass")

bob.setFirstName("Haskell");
console.log(bob.getFullName() + "  should return 'Haskell Ross' after bob.setFirstName('Haskell')");
bob.setLastName("Curry");
console.log(bob.getFullName() + " should return 'Haskell Curry' after bob.setLastName('Curry').");

bob.setFullName("Haskell Curry");
console.log(bob.getFullName()+ " should return 'Haskell Curry' after bob.setFullName('Haskell Curry').");
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName() + " should return 'Haskell' after bob.setFullName('Haskell Curry').");
bob.setFullName("Haskell Curry");
console.log(bob.getLastName() + " should return 'Curry' after bob.setFullName('Haskell Curry')");

var bob = new Person('Bob Ross');
document.getElementById('#output').innerHTML("Bob's full name " + bob.getFullName());
console.log("Bob's first name " + bob.getFirstName());

bob.setFirstName("Bobby");
console.log("Bob's new full name " + bob.setFullName("Vaszquez","Nima"));

console.log("Bob's first name " + bob.getFirstName());

bob.setLastName("Waza");
console.log("Bob's new last name " + bob.getLastName());
