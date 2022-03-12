import LinkedList from "../LinkedList"
import { DoublyLinkedListNode } from "../nodes"

export default class DoublyLinkedList<K, D> extends LinkedList<DoublyLinkedListNode<K, D>> {
  head: DoublyLinkedListNode<K, D> | null | undefined
  tail: DoublyLinkedListNode<K, D> | null | undefined

  constructor(headNode: DoublyLinkedListNode<K, D> | null = null) {
    super(headNode)
    this.head = headNode
    this.tail = headNode
  }

  append(node: DoublyLinkedListNode<K, D>): void {
    throw new Error("Method not implemented.")
  }

  prepend(node: DoublyLinkedListNode<K, D>): void {
    throw new Error("Method not implemented.")
  }

  moveToHead(node: DoublyLinkedListNode<K, D>): void {
    throw new Error("Method not implemented.")
  }

  deleteNode(node: DoublyLinkedListNode<K, D> | null): void {
    let currentNode = this.head

    if (node) {
        while (currentNode) {
            // we have found our node
            if (currentNode.key === node.key) {
                // if it has a previous node(not the head) and a next node(not the tail). we move pointers around this
                // node, i.e. it's next is assigned to it's previous' next and its previous' next is assigned to its next
                if (currentNode.previous && currentNode.next) {
                    currentNode.previous.next = currentNode.next
                    currentNode.next.previous = currentNode.previous
                } else if (currentNode.previous && !currentNode.next) {
                    // in this instance we are dealing with the tail node, it has no next
                    currentNode.previous.next = currentNode.next
                    this.tail = currentNode.previous
                } else if (!currentNode.previous && currentNode.next) {
                    // otherwise we have no previous node, but we have a next node. K, Dhis is the head node.
                    // we make the head node's next the new head and the head node's next previous now points to null
                    this.head = currentNode.next
                    currentNode.next.previous = null
                }
            }
            // move the pointer down the linked list
            currentNode = currentNode.next
        }
    }
    return
  }

  deleteNodeByData(data: any): DoublyLinkedListNode<K, D> | null {
    throw new Error("Method not implemented.")
  }

  deleteNodeAtPosition(position: number): DoublyLinkedListNode<K, D> | null | undefined {
    throw new Error("Method not implemented.")
  }

  pairwiseSwap(): DoublyLinkedListNode<K, D> | null {
    throw new Error("Method not implemented.")
  }

  swapNodesAtKthAndKPlusOne(k: number): DoublyLinkedListNode<K, D> | null {
    throw new Error("Method not implemented.")
  }

  alternateSplit(): [DoublyLinkedListNode<K, D>, DoublyLinkedListNode<K, D>] {
    throw new Error("Method not implemented.")
  }

  isPalindrome(): boolean {
    throw new Error("Method not implemented.")
  }

  reverse() {
    if (this.head && this.head.next === null) {
      return
    }

    let current = this.head
    let previous: DoublyLinkedListNode<K, D> | null | undefined = null
    let next: DoublyLinkedListNode<K, D>| null | undefined = null

    while (current != undefined) {
      // copy a pointer to the next element, before we overwrite the current
      next = current.next

      // reverse the next pointer & previous pointer
      current.next = previous
      current.previous = next

      // step forward in the list
      previous = current
      // @ts-ignore
      current = next
    }

    this.head = previous
  }
}
