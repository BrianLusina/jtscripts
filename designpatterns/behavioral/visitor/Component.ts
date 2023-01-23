import Visitor from './Visitor';

/**
 * The component interface declares an accept method that should take the base visitor interface as an argument
 */
export default interface Component {
  // eslint-disable-next-line no-unused-vars
  accept(visitor: Visitor): void;
}
