import BinaryTreeNode from "../../../../datastructures/trees/binarytree/BinaryTreeNode"
import { findClosestValueInBst } from "./findClosestValue"

type testCase = {
	name:     string,
	target:   number,
	expected: number,
	node:     BinaryTreeNode<number> | null,
}

const testCases: testCase[] = [
	{
		name:     "closest value is present in the tree",
		target:   7,
		expected: 5,
		node: new BinaryTreeNode({
			data: 10,
			left: new BinaryTreeNode({
				data: 5,
			}),
			right: new BinaryTreeNode({
				data: 15,
			}),
		}),
	},
	{
		name:     "closest value is not present in the tree",
		target:   8,
		expected: 10,
		node: new BinaryTreeNode({
			data: 10,
			left: new BinaryTreeNode({
				data: 5,
			}),
			right: new BinaryTreeNode({
				data: 15,
			}),
		}),
	},
	{
		name:     "single node tree",
		target:   3,
		expected: 10,
		node:     new BinaryTreeNode({data: 10}),
	},
	{
		name:     "empty tree",
		target:   3,
		expected: 0,
		node:     null,
	},
]

describe("findClosestValueInBst", () => {
	testCases.forEach(tc => {
		it(tc.name, () => {
			const result = findClosestValueInBst(tc.node, tc.target)
			expect(result).toBe(tc.expected)
		})
	})
})
