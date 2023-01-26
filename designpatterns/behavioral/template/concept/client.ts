import AbstractClass from './AbstractClass';
import ConcreteClass1 from './ConcreteClass1';
import ConcreteClass2 from './ConcreteClass2';

/**
 * The client code calls the template method to execute the algorithm. Client
 * code does not have to know the concrete class of an object it works with, as
 * long as it works with objects through the interface of their base class.
 */
function client(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

console.log('Same client code can work with different subclasses:');
client(new ConcreteClass1());
console.log('');

console.log('Same client code can work with different subclasses:');
client(new ConcreteClass2());
