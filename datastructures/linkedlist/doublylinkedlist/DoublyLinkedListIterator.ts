import DoubleNode from './DoubleNode';

export default class DoublyLinkedListIterator<T> implements Iterator<DoubleNode<T>> {
  private currentNode: DoubleNode<T> | null | undefined;
  private done: boolean;

  constructor(node: DoubleNode<T> | null | undefined) {
    this.currentNode = node;
    this.done = false;
  }

  next(): IteratorResult<DoubleNode<T>> {
    // if we are done, exit
    if (this.done) {
      return {
        done: true,
        value: undefined,
      };
    }

    // if the current node is null, then complete iteration
    if (!this.currentNode) {
      this.done = true;
      return {
        done: this.done,
        value: undefined,
      };
    }

    // if there is a next node, it means there is more, so, we move the pointer
    const value = this.currentNode;
    this.currentNode = this.currentNode?.next;
    return {
      done: false,
      value,
    };
  }
}
