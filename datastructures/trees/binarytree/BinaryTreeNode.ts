import { TreeNode } from '../node';

type BinaryTreeNodeOptions<T> = {
  data: T;
  left?: BinaryTreeNode<T> | null;
  right?: BinaryTreeNode<T> | null;
  key?: string | null;
};

export default class BinaryTreeNode<T> extends TreeNode<T> {
  constructor(options: BinaryTreeNodeOptions<T>) {
    const { data, left, right, key } = options;
    super({ data, left, right, key, children: [left, right] });
  }
}
