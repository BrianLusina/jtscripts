import ConcreteMemento from './ConcreteMemento';
import Memento from './Memento';

const getRandomString = (length = 10): string => {
  const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // eslint-disable-next-line prefer-spread
  return Array.apply(null, { length })
    .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
    .join('');
};

/**
 * The Originator holds some important state that may change over time. It also defines a method for saving the state inside a memento
 * and another method for restoring state from it
 */
export default class Originator {
  /**
   * For the sake of simplicity, the originator's state is stored inside a single variable
   */
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is ${state}`);
  }

  doSomething(): void {
    console.log(`Originator: I'm doing something important`);
    this.state = getRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  /**
   * saves the current state inside a memento
   * @returns {Memento}
   */
  save(): Memento {
    return new ConcreteMemento(this.state);
  }

  /**
   * Restores the state of the Originator from the memento object
   * @param memento Memento object used to restore state
   */
  restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to ${this.state}`);
  }
}
