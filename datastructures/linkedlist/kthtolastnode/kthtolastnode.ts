import { SinglyLinkedListNode } from '../nodes';

export function getKthToLastNode(
  head: SinglyLinkedListNode,
  positionFromTail: number,
): SinglyLinkedListNode {
  let runner = head;
  let current = head;

  for (let x = 0; x < positionFromTail; x++) {
    runner = runner.next;
  }

  while (runner.next) {
    runner = runner.next;
    current = current.next;
  }

  return current;
}
