import { SinglyLinkedListNode } from './nodes';

/**
 * Merges two sorted linked lists and returns 1 sorted linked list
 * @param list1 Sorted linked list 1
 * @param list2 Sorted linked list 2
 * @returns Merged sorted linked list
 */
export function mergeTwoLists<K, T>(
  list1: SinglyLinkedListNode<K, T> | null,
  list2: SinglyLinkedListNode<K, T> | null,
): SinglyLinkedListNode<K, T> | null {
  if (!list1 && list2) {
    return list2;
  }

  if (!list2 && list1) {
    return list1;
  }

  if (!list1 && !list2) {
    return null;
  }

  let temp: SinglyLinkedListNode<K, T> | null;

  if (list1.data < list2.data) {
    temp = list1;
    list1 = list1?.next;
  } else {
    temp = list2;
    list2 = list2?.next;
  }

  let current = temp;

  while (list1 != null && list2 != null) {
    if (list1.data > list2.data) {
      current?.next = list2;
      list2 = list2.next;
    } else {
      current?.next = list1;
      list1 = list1.next;
    }
    current = current?.next;
  }

  if (list1 != null) {
    current.next = list1;
  }

  if (list2 != null) {
    current.next = list2;
  }

  return temp;
}
