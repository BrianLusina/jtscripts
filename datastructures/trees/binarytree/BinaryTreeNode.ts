import { TreeNode } from '../types';

export default class BinaryTreeNode<T> implements TreeNode<T> {
  data: T;
  readonly children: (TreeNode<T> | null)[];
  left?: BinaryTreeNode<T> | null;
  right?: BinaryTreeNode<T> | null;

  constructor(
    data: T,
    left: BinaryTreeNode<T> | null = null,
    right: BinaryTreeNode<T> | null = null,
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.children = [left, right];
  }
}
