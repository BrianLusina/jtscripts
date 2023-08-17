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

    describe("IsPerfect", () => {
        it("should return false for a tree with no root", () => {
            const binaryTree = new BinaryTree(null)

            const actual = binaryTree.isPerfect()
            expect(actual).toEqual(false)
        })

        it("should return true for a binary tree with root and no children", () => {
            const a = new BinaryTreeNode(5);

            const binaryTree = new BinaryTree(a)

            const actual = binaryTree.isPerfect()
            expect(actual).toEqual(true)
        })

        it("should return true for a binary tree with root and 2 children", () => {
            const left = new BinaryTreeNode(5);
            const right = new BinaryTreeNode(5);
            const root = new BinaryTreeNode(5, left, right);

            const binaryTree = new BinaryTree(root)

            const actual = binaryTree.isPerfect()
            expect(actual).toEqual(true)
        })
    })

    describe("LeafSimilar", () => {
        it("should return false for tree 1 having no root and tree 2 having a root", () => {
            const root = new BinaryTreeNode(1)
            const tree1 = new BinaryTree(root)

            const tree2 = new BinaryTree<number>()

            const actual = tree1.leafSimilar(tree2)
            expect(actual).toEqual(false)
        })

        it("should return true for tree1=3,5,1,6,2,9,8,null,null,7,4 and tree2=3,5,1,6,7,4,2,null,null,null,null,null,null,9,8", () => {
            const left1 = new BinaryTreeNode(5, new BinaryTreeNode(6), new BinaryTreeNode(2, new BinaryTreeNode(7), new BinaryTreeNode(4)))
            const right1 = new BinaryTreeNode(1, new BinaryTreeNode(9), new BinaryTreeNode(8))

            const root1 = new BinaryTreeNode(3, left1, right1)
            const tree1 = new BinaryTree(root1)

            const left2 = new BinaryTreeNode(5, new BinaryTreeNode(6), new BinaryTreeNode(7))
            const right2 = new BinaryTreeNode(1, new BinaryTreeNode(4), new BinaryTreeNode(2, new BinaryTreeNode(9), new BinaryTreeNode(8)))

            const root2 = new BinaryTreeNode(3, left2, right2)
            const tree2 = new BinaryTree(root2)

            const actual = tree1.leafSimilar(tree2)

            expect(actual).toEqual(true)
        })

        it("should return false for tree1=1,2,3 and tree2=1,3,2", () => {
            const root1 = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3))
            const tree1 = new BinaryTree(root1)

            const root2 = new BinaryTreeNode(1, new BinaryTreeNode(3), new BinaryTreeNode(2))
            const tree2 = new BinaryTree(root2)

            const actual = tree1.leafSimilar(tree2)

            expect(actual).toEqual(false)
        })
    })
})
