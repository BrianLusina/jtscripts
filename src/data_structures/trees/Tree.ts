export default abstract class Tree<TreeNode> {
    constructor(root: TreeNode | null | undefined) {
        root = null;
    }

    /**
     * Create new node add it to the end of the Linked List
     * @param {TreeNode} node
     */
    abstract push(node: TreeNode): void;

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
}
