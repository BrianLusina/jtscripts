export default abstract class Tree<TreeNode> {
  /**
   * Returns the height of a Tree or the maximum depth.
   * That is, the number of links from the root to the furtheset leaf
   * @returns {number} Height of the tree
   */
  abstract height(): number;

  /**
   * Create new node adds it to the Tree
   * @param {unknown} value Value to add to a node in the Tree
   * @returns {TreeNode} Returns the new root of the Node
   */
  abstract insertNode(e: unknown): TreeNode;

  abstract inorderTraversalRecurse(e: TreeNode | null): unknown[];

  /**
   * Uses a stack to get the nodes of a Tree
   */
  abstract inorderTraversalIteratively(): unknown[];

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
  abstract inorderTraversalMorrisTraversal(): unknown[];

  abstract preorderTraversal(): unknown[];

  abstract postorderTraversal(): unknown[];

  /**
   * Finds the largest node in a Tree given a node. This node does not necessarily have to be the root node
   * but if not provided, the root node is used to traverse. If a node is provided, this finds the largest
   * in that subtree from the root node
   */
  abstract findLargestNode(e: TreeNode | null): TreeNode;

  /**
   * Finds the second largest node in a Tree given a node. This node does not necessarily have to be the root node
   * but if not provided, the root node is used to traverse. If a node is provided, this finds the largest
   * in that subtree from the root node
   */
  abstract findSecondLargestNode(e: TreeNode | null): TreeNode;

  /**
   * Returns the lowest common ancestor of 2 nodes in a Tree.
   * @param {TreeNode} nodeOne Node one
   * @param {TreeNode} nodeTwo Node Two
   * @returns {TreeNode}
   */
  // eslint-disable-next-line no-unused-vars
  abstract lowestCommonAncestor(nodeOne: TreeNode, nodeTwo: TreeNode): TreeNode | null | undefined;

  /**
   * Gets all the paths of a Tree and returns the values in an array
   * @returns {unknown[]} 2D Array of values/data of each node in the tree representing paths
   */
  abstract paths(): unknown[];

  /**
   * Returns the number of nodes in this Tree
   * @returns {number} number of nodes
   */
  abstract size(): number;

  /**
   * Returns the depth of the tree
   */
  abstract getDepth(): number;

  /**
   * LeafSimilar returns true if this tree has similar leaf value sequence to another tree.
   * For example: If this tree has nodes = [3,5,1,6,2,9,8,null,null,7,4] and other tree has nodes =
   * [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]. Then the leaf value sequence of both is [6,7,4,9,8] which is similar
   * @param other Other tree to compare to
   */
  abstract leafSimilar(e: Tree<TreeNode>): boolean;
}
