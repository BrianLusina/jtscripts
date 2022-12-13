import { SinglyLinkedListNode } from '../nodes';

export function hasCycle(head: SinglyLinkedListNode<number, number>): boolean {
  let fastRunner = head;
  let slowRunner = head;

  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    if (fastRunner === slowRunner) {
      return true;
    }
  }

  return false;
}

/**
 * Detects node with Cycle and returns that node
 * @param {SinglyLinkedListNode} head
 * @returns {SinglyLinkedListNode} Node with Cycle
 */
export function detectNodeWithCycle(
  head: SinglyLinkedListNode<number, number>,
): SinglyLinkedListNode<number, number> | null {
  if (!head || !head.next) {
    return null;
  }

  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && slowPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;

    if (slowPointer === fastPointer) {
      slowPointer = head;

      while (slowPointer !== fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
      }
      return slowPointer;
    }
  }

  return null;
}
