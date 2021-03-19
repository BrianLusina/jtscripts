import Tree from "./Tree";
import { BinaryTreeNode } from "./types";

export default class BinarySearchTree<T> extends Tree<BinaryTreeNode<T>> {
    private root: BinaryTreeNode<T> | null | undefined;
    private stack: BinaryTreeNode<T>[];

    constructor(rootNode: BinaryTreeNode<T> | null | undefined) {
        super(rootNode);
        this.root = rootNode;
        this.stack = [];
        this.leftMostInorder(rootNode);
    }

    height(): number {
        if(!this.root){
            return 0
        }

        if(!this.root.left && !this.root.right) {
            return 0
        }

        let height = 0;
        const queue = [this.root]

        while(true) {
            let currentLevelNodes = queue.length;

            if(currentLevelNodes === 0) {
                return height
            }

            height += 1

            while(currentLevelNodes > 0) {
                let node = queue.shift()

                if(node?.left) {
                    queue.push(node)
                }

                if(node?.right) {
                    queue.push
                }

                currentLevelNodes -= 1
            }
        }
    }
    
    private leftMostInorder(root: BinaryTreeNode<T> | null | undefined): void {
        while(root) {
            this.stack.push(root)
            root = root.left;
        }
    }

    /**
     * 
     * Returns the next smallest number in a BST.
     * This involves two major operations. One is where we pop an element from the stack which becomes the next smallest element to return. This is a O(1) operation. 
     * However, we then make a call to our helper function _leftmost_inorder which iterates over a bunch of nodes. This is clearly a linear time operation i.e. O(N) in the worst case.
     * However, the important thing to note here is that we only make such a call for nodes which have a right child. Otherwise, we simply return. 
     * Also, even if we end up calling the helper function, it won't always process N nodes. They will be much lesser. Only if we have a skewed tree would there be N nodes for the root. 
     * But that is the only node for which we would call the helper function.
     * 
     * Thus, the amortized (average) time complexity for this function would still be O(1). We don't need to have a solution which gives constant time operations for every call. 
     * We need that complexity on average and that is what we get.
     * @returns {T | undefined}
     */
    next(): T | undefined {
        const topNode = this.stack.pop();

        if(topNode?.right) {
            this.leftMostInorder(topNode.right);
        }

        return topNode?.data;
    }

    /**
     * Checks if the BST has items left. Since this uses a stack, then we simply check if the stack still has items.
     * This is used in an iterator approach to getting items from the BST. This returns True if there are items & False
     * otherwise, the Time Complexity here is O(1)
     * @returns {boolean}
     */
    hasNext(): boolean {
        return this.stack.length > 0;
    }

    /**
     * Inserts a Node in the BST. If the value is greater than the root. Then the new node is inserted
     * in the right subtree. If the value is less than the root. Then the new node is inserted in the
     * left subtree. This process is repeated until the node is inserted in the right place.
     * If there is no root, then a new Node is created & becomes the new Root Node.
     * @param value Value to insert into the Node
     * @returns {BinaryTreeNode} Root of the Tree with the node inserted in the right place
     */
    insertNode(value: any): BinaryTreeNode<T> {
        if(!this.root) {
            return {
                data: value
            };
        }
        let parent = this.root
        let dummy = this.root
        
        while(this.root) {
            parent = this.root;
            
            if(value < this.root.data) {
                this.root = this.root.left;
            } else {
                this.root = this.root.right
            }
        }
        
        if(!parent) {
            parent = {
                data: value
            }
        } else if(value < parent.data) {
            parent.left = {
                data: value
            }
        } else {
            parent.right = {
                data: value
            }
        }

        return dummy
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
            return [];
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

    /**
     * 
     * 1. Push root to first stack.
     * 2. Loop while first stack is not empty
     *  2.1 Pop a node from first stack and push it to second stack
     *  2.2 Push left and right children of the popped node to first stack
     * 3. Print contents of second stack  
     * @returns {any[]}
     */
    postorderTraversal(): any[] {
        const stackOne: BinaryTreeNode<T>[] = [];
        const stackTwo: BinaryTreeNode<T>[] = [];
        const values: any[] = [];

        if(!this.root) {
            return values;
        }

        stackOne.push(this.root);

        while(stackOne.length){
            let node = stackOne.pop();
            // @ts-ignore
            stackTwo.push(node);

            if(node?.left){ 
                stackOne.push(node.left);
            }
            
            if(node?.right){
                stackOne.push(node.right);
            }
        }

        while(stackTwo.length) {
            let node = stackTwo.pop();
            values.push(node?.data);
        }

        return values;
    }

    findLargestNode(node?: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
        let current = node || this.root;
        
        while(current) {
            if(!current.right) {
                return current;
            }
            current = current.right
        }

        // @ts-ignore
        return current;
    }
    
    findSecondLargestNode(node?: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
        let treeNode = node || this.root;

        if(!treeNode || (!treeNode.left && !treeNode.right)) {
            throw new Error("Tree must have at least 2 nodes");
        }
        
        let current = treeNode
        
        while(current) {
            // case: current is largest and has a left subtree
            // 2nd largest is the largest in that subtree
            if(current.left && !current.right) {
                return this.findLargestNode(current.left);
            }

            // case: current is parent of largest, and
            // largest has no children, so
            // current is 2nd largest
            if(current.right && !current.right.left && !current.right.right){
                return current
            }

            // @ts-ignore
            current = current.right
        }

    return current
    }
}
