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
                    const a = new BinaryTreeNode({ data: 5 });
                    const b = new BinaryTreeNode({ data: 10 });
                    const c = new BinaryTreeNode({ data: 2 });
                    a.left = b;
                    a.right = c;

                    const binaryTree = new BinaryTree(a)
                    const expected = [b.data, a.data, c.data]

                    const actual = binaryTree.inorderTraversalIteratively()
                    expect(actual).toEqual(expected)
                })

                it("should return [b, h, g, a, e, f, d, c] for binary tree of  (b -> (h <- g)) <- a -> (((e -> f) <- d) <- c) where a is the root", () => {
                    const a = new BinaryTreeNode({ data: 999 });
                    const b = new BinaryTreeNode({ data: "B!" });
                    const c = new BinaryTreeNode({ data: 5400 });
                    const d = new BinaryTreeNode({ data: 4322 });
                    const e = new BinaryTreeNode({ data: 5555 });
                    const f = new BinaryTreeNode({ data: -59322 });
                    const g = new BinaryTreeNode({ data: "G!" });
                    const h = new BinaryTreeNode({ data: "Almost foxtrot." });
                    // @ts-ignore
                    a.left = b;
                    a.right = c;
                    c.left = d;
                    d.left = e;
                    e.right = f;
                    b.right = g;
                    g.left = h;

                    const binaryTree = new BinaryTree(a)

                    const expected = [b.data, h.data, g.data, a.data, e.data, f.data, d.data, c.data]

                    const actual = binaryTree.inorderTraversalIteratively()
                    expect(actual).toEqual(expected)
                })
            })
        })

        describe("level order traversal", () => {
            type testCase<T> = {
                expected: T[],
                root: BinaryTreeNode<T> | null
            }

            const testCases: testCase<any>[] = [
                {
                    expected: [1, 2, 3, 4, 5],
                    root: new BinaryTreeNode(
                        {
                            data: 1,
                            left: new BinaryTreeNode({
                                data: 2,
                                left: new BinaryTreeNode({ data: 4 }),
                                right: new BinaryTreeNode({ data: 5 })
                            }),
                            right: new BinaryTreeNode({ data: 3 })
                        }
                    )
                },
                {
                    expected: [],
                    root: null
                }
            ]

            testCases.forEach(({ expected, root }) => {
                it(`should return [${expected}] for root ${root}`, () => {
                    const tree = new BinaryTree(root)
                    const actual = tree.levelOrderTraversal()
                    expect(actual).toEqual(expected)
                })
            })
        })

        describe("reverse level order traversal", () => {
            type testCase<T> = {
                expected: T[],
                root: BinaryTreeNode<T> | null
            }

            const testCases: testCase<any>[] = [
                {
                    expected: [4, 5, 2, 3, 1],
                    root: new BinaryTreeNode(
                        {
                            data: 1,
                            left: new BinaryTreeNode({
                                data: 2,
                                left: new BinaryTreeNode({ data: 4 }),
                                right: new BinaryTreeNode({ data: 5 })
                            }),
                            right: new BinaryTreeNode({ data: 3 })
                        }
                    )
                },
                {
                    expected: [],
                    root: null
                }
            ]

            testCases.forEach(({ expected, root }) => {
                it(`should return [${expected}] for root ${root}`, () => {
                    const tree = new BinaryTree(root)
                    const actual = tree.reverseLevelOrderTraversal()
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
            const a = new BinaryTreeNode({ data: 5 });

            const binaryTree = new BinaryTree(a)

            const actual = binaryTree.isPerfect()
            expect(actual).toEqual(true)
        })

        it("should return true for a binary tree with root and 2 children", () => {
            const left = new BinaryTreeNode({ data: 5 });
            const right = new BinaryTreeNode({ data: 5 });
            const root = new BinaryTreeNode({ data: 5, left, right });

            const binaryTree = new BinaryTree(root)

            const actual = binaryTree.isPerfect()
            expect(actual).toEqual(true)
        })
    })

    describe("Height", () => {
        type testCase = {
            description: string;
            expected: number;
            root: BinaryTreeNode<unknown> | null | undefined;
        }

        const testCases: testCase[] = [
            {
                description: "should return 0 for no root",
                expected: 0,
                root: null,
            },
            {
                description: "should return 1 if the binary tree has a root, but no left nor right subtrees",
                expected: 0,
                root: new BinaryTreeNode({ data: 1 }),
            },
            {
                description: "should return 3 for tree of 3,9,20,null,null,15,7",
                expected: 2,
                root: new BinaryTreeNode({
                    data: 3,
                    left: new BinaryTreeNode({ data: 9 }),
                    right: new BinaryTreeNode({ data: 20, left: new BinaryTreeNode({data: 15}), right: new BinaryTreeNode({ data: 7 }) })
                }),
            },
            {
                description: "should return 1 for tree of 1,null,2",
                expected: 1,
                root: new BinaryTreeNode({
                    data: 1,
                    right: new BinaryTreeNode({ data: 1 })
                }),
            },
        ]

        testCases.forEach(({ description, expected, root }) => {
            it(description, () => {
                const binaryTree = new BinaryTree(root)
                const actual = binaryTree.height()
                expect(actual).toEqual(expected)
            })
        })
    })
    
    describe("Size", () => {
        type testCase = {
            description: string;
            expected: number;
            root: BinaryTreeNode<unknown> | null | undefined;
        }

        const testCases: testCase[] = [
            {
                description: "should return 0 for no root",
                expected: 0,
                root: null,
            },
            {
                description: "should return 1 if the binary tree has a root, but no left nor right subtrees",
                expected: 1,
                root: new BinaryTreeNode({ data: 1 }),
            },
            {
                description: "should return 5 for tree of 3,9,20,null,null,15,7",
                expected: 5,
                root: new BinaryTreeNode({
                    data: 3,
                    left: new BinaryTreeNode({ data: 9 }),
                    right: new BinaryTreeNode({ data: 20, left: new BinaryTreeNode({data: 15}), right: new BinaryTreeNode({ data: 7 }) })
                }),
            },
            {
                description: "should return 1 for tree of 1,null,2",
                expected: 2,
                root: new BinaryTreeNode({
                    data: 1,
                    right: new BinaryTreeNode({ data: 1 })
                }),
            },
        ]

        testCases.forEach(({ description, expected, root }) => {
            it(description, () => {
                const binaryTree = new BinaryTree(root)
                const actual = binaryTree.size()
                expect(actual).toEqual(expected)
            })
        })
    })

    describe("LeafSimilar", () => {
        it("should return false for tree 1 having no root and tree 2 having a root", () => {
            const root = new BinaryTreeNode({ data: 1 })
            const tree1 = new BinaryTree(root)

            const tree2 = new BinaryTree<number>()

            const actual = tree1.leafSimilar(tree2)
            expect(actual).toEqual(false)
        })

        it("should return true for tree1=3,5,1,6,2,9,8,null,null,7,4 and tree2=3,5,1,6,7,4,2,null,null,null,null,null,null,9,8", () => {
            const left1 = new BinaryTreeNode(
                {
                    data: 5,
                    left: new BinaryTreeNode({ data: 6 }),
                    right: new BinaryTreeNode({ data: 2, left: new BinaryTreeNode({ data: 7 }), right: new BinaryTreeNode({ data: 4 }) })
                })
            const right1 = new BinaryTreeNode({ data: 1, left: new BinaryTreeNode({ data: 9 }), right: new BinaryTreeNode({ data: 8 }) })

            const root1 = new BinaryTreeNode({ data: 3, left: left1, right: right1 })
            const tree1 = new BinaryTree(root1)

            const left2 = new BinaryTreeNode({ data: 5, left: new BinaryTreeNode({ data: 6 }), right: new BinaryTreeNode({ data: 7 }) })
            const right2 = new BinaryTreeNode({ data: 1, left: new BinaryTreeNode({ data: 4 }), right: new BinaryTreeNode({ data: 2, left: new BinaryTreeNode({ data: 9 }), right: new BinaryTreeNode({ data: 8 }) }) })

            const root2 = new BinaryTreeNode({ data: 3, left: left2, right: right2 })
            const tree2 = new BinaryTree(root2)

            const actual = tree1.leafSimilar(tree2)

            expect(actual).toEqual(true)
        })

        it("should return false for tree1=1,2,3 and tree2=1,3,2", () => {
            const root1 = new BinaryTreeNode({ data: 1, left: new BinaryTreeNode({ data: 2 }), right: new BinaryTreeNode({ data: 3 }) })
            const tree1 = new BinaryTree(root1)

            const root2 = new BinaryTreeNode({ data: 1, left: new BinaryTreeNode({ data: 3 }), right: new BinaryTreeNode({ data: 2 }) })
            const tree2 = new BinaryTree(root2)

            const actual = tree1.leafSimilar(tree2)

            expect(actual).toEqual(false)
        })
    })

    describe("CountGoodNodes", () => {
        it("should return 0 for tree having no root", () => {
            const tree = new BinaryTree()

            const actual = tree.countGoodNodes()
            expect(actual).toEqual(0)
        })

        it("should return 1 for tree having root, but no children", () => {
            const root = new BinaryTreeNode({ data: 1 })
            const tree = new BinaryTree(root)

            const actual = tree.countGoodNodes()
            expect(actual).toEqual(1)
        })

        it("should return 4 for tree=(3,1,4,3,null,1,5)", () => {
            const root = new BinaryTreeNode({ data: 3, left: new BinaryTreeNode({ data: 1, left: new BinaryTreeNode({ data: 3 }) }), right: new BinaryTreeNode({ data: 4, left: new BinaryTreeNode({ data: 1 }), right: new BinaryTreeNode({ data: 5 }) }) })

            const tree = new BinaryTree(root)

            const actual = tree.countGoodNodes()

            expect(actual).toEqual(4)
        })

        it("should return 3 for tree=(3,3,null,4,2)", () => {
            const root = new BinaryTreeNode({ data: 3, left: new BinaryTreeNode({ data: 3, left: new BinaryTreeNode({ data: 4 }), right: new BinaryTreeNode({ data: 2 }) }) })
            const tree = new BinaryTree(root)

            const actual = tree.countGoodNodes()

            expect(actual).toEqual(3)
        })
    })
})
