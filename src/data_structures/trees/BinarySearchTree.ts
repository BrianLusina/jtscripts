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

    /**
     * Inorder Traversal recursively
     * @param {BinaryTreeNode} root 
     * @returns {any[]} Array of values from each node in the tree
     */
    inorderTraversalRecurse(root: BinaryTreeNode<T> | null): any[] {
        let result = [];
        if(root) {
            if(root.left) {
                this.inorderTraversalRecurse(root.left)
            }

            result.push(root.data)

            if (root.right) {
                this.inorderTraversalRecurse(root.right)
            }
        }

        return result;
    }

    inorderTraversalIteratively(): any[] {
        let result = [];
        let stack = [];
        let current = this.root;
        
        while(current || stack.length !== 0) {
            while(current) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop()
            result.push(current?.data);
            current = current?.right
        }

        return result
    }

    inorderTraversalMorrisTraversal(): any[] {
        let result = [];
        let current = this.root;
        let pre = null;

        while(current) {
            if(!current.left) {
                result.push(current.data);
                current = current.right;
            } else {
                pre = current.left;

                while(pre.right){
                    pre = pre.right;
                }

                pre.right = current;
                let temp = current;
                current = current.left;
                temp.left = null;
            }
        }

        return result;
    }

    /**
     * Checks if a Binary Search Tree is valid
     * @returns {Boolean} true if a valid binary search tree, false otherwise
     */
    isValid(): Boolean {
        // empty trees are valid BST
        if(!this.root) {
            return true;
        }

        const stack = [[Number.NEGATIVE_INFINITY, this.root, Number.POSITIVE_INFINITY]]

        while(stack) {
            let [lowerBound, node, upperBound] = stack.pop();

            if(!node) {
                continue;
            }

            if(lowerBound <= node.data || node.data >= upperBound) {
                return false;
            }

            if(node.left) {
                stack.push([lowerBound, node.left, node.data]);
            }

            if(node.right) {
                stack.push([node.data, node.right, upperBound]);
            }
        }

        return true;
    }

    /**
     * Goes through each left node subtree first, then moves to the right if a right exists.
     * This uses a stack to keep track of visited nodes
     * Iteratively goes through each node obtaining the values of each node and returning them in an array.
     * @returns {any[]} Values of each Tree Node
     */
    preorderTraversal(): any[] {
        const result = []

        if(!this.root) {
            return []
        }

        const stack: BinaryTreeNode<T>[] = []

        let current: BinaryTreeNode<T> | undefined | null = this.root;

        while(current || stack.length != 0) {
            while(current) {
                result.push(current.data)
                stack.push(current)
                current = current.left
            }

            current = stack.pop();
            current = current?.right;
        }

        return result;
    }
}
