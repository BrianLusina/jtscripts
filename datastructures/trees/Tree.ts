export default abstract class Tree<TreeNode> {
  /**
   * Returns the height of a Tree or the maximum depth.
   * That is, the number of links from the root to the furtheset leaf
   * @returns {number} Height of the tree
   */
  abstract height(): number;

  /**
   * Create new node adds it to the Tree
   * @param {any} value Value to add to a node in the Tree
   * @returns {TreeNode} Returns the new root of the Node
   */
  abstract insertNode(value: any): TreeNode;

  abstract inorderTraversalRecurse(root: TreeNode | null): any[];

  /**
   * Uses a stack to get the nodes of a Tree
   */
  abstract inorderTraversalIteratively(): any[];

  /**
   * Step 1: Initialize current as root
   * Step 2: While current is not NULL,
   *  If current does not have left child
   *      a. Add current’s value
   *      b. Go to the right, i.e., current = current.right
   *  Else
   *      a. In current's left subtree, make current the right child of the rightmost node
   *      b. Go to this left child, i.e., current = current.left
   */
  abstract inorderTraversalMorrisTraversal(): any[];

  abstract preorderTraversal(): any[];

  abstract postorderTraversal(): any[];

  /**
   * Finds the largest node in a Tree given a node. This node does not necessarily have to be the root node
   * but if not provided, the root node is used to traverse. If a node is provided, this finds the largest
   * in that subtree from the root node
   */
  abstract findLargestNode(node?: TreeNode | null): TreeNode;

  /**
   * Finds the second largest node in a Tree given a node. This node does not necessarily have to be the root node
   * but if not provided, the root node is used to traverse. If a node is provided, this finds the largest
   * in that subtree from the root node
   */
  abstract findSecondLargestNode(node?: TreeNode | null): TreeNode;

  /**
   * Returns the lowest common ancestor of 2 nodes in a Tree.
   * @param {TreeNode} nodeOne Node one
   * @param {TreeNode} nodeTwo Node Two
   * @returns {TreeNode}
   */
  abstract lowestCommonAncestor(nodeOne: TreeNode, nodeTwo: TreeNode): TreeNode | null | undefined;

  /**
   * Gets all the paths of a Tree and returns the values in an array
   * @returns {any[]} 2D Array of values/data of each node in the tree representing paths
   */
  abstract paths(): any[];

  /**
   * Returns the number of nodes in this Tree
   * @returns {number} number of nodes
   */
  abstract size(): number;

  /**
   * Returns the depth of the tree
   */
  abstract getDepth(): number;
}
