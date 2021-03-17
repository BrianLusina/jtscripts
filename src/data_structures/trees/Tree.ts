export default abstract class Tree<TreeNode> {
    constructor(root: TreeNode | null | undefined) {
        root = null;
    }

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
}
