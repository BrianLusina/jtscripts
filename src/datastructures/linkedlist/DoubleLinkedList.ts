import LinkedList from "./linkedlist";
import { DoublyLinkedListNode } from "./nodes";

export default class DoublyLinkedList<T> extends LinkedList<DoublyLinkedListNode<T>> {

    head: DoublyLinkedListNode<T> | null | undefined;

    constructor(headNode: DoublyLinkedListNode<T> | null | undefined) {
        super(headNode);
        this.head = headNode
    }

    push(node: DoublyLinkedListNode<T>): void {
        throw new Error("Method not implemented.");
    }  

    alternateSplit(): [DoublyLinkedListNode<T>, DoublyLinkedListNode<T>] {
        throw new Error("Method not implemented.");
    }
}