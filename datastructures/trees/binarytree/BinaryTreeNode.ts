import { TreeNode } from '../types';

export default class BinaryTreeNode<T> implements TreeNode<T> {
  data: T;
  children: TreeNode<T>[];
  left?: BinaryTreeNode<T> | null;
  right?: BinaryTreeNode<T> | null;

  constructor(data: T) {
    this.data = data;
  }
}
