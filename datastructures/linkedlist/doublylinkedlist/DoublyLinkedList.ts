import LinkedList from '../LinkedList';
import DoubleNode from './DoubleNode';

export default class DoublyLinkedList<T> extends LinkedList<T> {
  head: DoubleNode<T> | null | undefined;
  tail: DoubleNode<T> | null | undefined;
  private size: number;

  constructor(headNode: DoubleNode<T> | null = null) {
    super();
    this.size = 0;
    this.head = headNode;
    this.tail = headNode;
  }

  append(data: T): void {
    this.size += 1;
    const newNode = new DoubleNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;

      // This is also viable if the doubly linked list does not have a tail node reference. This will traverse
      // the entire list until it reaches the end and add this node to the end, this results in an O(n) operation
      //            var current = head
      //            while (current?.next != null) {
      //                current = current.next
      //            }
      //            current?.next = newNode
      //            newNode.prev = current
    }
  }

  prepend(data: T): void {
    throw new Error('Method not implemented.');
  }

  moveToHead(data: T): void {
    throw new Error('Method not implemented.');
  }

  deleteNode(data: T | null): void {
    let currentNode = this.head;

    if (data) {
      while (currentNode) {
        // we have found our node
        if (currentNode.data === data) {
          // if it has a previous node(not the head) and a next node(not the tail). we move pointers around this
          // node, i.e. it's next is assigned to it's previous' next and its previous' next is assigned to its next
          if (currentNode.previous && currentNode.next) {
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
          } else if (currentNode.previous && !currentNode.next) {
            // in this instance we are dealing with the tail node, it has no next
            currentNode.previous.next = currentNode.next;
            this.tail = currentNode.previous;
          } else if (!currentNode.previous && currentNode.next) {
            // otherwise we have no previous node, but we have a next node. K, Dhis is the head node.
            // we make the head node's next the new head and the head node's next previous now points to null
            this.head = currentNode.next;
            currentNode.next.previous = null;
          }
        }
        // move the pointer down the linked list
        currentNode = currentNode.next;
      }
    }
    return;
  }

  deleteNodeByData(data: T): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }

  deleteNodeAtPosition(position: number): DoubleNode<T> | null | undefined {
    throw new Error('Method not implemented.');
  }

  pairwiseSwap(): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }

  swapNodesAtKthAndKPlusOne(k: number): DoubleNode<T> | null {
    throw new Error('Method not implemented.');
  }

  alternateSplit(): [DoubleNode<T>, DoubleNode<T>] {
    throw new Error('Method not implemented.');
  }

  isPalindrome(): boolean {
    throw new Error('Method not implemented.');
  }

  reverse(): void {
    if (this.head && this.head.next === null) {
      return;
    }

    let current = this.head;
    let previous: DoubleNode<T> | null | undefined = null;
    let next: DoubleNode<T> | null | undefined = null;

    while (current != undefined) {
      // copy a pointer to the next element, before we overwrite the current
      next = current.next;

      // reverse the next pointer & previous pointer
      current.next = previous;
      current.previous = next;

      // step forward in the list
      previous = current;
      // @ts-ignore
      current = next;
    }

    this.head = previous;
  }

  get length(): number {
    return this.size;
  }
}
