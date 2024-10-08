import { createHash } from 'crypto';
import { LinkedListNode } from '../nodes';

export default class CircularLinkedNode<T> implements LinkedListNode<T> {
  private _data: T;
  private _next?: CircularLinkedNode<T> | null;
  private _key: string;

  constructor(data: T, key: string | null = null) {
    this._data = data;
    this._next = null;
    this._key = key ? key : this.generateHash(data);
  }

  private generateHash(data: T): string {
    return createHash('sha1').update(`${data}`).digest('hex');
  }

  public get data(): T {
    return this._data;
  }

  public set data(v: T) {
    this._data = v;
    const hash = this.generateHash(v);
    this._key = hash;
  }

  public get next(): CircularLinkedNode<T> | null | undefined {
    return this._next;
  }

  public set next(node: CircularLinkedNode<T> | null | undefined) {
    this._next = node;
  }

  public get key(): string {
    return this._key;
  }

  /**
   * Compares two nodes and returns true if they are the same. This comparison is based on the data and the key
   * @param {CircularLinkedNode} other Other circular linked list node
   * @returns {boolean}
   */
  equals(other: CircularLinkedNode<T> | null | undefined): boolean {
    if (!other) {
      return false;
    }
    return this._data === other._data || this._key === other._key;
  }
}
