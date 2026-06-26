import { generateHash } from '../../utils/hash';

type TreeNodeOptions<D> = {
  data: D;
  left?: TreeNode<D> | null;
  right?: TreeNode<D> | null;
  children: (TreeNode<D> | null | undefined)[];
  key?: string | null;
  depth?: number | null;
  degree?: number | null;
  height?: number | null;
};

/**
 * Represents an abstract node in a tree list
 */
export abstract class TreeNode<D> {
  protected _data: D;
  protected _left?: TreeNode<D> | null;
  protected _right?: TreeNode<D> | null;
  protected _children: (TreeNode<D> | null | undefined)[];
  protected _key: string;
  protected _depth: number | null | undefined;
  protected _height: number | null | undefined;
  protected _degree: number | null | undefined;

  constructor(opts: TreeNodeOptions<D>) {
    const { data, left, right, key, children, depth, height, degree } = opts;
    this._data = data;
    this._left = left;
    this._right = right;
    this._children = children;
    this._key = key ? key : generateHash(data);
    this._depth = depth;
    this._height = height;
    this._degree = degree;
  }

  public get data(): D {
    return this._data;
  }

  public set data(v: D) {
    this._data = v;
    const hash = generateHash(v);
    this._key = hash;
  }

  public get key(): string {
    return this._key;
  }

  public get left(): TreeNode<D> | null | undefined {
    return this._left;
  }

  public set left(node: TreeNode<D> | null | undefined) {
    this._left = node;
  }

  public get right(): TreeNode<D> | null | undefined {
    return this._right;
  }

  public set right(node: TreeNode<D> | null | undefined) {
    this._right = node;
  }

  public get children(): (TreeNode<D> | null | undefined)[] {
    return this._children;
  }

  public get degree(): number | null | undefined {
    return this._degree;
  }

  public set degree(value: number | null | undefined){
    this._degree = value;
  }

  public get depth(): number | null | undefined {
    return this._depth;
  }

  public set depth(value: number | null | undefined) {
    this._depth = value;
  }

  public get height(): number | null | undefined {
    return this._height;
  }

  public set height(value: number | null | undefined) {
    this._height = value;
  }

  /**
   * Compares two nodes and returns true if they are the same. This comparison is based on the data and the key
   * @param {Node} other Other linked list node
   * @returns {boolean}
   */
  equals(other: TreeNode<D> | null | undefined): boolean {
    if (!other) {
      return false;
    }
    return this._data === other._data || this._key === other._key;
  }
}
