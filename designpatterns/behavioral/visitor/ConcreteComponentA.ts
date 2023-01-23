import Component from './component';
import Visitor from './Visitor';

export default class ConcreteComponentA implements Component {
  /**
   * Note that we are calling 'visitConcreteComponentA', which matches the current class name.
   * This way we let the visitor know the class of the component it works with
   * @param {Visitor} visitor Visitor
   */
  accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   * @returns {string} name of class
   */
  exclusiveMethodOfConcreteComponentA(): string {
    return 'A';
  }
}
