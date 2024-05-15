/* eslint-disable @typescript-eslint/ban-ts-comment */
import CircularLinkedNode from './CircularLinkedNode';

export default class CircularLinkedListIterator<T> implements Iterator<CircularLinkedNode<T>> {
  private currentNode: CircularLinkedNode<T> | null | undefined;
  private previousNode: CircularLinkedNode<T> | null | undefined;
  private done: boolean;

  constructor(private head: CircularLinkedNode<T> | null | undefined) {
    this.currentNode = head;
    this.previousNode = head;
    this.done = false;
  }

  next(): IteratorResult<CircularLinkedNode<T>> {
    if (this.done) {
      return {
        done: true,
        value: undefined,
      };
    }
    if (this.previousNode?.next === this.head) {
      // this means we are at the tail node, so, the tail node needs to be returned
      this.done = true;
      return {
        done: this.done,
        value: this.currentNode,
      };
    }
    const value = this.currentNode;
    // keep track of previous node
    this.previousNode = this.currentNode;
    this.currentNode = this.currentNode?.next;

    // @ts-ignore
    return {
      done: false,
      value,
    };
  }

  //   return?(value?: number | undefined): IteratorResult<CircularLinkedNode<T>, number> {
  //     throw new Error('Method not implemented.');
  //   }

  //   throw?(e?: any): IteratorResult<CircularLinkedNode<T>, number> {
  //     throw new Error('Method not implemented.');
  //   }
}
