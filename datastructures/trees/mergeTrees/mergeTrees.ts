import { BinaryTreeNode } from '../node';

/**
 * Merges 2 Trees
 * @param {BinaryTreeNode} root1 Root of Binary Tree 1
 * @param {BinaryTreeNode} root2 Root of Binary Tree 2
 * @returns {BinaryTreeNode} Final merged Binary tree
 */
export function mergeTrees(
  root1: BinaryTreeNode<number> | null | undefined,
  root2: BinaryTreeNode<number> | null | undefined,
): BinaryTreeNode<number> | null | undefined {
  if (!root1) {
    return root2;
  }

  if (!root2) {
    return root1;
  }

  root1.data += root2.data;

  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
}
