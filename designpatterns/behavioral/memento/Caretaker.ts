import Memento from './Memento';
import Originator from './Originator';

/**
 * The Caretaker does not depend on the concrete memento class. Therefore, it does not have access to the originator's state,
 * stored inside the memento. It works with all mementos via the base memento interface.
 */
export default class Caretaker {
  private mementos: Memento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  backup(): void {
    console.log(`\nCaretaker: saving originator's state...`);
    this.mementos.push(this.originator.save());
  }

  undo(): void {
    if (!this.mementos.length) {
      return;
    }

    const memento = this.mementos.pop();
    if (memento) {
      console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
      this.originator.restore(memento);
    }
  }

  showHistory(): void {
    console.log('Caretaker: Here is the list of mementos:');
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}
