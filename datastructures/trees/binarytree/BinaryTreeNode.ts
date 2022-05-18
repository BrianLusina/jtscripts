import {TreeNode} from "../types"

export interface BinaryTreeNode<T> extends TreeNode<T> {
  left?: BinaryTreeNode<T> | null
  right?: BinaryTreeNode<T> | null
}
