import { LinkedListNode } from '../nodes';

type SinglyLinkedListNodeOption<K, D> = {
  data: D;
  next?: SinglyLinkedListNode<K, D> | null;
  key?: K | null;
};

/**
 * Represents a singly linked list node in a singly linked list
 */
export default class SinglyLinkedListNode<K, D> implements LinkedListNode<D> {
  key: K | null;
  data: D;
  next: SinglyLinkedListNode<K, D> | null;

  constructor(data: D, next: SinglyLinkedListNode<K, D> | null = null, key: K | null = null) {
    this.data = data;
    this.next = next;
    this.key = key;
  }

  static create<K, D>(option: SinglyLinkedListNodeOption<K, D>): SinglyLinkedListNode<K, D> {
    const { data, next, key } = option;
    return new SinglyLinkedListNode(data, next, key);
  }
}
