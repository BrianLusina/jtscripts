import { LinkedListNode } from '../nodes';

export default class CircularLinkedNode<T> implements LinkedListNode<T> {
  private _data: T;
  private _next?: CircularLinkedNode<T> | null;

  constructor(data: T) {
    this._data = data;
    this._next = null;
  }

  public get data(): T {
    return this._data;
  }

  public set data(v: T) {
    this._data = v;
  }

  public get next(): CircularLinkedNode<T> | null | undefined {
    return this._next;
  }

  public set next(node: CircularLinkedNode<T> | null | undefined) {
    this._next = node;
  }
}
