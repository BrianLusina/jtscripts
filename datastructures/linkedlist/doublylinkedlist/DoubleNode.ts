import { Node } from '../nodes';

export default class DoubleNode<D> extends Node<D> {
  protected _previous?: DoubleNode<D> | null | undefined;

  constructor(
    data: D,
    previous: DoubleNode<D> | null = null,
    next: DoubleNode<D> | null = null,
    key: string | null = null,
  ) {
    super({ data, next, key });
    this._previous = previous;
  }

  public get previous(): DoubleNode<D> | null | undefined {
    return this._previous;
  }

  public set previous(node: DoubleNode<D> | null | undefined) {
    this._previous = node;
  }
}
