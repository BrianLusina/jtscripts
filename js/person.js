var Person = function(fullName) {
    var name = fullName.split(" ");
    var fName = name[0];
    var lName = name[1];
    
    /*Getters*/
    this.getFirstName= function(){
        return fName;
    };
    
    this.getLastName = function(){
        return lName;
    };
    
    this.getFullName = function(){
        return fullName;
    };
    
    /*Setters*/
    this.setFirstName = function(first){
        fName = first;
    };
    
    this.setLastName = function(last){
        lName = last;
    };
    
    this.setFullName = function(firstlast){
        var newName = firstlast.split(" ");
        this.getFullName = newName[0] + " " + newName[1];
    };
};

/*
console.log(Object.keys(bob).length);// should return 6.
console.log(bob instanceof Person); //should return true.
console.log(bob.firstName); //should return undefined.
console.log(bob.lastName); //should return undefined.
console.log(bob.getFirstName());// should return "Bob".
console.log(bob.getLastName());// should return "Ross".
console.log(bob.getFullName());// should return "Bob Ross".

bob.setFirstName("Haskell");
console.log(bob.getFullName());// should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.setLastName("Curry");
console.log(bob.getFullName());// should return "Haskell Curry" after bob.setLastName("Curry").

bob.setFullName("Haskell Curry");
console.log(bob.getFullName());// should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());// should return "Haskell" after bob.setFullName("Haskell Curry").
bob.setFullName("Haskell Curry");
console.log(bob.getLastName()); //should return "Curry" after bob.setFullName("Haskell Curry")*/

var bob = new Person('Bob Ross');
document.write('<br>');
document.write("Bob's full name " + bob.getFullName());
document.write('<br>');
document.write("Bob's first name " + bob.getFirstName());
document.write('<br>');
document.write("Bob's last name " + bob.getLastName());

bob.setFirstName("Bobby"));
document.write('<br>');
document.write("Bob's new full name " + bob.setFullName("Vaszquez","Nima"));

document.write('<br>');
document.write("Bob's first name " + bob.getFirstName());
document.write('<br>');

bob.setLastName("Waza"));
document.write("Bob's new last name " + bob.getLastName());