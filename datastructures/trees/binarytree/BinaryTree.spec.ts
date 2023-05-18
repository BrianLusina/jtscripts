import BinaryTree from "./BinaryTree";
import BinaryTreeNode from './BinaryTreeNode';

describe("BinaryTree", () => {
    describe("Traversals", () => {
        describe("in order traversals", () => {

            describe("iterative approach", () => {

                it("should return an empty list for a binary tree with no root", () => {
                    const binaryTree = new BinaryTree(null)

                    const actual = binaryTree.inorderTraversalIteratively()
                    expect(actual).toEqual([])
                })

                it("should return [b, a, c] for a binary tree of b <- a -> c where a is the root", () => {
                    const a = new BinaryTreeNode(5);
                    const b = new BinaryTreeNode(10);
                    const c = new BinaryTreeNode(2);
                    a.left = b;
                    a.right = c;

                    const binaryTree = new BinaryTree(a)
                    const expected = [b.data, a.data, c.data]

                    const actual = binaryTree.inorderTraversalIteratively()
                    expect(actual).toEqual(expected)
                })

                it("should return [b, h, g, a, e, f, d, c] for binary tree of  (b -> (h <- g)) <- a -> (((e -> f) <- d) <- c) where a is the root", () => {
                    const a = new BinaryTreeNode(999);
                    const b = new BinaryTreeNode("B!");
                    const c = new BinaryTreeNode(5400);
                    const d = new BinaryTreeNode(4322);
                    const e = new BinaryTreeNode(5555);
                    const f = new BinaryTreeNode(-59322);
                    const g = new BinaryTreeNode("G!");
                    const h = new BinaryTreeNode("Almost foxtrot.");
                    // @ts-ignore
                    a.left = b;
                    a.right = c;
                    c.left = d;
                    d.left = e;
                    e.right = f;
                    b.right = g;
                    g.left = h;

                    const binaryTree = new BinaryTree(a)

                    const expected = [b.data, h.data, g.data, a.data, e.data, f.data,d.data, c.data]

                    const actual = binaryTree.inorderTraversalIteratively()
                    expect(actual).toEqual(expected)
                })
            })

        })
    })
})
