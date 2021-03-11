import Tree from "./Tree";
import { BinaryTreeNode } from "./trees";

export default class BinarySearchTree<T> extends Tree<BinaryTreeNode<T>> {
    private root: BinaryTreeNode<T> | null | undefined;

    constructor(rootNode: BinaryTreeNode<T> | null | undefined) {
        super(rootNode);
        this.root = rootNode;
    }

    /**
     * Create new node add it to the end of the Binary Search Tree
     * @param {BinaryTreeNode} node
     */
     push(node: BinaryTreeNode<T>): void {
        throw new Error("Method not implemented.");
    }
}
