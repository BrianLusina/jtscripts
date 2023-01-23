import Component from './component';
import ConcreteComponentA from './ConcreteComponentA';
import ConcreteComponentB from './ConcreteComponentB';
import ConcreteVisitor1 from './ConcreteVisitor1';
import ConcreteVisitor2 from './ConcreteVisitor2';
import Visitor from './Visitor';

function client(components: Component[], visitor: Visitor) {
  for (const component of components) {
    component.accept(visitor);
  }
}

const components = [new ConcreteComponentA(), new ConcreteComponentB()];

console.log('The client code works with all visitors via the base Visitor interface:');
const visitor1 = new ConcreteVisitor1();
client(components, visitor1);
console.log('');

console.log('It allows the same client code to work with different types of visitors:');
const visitor2 = new ConcreteVisitor2();
client(components, visitor2);
