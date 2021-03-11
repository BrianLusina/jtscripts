export default abstract class Tree<TreeNode> {
    constructor(root: TreeNode | null | undefined) {
        root = null;
    }

    /**
     * Create new node add it to the end of the Linked List
     * @param {TreeNode} node
     */
    abstract push(node: TreeNode): void;
}
