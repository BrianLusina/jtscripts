export type TreeNode<T> = {
    data: T;
    left?: TreeNode<T> | null;
    right?: TreeNode<T> | null;
}

export interface BinaryTreeNode<T> extends TreeNode<T> {
    left?: BinaryTreeNode<T> | null | undefined;
    right?: BinaryTreeNode<T> | null | undefined;
}