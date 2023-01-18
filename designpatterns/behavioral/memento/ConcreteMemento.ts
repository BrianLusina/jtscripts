import Memento from './Memento';

/**
 * Concrete Memento contains the infrastructure for storing the originator's state
 */
export default class ConcreteMemento implements Memento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  /**
   * Originator uses this method when restoring its state
   * @returns state
   */
  getState(): string {
    return this.state;
  }

  /**
   * used by the caretaker to display metadata
   */
  getName(): string {
    return `${this.date}/ (${this.state.substring(0, 9)})`;
  }

  getDate(): string {
    return this.date;
  }
}
