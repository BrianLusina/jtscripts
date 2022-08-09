import { DoublyLinkedListNode } from '../nodes';

export default class DoubleNode<K, D> implements DoublyLinkedListNode<K, D> {
  data: D;
  key: K;
  next?: DoublyLinkedListNode<K, D> | null | undefined;
  previous?: DoublyLinkedListNode<K, D> | null | undefined;

  constructor(key: K, data: D) {
    this.key = key;
    this.data = data;
    this.next = undefined;
    this.previous = undefined;
  }
}
