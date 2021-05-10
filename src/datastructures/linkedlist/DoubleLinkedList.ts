import LinkedList from "./LinkedList";
import { DoublyLinkedListNode } from "./nodes";

export default class DoublyLinkedList<T> extends LinkedList<DoublyLinkedListNode<T>> {
    
    head: DoublyLinkedListNode<T> | null | undefined;

    constructor(headNode: DoublyLinkedListNode<T> | null) {
        super(headNode);
        this.head = headNode
    }

    append(node: DoublyLinkedListNode<T>): void {
        throw new Error("Method not implemented.");
    }  
    
    deleteNode(node: DoublyLinkedListNode<T>): DoublyLinkedListNode<T> | null {
        throw new Error("Method not implemented.");
    
    }
    
    deleteNodeByData(data: any): DoublyLinkedListNode<T> | null {
        throw new Error("Method not implemented.");
    }
    
    deleteNodeAtPosition(position: number): DoublyLinkedListNode<T> | null | undefined {
        throw new Error("Method not implemented.");
    }
    
    pairwiseSwap(): DoublyLinkedListNode<T> | null {
        throw new Error("Method not implemented.");
    }
    
    swapNodesAtKthAndKPlusOne(k: number): DoublyLinkedListNode<T> | null {
        throw new Error("Method not implemented.");
    }


    alternateSplit(): [DoublyLinkedListNode<T>, DoublyLinkedListNode<T>] {
        throw new Error("Method not implemented.");
    }

    isPalindrome(): boolean {
        throw new Error("Method not implemented.");
    }

}