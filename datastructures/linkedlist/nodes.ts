import { createHash } from 'crypto';

export interface LinkedListNode<D> {
  data: D;
  next?: LinkedListNode<D> | null;
}

type NodeOptions<D> = {
  data: D;
  next?: Node<D> | null;
  key: string | null;
};

/**
 * Represents an abstract node in a linked list
 */
export abstract class Node<D> {
  protected _data: D;
  protected _next?: Node<D> | null;
  protected _key: string;

  constructor(opts: NodeOptions<D>) {
    const { data, next, key } = opts;
    this._data = data;
    this._next = next;
    this._key = key ? key : this.generateHash(data);
  }

  private generateHash(data: D): string {
    return createHash('sha1').update(`${data}`).digest('hex');
  }

  public get data(): D {
    return this._data;
  }

  public set data(v: D) {
    this._data = v;
    const hash = this.generateHash(v);
    this._key = hash;
  }

  public get next(): Node<D> | null | undefined {
    return this._next;
  }

  public set next(node: Node<D> | null | undefined) {
    this._next = node;
  }

  public get key(): string {
    return this._key;
  }

  /**
   * Compares two nodes and returns true if they are the same. This comparison is based on the data and the key
   * @param {Node} other Other linked list node
   * @returns {boolean}
   */
  equals(other: Node<D> | null | undefined): boolean {
    if (!other) {
      return false;
    }
    return this._data === other._data || this._key === other._key;
  }
}
