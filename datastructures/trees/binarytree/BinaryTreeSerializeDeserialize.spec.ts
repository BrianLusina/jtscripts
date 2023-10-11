import BinaryTree from "./BinaryTree";
import BinaryTreeNode from './BinaryTreeNode';

describe("BinaryTree", () => {
    describe("Serialize", () => {

        it("should return an empty string for a binary tree with no root", () => {
            const binaryTree = new BinaryTree()

            const actual = binaryTree.serialize()
            const expected = "null"
            expect(actual).toEqual(expected)
        })

        it("should return 10 86 nil nil 100 nil nil for root(10, left(86), right(100)", () => {
            const left = new BinaryTreeNode(86);
            const right = new BinaryTreeNode(100);
            const root = new BinaryTreeNode(10, left, right);

            const binaryTree = new BinaryTree(root)
            const expected = "10,86,null,null,100,null,null"

            const actual = binaryTree.serialize()
            expect(actual).toEqual(expected)
        })

        it("should return 1 2 nil nil 3 x x for root(1, left(2), right(3)) for binary tree", () => {
            const left = new BinaryTreeNode(2);
            const right = new BinaryTreeNode(3);
            const root = new BinaryTreeNode(1, left, right);

            const binaryTree = new BinaryTree(root)

            const expected = "1,2,null,null,3,null,null"

            const actual = binaryTree.serialize()
            expect(actual).toEqual(expected)
        })
    })

    describe("Deserialize", () => {
        it("should return nil for a tree [null]", () => {
            const binaryTree = "null"

            const actual = new BinaryTree().deserialize(binaryTree)
            expect(actual).toBeNull()
        })

        it("should return root(10, left(86), right(100) for [10,86,nil,nil,100,nil,nil]", () => {
            const binaryTree = "10,86,null,null,100,null,null"
            
            const left = new BinaryTreeNode(86);
            const right = new BinaryTreeNode(100);
            const expected = new BinaryTreeNode(10, left, right);

            const actual = new BinaryTree().deserialize(binaryTree)
            expect(actual).toEqual(expected)
        })

        it("should return true for a binary tree with root and 2 children", () => {
            const left = new BinaryTreeNode(2);
            const right = new BinaryTreeNode(3);
            const expected = new BinaryTreeNode(1, left, right);

            
            const tree = "1,2,null,null,3,null,null"
            
            const binaryTree = new BinaryTree()
            const actual = binaryTree.deserialize(tree)

            expect(actual).toEqual(expected)
        })
    })
})
