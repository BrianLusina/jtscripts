export interface LinkedListNode<D> {
  data: D;
  next?: LinkedListNode<D> | null;
}
