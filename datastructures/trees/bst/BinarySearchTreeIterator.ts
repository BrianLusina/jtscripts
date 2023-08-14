import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BSTIterator<T> {
  private root: BinarySearchTreeNode<T> | null;
  private stack: BinarySearchTreeNode<T>[] = [];

  constructor(root: BinarySearchTreeNode<T> | null) {
    this.root = root;
    this.stack = [];
    this.leftMostInorder(root);
  }

  private leftMostInorder(root: BinarySearchTreeNode<T> | null | undefined): void {
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }

  next(): T | undefined {
    const topNode = this.stack.pop();

    if (topNode?.right) {
      this.leftMostInorder(topNode.right);
    }

    return topNode?.data;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}
