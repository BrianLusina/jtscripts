import BinaryTreeNode from "../BinaryTreeNode";
import BinarySearchTree from "./BinarySearchTree";

describe('Binary Search Tree', () => {
    describe('insert', () => {
        type testCase = {
            data    :    unknown[];
            expected: BinaryTreeNode<unknown>;
            description: string
        }
    
        const testCases : testCase[] = [
            {
                data:        [1],
                expected:    new BinaryTreeNode({data: 1}),
                description: "should return tree for 1 value",
            },
            {
                data:        [4, 2, 6],
                expected:    new BinaryTreeNode({ data: 4, left: new BinaryTreeNode({ data: 2 }), right: new BinaryTreeNode({ data: 6})}),
                description: "should return tree for 3 values",
            },
        ]

        testCases.forEach(({ data, expected, description }) => {
            it(description, () => {
                const tree = new BinarySearchTree<unknown>(null)
                for (const d of data) {
                    tree.insertNode(d)
                }

                expect(tree.getRoot()).toEqual(expected)
            })
        })
    })
})