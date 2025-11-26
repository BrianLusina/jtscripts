/* eslint-disable @typescript-eslint/ban-ts-comment */
import BinaryTree from '../BinaryTree';
import BinaryTreeNode from '../BinaryTreeNode';

export default class BinarySearchTree<T> extends BinaryTree<T> {
  private stack: BinaryTreeNode<T>[];

  constructor(rootNode: BinaryTreeNode<T> | null | undefined) {
    super(rootNode);
    this.stack = [];
    this.leftMostInorder(rootNode);
  }

  getRoot(): BinaryTreeNode<T> | null | undefined {
    return this.root;
  }

  getDepth(): number {
    return this.height();
  }

  height(): number {
    const heightHelper = (node: BinaryTreeNode<T> | null | undefined): number => {
      if (!node) {
        return 0;
      }
      return Math.max(heightHelper(node.left), heightHelper(node.right)) + 1;
    };

    return heightHelper(this.root);
  }

  private leftMostInorder(root: BinaryTreeNode<T> | null | undefined): void {
    while (root) {
      this.stack.push(root);
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

    if (topNode?.right) {
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
  insertNode(value: T): BinaryTreeNode<T> {
    if (!this.root) {
      this.root = new BinaryTreeNode({ data: value });
      return this.root;
    }

    const insertHelper = (
      data: T,
      node: BinaryTreeNode<T> | null | undefined,
    ): BinaryTreeNode<T> | undefined | null => {
      if (!node) {
        return new BinaryTreeNode({ data });
      }

      if (data < node.data) {
        node.left = insertHelper(data, node.left);
      } else {
        node.right = insertHelper(data, node.right);
      }
      return node;
    };

    insertHelper(value, this.root);
    return this.root;
  }

  /**
   * Inorder Traversal recursively
   * @param {BinaryTreeNode} root
   * @returns {T[]} Array of values from each node in the tree
   */
  inorderTraversalRecurse(root: BinaryTreeNode<T> | null): T[] {
    const result = [];
    if (root) {
      if (root.left) {
        this.inorderTraversalRecurse(root.left);
      }

      result.push(root.data);

      if (root.right) {
        this.inorderTraversalRecurse(root.right);
      }
    }

    return result;
  }

  inorderTraversalIteratively(): (T | undefined)[] {
    const result: (T | undefined)[] = [];
    const stack = [];
    let current = this.root;

    while (current || stack.length !== 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      result.push(current?.data);
      current = current?.right;
    }

    return result;
  }

  inorderTraversalMorrisTraversal(): T[] {
    const result = [];
    let current = this.root;
    let pre = null;

    while (current) {
      if (!current.left) {
        result.push(current.data);
        current = current.right;
      } else {
        pre = current.left;

        while (pre.right) {
          pre = pre.right;
        }

        pre.right = current;
        const temp = current;
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
  isValid(): boolean {
    // empty trees are valid BST
    if (!this.root) {
      return true;
    }

    const stack = [[Number.NEGATIVE_INFINITY, this.root, Number.POSITIVE_INFINITY]];

    while (stack) {
      // @ts-ignore
      const [lowerBound, node, upperBound] = stack.pop();

      if (!node) {
        continue;
      }

      if (lowerBound <= node.data || node.data >= upperBound) {
        return false;
      }

      if (node.left) {
        stack.push([lowerBound, node.left, node.data]);
      }

      if (node.right) {
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
  preorderTraversal(): unknown[] {
    const result = [];

    if (!this.root) {
      return [];
    }

    const stack: BinaryTreeNode<T>[] = [];

    let current: BinaryTreeNode<T> | undefined | null = this.root;

    while (current || stack.length != 0) {
      while (current) {
        result.push(current.data);
        stack.push(current);
        current = current.left;
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
   * @returns {T[]}
   */
  postorderTraversal(): T[] {
    const stackOne: BinaryTreeNode<T>[] = [];
    const stackTwo: BinaryTreeNode<T>[] = [];
    const values: T[] = [];

    if (!this.root) {
      return values;
    }

    stackOne.push(this.root);

    while (stackOne.length) {
      const node = stackOne.pop();
      // @ts-ignore
      stackTwo.push(node);

      if (node?.left) {
        stackOne.push(node.left);
      }

      if (node?.right) {
        stackOne.push(node.right);
      }
    }

    while (stackTwo.length) {
      const node = stackTwo.pop();
      values.push(node!.data);
    }

    return values;
  }

  findLargestNode(node?: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
    let current = node || this.root;

    while (current) {
      if (!current.right) {
        return current;
      }
      current = current.right;
    }

    // @ts-ignore
    return current;
  }

  findSecondLargestNode(node?: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
    const treeNode = node || this.root;

    if (!treeNode || (!treeNode.left && !treeNode.right)) {
      throw new Error('Tree must have at least 2 nodes');
    }

    let current = treeNode;

    while (current) {
      // case: current is largest and has a left subtree
      // 2nd largest is the largest in that subtree
      if (current.left && !current.right) {
        return this.findLargestNode(current.left);
      }

      // case: current is parent of largest, and
      // largest has no children, so
      // current is 2nd largest
      if (current.right && !current.right.left && !current.right.right) {
        return current;
      }

      // @ts-ignore
      current = current.right;
    }

    return current;
  }

  /**
   * Finds the kth largest node in a Binary Search Tree
   * This uses a reverse in order traversal moving from right
   * to root to left until the kth largest node can be found. We don't have to traverse the whole tree since binary
   * search trees are already ordered following the property of the right subtree has nodes which have the left
   * sub-tree always less than their parent and the right subtree has nodes with values that are either equal to or
   * greater than the parent. With this property in mind, we perform a reverse in order traversal to be able to move
   * from right to root to left to find the kth largest node in the tree.
   *
   * Complexity:
   * Time: O(h + k): where h is the height of the tree and k is the input
   * Space: O(h): where h is the height of the tree.
   *
   * @param k {number} the position of the node to find
   * @returns {BinaryTreeNode<T> | null} the kth largest node or null if not found
   */
  findKthLargestNode(k: number): BinaryTreeNode<T> | null {
    if (!this.root || k <= 0) {
      return null;
    }

    let count = 0;
    const stack: BinaryTreeNode<T>[] = [];
    let current: BinaryTreeNode<T> | null | undefined = this.root;

    while (stack.length > 0 || current) {
      while (current) {
        stack.push(current);
        current = current.right;
      }

      current = stack.pop();
      count += 1;

      if (count === k) {
        return current || null;
      }

      current = current?.left;
    }

    return null;
  }

  /**
   * Considering it is a BST, we can assume that this tree is a valid BST, we could also check for this
   * If both of the values in the 2 nodes provided are greater than the root node, then we move to the right.
   * if the nodes are less than the root node, we move to the left.
   * If there is no root node, then we exit and return None, as no common ancestor could exist in such a case with
   * no root node.
   *
   * Assumptions:
   * - assumes that the node itself can also be an ancestor/descendant of itself
   *
   * Complexity Analysis:
   * Time Complexity: O(h).
   * The Time Complexity of the above solution is O(h), where h is the height of the tree.
   *
   * Space Complexity: O(1).
   * The space complexity of the above solution is constant.
   * @param {BinaryTreeNode<T>} nodeOne
   * @param {BinaryTreeNode<T>} nodeTwo
   * @returns {BinaryTreeNode<T>}
   */
  lowestCommonAncestor(
    nodeOne: BinaryTreeNode<T>,
    nodeTwo: BinaryTreeNode<T>,
  ): BinaryTreeNode<T> | null | undefined {
    if (!this.root) {
      return null;
    }

    // if any of the node values matches the data value for the root node, return the root node
    if (this.root.data === nodeOne.data || this.root.data === nodeTwo.data) {
      return this.root;
    }

    while (this.root) {
      // if both node_one and node_two are smaller than root, then LCA lies in the left
      if (this.root.data > nodeOne.data && this.root.data > nodeTwo.data) {
        this.root = this.root.left;
      }

      // if both node_one and node_two are greater than root, then LCA lies in the right
      else if (this.root.data < nodeOne.data && this.root.data < nodeTwo.data) {
        this.root = this.root.right;
      } else {
        break;
      }
    }

    return this.root;
  }

  paths(): string[] {
    if (!this.root) {
      return [];
    }

    const stack: [[BinaryTreeNode<T>, string]] = [[this.root, '']];
    // stack.push([this.root, ""])
    const res: string[] = [];

    while (stack.length) {
      // @ts-ignore
      const [node, path] = stack.pop();
      // const [node, path] = item;

      if (!(node.left || node.right)) {
        res.push(`${path} ${node.data}`);
      }

      if (node.left) {
        stack.push([node.left, `${path} ${node.data} ->`]);
      }

      if (node.right) {
        stack.push([node.right, `${path} ${node.data} ->`]);
      }
    }

    return res;
  }
}
