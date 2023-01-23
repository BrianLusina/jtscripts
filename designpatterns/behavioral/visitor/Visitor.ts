/* eslint-disable no-unused-vars */
import ConcreteComponentA from './ConcreteComponentA';
import ConcreteComponentB from './ConcreteComponentB';

/**
 * The Visitor interface declares a set of visiting methods that correspond to a component class. The signature of a visiting method
 * allows the visitor to identify the exact class of the component that it is dealing with
 */
export default interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;
  visitConcreteComponentB(element: ConcreteComponentB): void;
}
