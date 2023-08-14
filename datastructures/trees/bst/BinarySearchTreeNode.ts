import { TreeNode } from '../types';

export default class BinarySearchTreeNode<T> implements TreeNode<T> {
  data: T;
  readonly children: (TreeNode<T> | null)[];
  left?: BinarySearchTreeNode<T> | null;
  right?: BinarySearchTreeNode<T> | null;

  constructor(
    data: T,
    left: BinarySearchTreeNode<T> | null = null,
    right: BinarySearchTreeNode<T> | null = null,
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.children = [left, right];
  }
}
