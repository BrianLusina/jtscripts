export interface LinkedListNode<D> {
  data: D;
  next?: LinkedListNode<D> | null;
}

export interface SinglyLinkedListNode<K, D> {
  data: D;
  key: K;
  next: SinglyLinkedListNode<K, D> | null;
}

export interface DoublyLinkedListNode<K, D> {
  data: D;
  key: K;
  next: DoublyLinkedListNode<K, D> | null;
  previous: DoublyLinkedListNode<K, D> | null;
}
