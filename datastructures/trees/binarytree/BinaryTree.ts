/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Stack from '../../Stack';
import FifoQueue from '../../queues/FifoQueue';
import Tree from '../Tree';
import BinaryTreeNode from './BinaryTreeNode';

export default class BinaryTree<T> extends Tree<BinaryTreeNode<T>> {
  private root: BinaryTreeNode<T> | null | undefined;

  constructor(rootNode: BinaryTreeNode<T> | null | undefined = null) {
    super();
    this.root = rootNode;
  }

  paths(): unknown[] {
    throw new Error('Method not implemented.');
  }

  height(): number {
    if (!this.root) {
      return 0;
    }

    const heightHelper = (node: BinaryTreeNode<T> | null | undefined): number => {
      if (!node) {
        return -1;
      }

      const leftHeight = heightHelper(node.left);
      const rightHeight = heightHelper(node.right);

      return 1 + Math.max(leftHeight, rightHeight);
    };

    return heightHelper(this.root);
  }

  insertNode(_e: unknown): BinaryTreeNode<T> {
    throw new Error('Method not implemented.');
  }

  inorderTraversalRecurse(_e: BinaryTreeNode<T> | null): unknown[] {
    throw new Error('Method not implemented.');
  }

  inorderTraversalIteratively(): unknown[] {
    if (!this.root) {
      return [];
    }

    const result = [];
    const stack = new Stack<BinaryTreeNode<T>>();
    let current = this.root;

    while (!stack.isEmpty() || current) {
      while (current) {
        stack.push(current);
        current = current.left!;
      }

      current = stack.pop();
      result.push(current.data);
      current = current.right!;
    }

    return result;
  }

  inorderTraversalMorrisTraversal(): unknown[] {
    throw new Error('Method not implemented.');
  }

  preorderTraversal(): unknown[] {
    if (!this.root) {
      return [];
    }

    const result = [];
    const stack = new Stack<BinaryTreeNode<T>>();

    let current = this.root;

    while (current || !stack.isEmpty()) {
      while (current) {
        result.push(current.data);
        stack.push(current);
        current = current.left!;
      }

      current = stack.pop();
      current = current.right!;
    }

    return result;
  }

  postorderTraversal(): T[] {
    if (!this.root) {
      return [];
    }

    const stackOne = new Stack<BinaryTreeNode<T>>();
    const stackTwo = new Stack<BinaryTreeNode<T>>();
    const result = [];

    stackOne.push(this.root);

    while (!stackOne.isEmpty()) {
      const current = stackOne.pop();
      stackTwo.push(current);

      if (current.left) {
        stackOne.push(current.left);
      }

      if (current.right) {
        stackOne.push(current.right);
      }
    }

    while (!stackTwo.isEmpty()) {
      const current = stackTwo.pop();
      result.push(current.data);
    }

    return result;
  }

  levelOrderTraversal(): T[] {
    if (!this.root) {
      return [];
    }

    const fifoQueue = new FifoQueue<BinaryTreeNode<T>>();
    fifoQueue.enqueue(this.root);
    const result: T[] = [];

    while (!fifoQueue.empty()) {
      const node = fifoQueue.peek();
      result.push(node.data);

      const poppedNode = fifoQueue.dequeue();

      if (poppedNode.left) {
        fifoQueue.enqueue(poppedNode.left);
      }

      if (poppedNode.right) {
        fifoQueue.enqueue(poppedNode.right);
      }
    }

    return result;
  }

  reverseLevelOrderTraversal(): unknown[] {
    if (!this.root) {
      return [];
    }

    const fifoQueue = new FifoQueue<BinaryTreeNode<T>>();
    const stack = new Stack<BinaryTreeNode<T>>();

    fifoQueue.enqueue(this.root);

    const result: T[] = [];

    while (!fifoQueue.empty()) {
      const node = fifoQueue.dequeue();

      stack.push(node);

      if (node.right) {
        fifoQueue.enqueue(node.right);
      }

      if (node.left) {
        fifoQueue.enqueue(node.left);
      }
    }

    while (!stack.isEmpty()) {
      const node = stack.pop();
      result.push(node.data);
    }

    return result;
  }

  findLargestNode(_e?: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
    throw new Error('Method not implemented.');
  }

  findSecondLargestNode(_e?: BinaryTreeNode<T> | null): BinaryTreeNode<T> {
    throw new Error('Method not implemented.');
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
  lowestCommonAncestor(
    nodeOne: BinaryTreeNode<T>,
    nodeTwo: BinaryTreeNode<T>,
  ): BinaryTreeNode<T> | null | undefined {
    if (!this.root) {
      return null;
    }

    let lca: BinaryTreeNode<T>;

    const recurseTree = (currentNode: BinaryTreeNode<T> | null | undefined): boolean => {
      // # If reached the end of a branch, return False.
      if (!currentNode) {
        return false;
      }

      // # Left Recursion
      const left = recurseTree(currentNode.left);

      // # Right Recursion
      const right = recurseTree(currentNode.right);

      // # If the current node is one of nodeOne or nodeTwo
      const mid = currentNode === nodeOne || currentNode === nodeTwo;

      // # If any two of the three flags left, right or mid become True.
      // @ts-ignore
      if (mid + left + right >= 2) {
        lca = currentNode;
      }

      // # Return True if either of the three bool values is True.
      return mid || left || right;
    };

    recurseTree(this.root);
    // @ts-ignore
    return lca;
  }

  size(): number {
    if (!this.root) {
      return 0;
    }

    let counter = 1;
    const stack = new Stack<BinaryTreeNode<T>>();
    stack.push(this.root);

    while (!stack.isEmpty()) {
      const node = stack.pop();

      if (node.left) {
        counter += 1;
        stack.push(node.left);
      }

      if (node.right) {
        counter += 1;
        stack.push(node.right);
      }
    }

    return counter;
  }

  getDepth(): number {
    let depth = 0;

    let current = this.root;

    while (current) {
      depth += 1;
      current = current.left;
    }

    return depth;
  }

  isPerfect(): boolean {
    if (!this.root) {
      return false;
    }

    if (!this.root.left && !this.root.right) {
      return true;
    }

    const depth = this.getDepth();

    const isPerfectHelper = (
      root: BinaryTreeNode<T> | null | undefined,
      level: number,
    ): boolean => {
      if (!root) {
        return true;
      }

      if (!root.left && !root.right) {
        return depth == level + 1;
      }

      if (!root.left && !root.right) {
        return false;
      }

      return isPerfectHelper(root.left, level + 1) && isPerfectHelper(root.right, level + 1);
    };

    return isPerfectHelper(this.root, 0);
  }

  leafSimilar(other: BinaryTree<T>): boolean {
    if ((this.root && !other.root) || (other.root && !this.root)) {
      return false;
    }

    const leaves1: T[] = [];
    const leaves2: T[] = [];

    const dfs = (node: BinaryTreeNode<T> | null | undefined, leafValues: T[]) => {
      if (node) {
        if (!node.left && !node.right) {
          leafValues.push(node.data);
        }
        dfs(node.left, leafValues);
        dfs(node.right, leafValues);
      }
    };

    dfs(this.root, leaves1);
    dfs(other.root, leaves2);

    return leaves1.length === leaves2.length && leaves1.every((v, i) => v === leaves2[i]);
  }

  countGoodNodes(): number {
    if (!this.root) {
      return 0;
    }

    // root is regarded as good
    if (!this.root.left && !this.root.right) {
      return 1;
    }

    const goodNodesHelper = (node: BinaryTreeNode<T> | null | undefined, data: T): number => {
      if (node) {
        // TODO: fix maximum check between values
        let nodeCount =
          goodNodesHelper(node.left, Math.max(data as number, node.data as number) as T) +
          goodNodesHelper(node.right, Math.max(data as number, node.data as number) as T);
        if (node.data >= data) {
          nodeCount += 1;
        }
        return nodeCount;
      }

      return 0;
    };

    return goodNodesHelper(this.root, this.root.data);
  }

  serialize(): string {
    const nodeValues: string[] = [];

    const dfs = (node: BinaryTreeNode<T> | null | undefined) => {
      if (!node) {
        nodeValues.push('null');
        return;
      }
      nodeValues.push(`${node.data}`);
      dfs(node.left);
      dfs(node.right);
    };

    dfs(this.root);
    return nodeValues.join(',');
  }

  deserialize(tree: string): BinaryTreeNode<T> | null {
    const nodeValues = tree.split(',')[Symbol.iterator]();

    const dfs = (nodeData: IterableIterator<string>): BinaryTreeNode<T> | null => {
      const data = nodeData.next().value;

      if (data == 'null') {
        return null;
      }

      const current = new BinaryTreeNode({ data });
      current.left = dfs(nodeData);
      current.right = dfs(nodeData);
      return current;
    };

    return dfs(nodeValues);
  }
}
