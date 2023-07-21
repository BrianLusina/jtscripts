import { LinkedListNode } from '../nodes';

export default class DoubleNode<D> implements LinkedListNode<D> {
  data: D;
  next?: DoubleNode<D> | null | undefined;
  previous?: DoubleNode<D> | null | undefined;

  constructor(data: D) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}
