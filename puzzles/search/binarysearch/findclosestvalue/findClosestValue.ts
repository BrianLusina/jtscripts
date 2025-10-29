import BinaryTreeNode from '../../../../datastructures/trees/binarytree/BinaryTreeNode';

export const findClosestValueInBst = (
  node: BinaryTreeNode<number> | null,
  target: number,
): number => {
  if (node == null || node === undefined) {
    return 0;
  }

  if (node.data === target) {
    return node.data;
  }

  let closestValue = node.data;
  let minDiff = Math.abs(target - node.data);
  let current: BinaryTreeNode<number> | undefined | null = node;

  while (current != null) {
    const currentDiff = Math.abs(target - current.data);

    if (currentDiff < minDiff) {
      minDiff = currentDiff;
      closestValue = current.data;
    }

    if (current.data == target) {
      return current.data;
    }

    if (target < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  return closestValue;
};
