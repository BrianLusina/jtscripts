import LinkedList from "./linkedlist";
import { SinglyLinkedListNode } from "./nodes";

export default class SinglyLinkedList<T> extends LinkedList<SinglyLinkedListNode<T>> {

    head: SinglyLinkedListNode<T> | null | undefined;

    constructor(headNode: SinglyLinkedListNode<T> | null | undefined) {
        super(headNode);
        this.head = headNode
    }

    push(node: SinglyLinkedListNode<T>): void {

    }

    alternateSplit(): [SinglyLinkedListNode<T>, SinglyLinkedListNode<T>] {
        if(!this.head || !this.head?.next) {
            throw new Error("Head should not be null")
        }

        let current = this.head;
        let first = current
        let second = current.next

        while(current && current.next) {
            let temp = current.next

            // set the next node for the first linked list
            current.next = temp.next

            // check if the next node is available for the second linked list
            if(current.next && current.next.next) {
                // set the next node for the second linked list
                temp.next = current.next.next
            } else {
                // we are at the end
                temp.next = null
            }
            // keep moving the pointer
            // @ts-ignore
            current = current.next
        }
        
        // @ts-ignore 
        return [first, second];
    }

    isPalindrome(): boolean {
        if(!this.head) {
            return false
        }
        if(!this.head.next) {
            return true;
        }

        let current = this.head;
        const stack: any[] = [];

        while(current) {
            stack.push(current.data);
            // @ts-ignore
            current = current.next;
        }

        current = this.head;

        while(current) {
            const data = stack.pop();

            if(current.data !== data) {
                return false;
            }
            
            // @ts-ignore
            current = current.next;
        }

        return true;
    }
}