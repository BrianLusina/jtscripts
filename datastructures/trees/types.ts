// base tree node. here it has a generic data and children as a Tree node could have more than 2 children
export interface TreeNode<T> {
  data: T;
  children: Array<TreeNode<T> | null>;
}
