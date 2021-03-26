import Tree from "./Tree";
import { BinaryTreeNode } from "./types";

export default class BinaryTree<T> extends Tree<BinaryTreeNode<T>> {
    private root: BinaryTreeNode<T> | null | undefined;

    constructor(rootNode: BinaryTreeNode<T> | null | undefined) {
        super(rootNode);
        this.root = rootNode;
    }

    height(): number {
        throw new Error("Method not implemented.");
    }
    
    insertNode(value: any): BinaryTreeNode<T> {
        throw new Error("Method not implemented.");
    }
    
    inorderTraversalRecurse(root: BinaryTreeNode<T> | null): any[] {
        throw new Error("Method not implemented.");
    }
    
    inorderTraversalIteratively(): any[] {
        throw new Error("Method not implemented.");
    }
    
    inorderTraversalMorrisTraversal(): any[] {
        throw new Error("Method not implemented.");
    }
    
    preorderTraversal(): any[] {
        throw new Error("Method not implemented.");
    }
    
    postorderTraversal(): any[] {
        throw new Error("Method not implemented.");
    }
    
    findLargestNode(node?: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
        throw new Error("Method not implemented.");
    }
    
    findSecondLargestNode(node?: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
        throw new Error("Method not implemented.");
    }

    /**
     * Finds the lowest/least common ancestor of 2 nodes in a Binary tree
     * The approach is pretty intuitive. Traverse the tree in a depth first manner. The moment you encounter either of the nodes node_one or node_two, 
     * return some boolean flag. The flag helps to determine if we found the required nodes in any of the paths. The least common ancestor would 
     * then be the node for which both the subtree recursions return a True flag. 
     * It can also be the node which itself is one of node_one or node_two and for which one of the subtree recursions returns a True flag.
     * Let us look at the formal algorithm based on this idea.
     * Algorithm
     * - Start traversing the tree from the root node.
     * - If the current node itself is one of node_one or node_two, we would mark a variable mid as True and continue the search for the other node in the left and right branches.
     * - If either of the left or the right branch returns True, this means one of the two nodes was found below.
     * - If at any point in the traversal, any two of the three flags left, right or mid become True, this means we have found the lowest common ancestor for the nodes p and q.        
     * 
     * Complexity Analysis
     * Time Complexity: O(N) where NN is the number of nodes in the binary tree. 
     * In the worst case we might be visiting all the nodes of the binary tree.
     * Space Complexity: O(N). 
     * This is because the maximum amount of space utilized by the recursion stack would be N since the height of a skewed binary tree could be N.
     * @param {BinaryTreeNode} nodeOne 1st node
     * @param {BinaryTreeNode} nodeTwo 2nd Node
     * @returns {BinaryTreeNode}
     */
    lowestCommonAncestor(nodeOne: BinaryTreeNode<T>, nodeTwo: BinaryTreeNode<T>): BinaryTreeNode<T> | null | undefined {
        if (!this.root){
            return null
        }

        let lca: BinaryTreeNode<T>

        const recurseTree = (currentNode: BinaryTreeNode<T> | null | undefined): boolean => {
            // # If reached the end of a branch, return False.
            if(!currentNode) {
                return false
            }

            // # Left Recursion
            let left = recurseTree(currentNode.left);

            // # Right Recursion
            let right = recurseTree(currentNode.right);

            // # If the current node is one of nodeOne or nodeTwo
            let mid = currentNode == nodeOne || currentNode == nodeTwo

            // # If any two of the three flags left, right or mid become True.
            // @ts-ignore
            if (mid + left + right >= 2) {
                lca = currentNode
            }

            // # Return True if either of the three bool values is True.
            return mid || left || right
        }

        recurseTree(this.root)
        // @ts-ignore
        return lca;
    }

    size(): number {
        if(!this.root) {
            return 0
        }

        let counter: number = 0;
        const stack: BinaryTreeNode<T>[] = [this.root];

        while(stack.length) {
            const node = stack.pop();

            if(node?.left) {
                counter += 1;
                stack.push(node.left);
            }

            if(node?.right) {
                counter += 1;
                stack.push(node.right);
            }
        }

        return counter;
    }
}