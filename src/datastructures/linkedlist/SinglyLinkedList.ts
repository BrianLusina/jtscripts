import LinkedList from "./LinkedList";
import { SinglyLinkedListNode } from "./nodes";

export default class SinglyLinkedList<T> extends LinkedList<SinglyLinkedListNode<T>> {
    head: SinglyLinkedListNode<T> | null;

    constructor(headNode: SinglyLinkedListNode<T> | null) {
        super(headNode);
        this.head = headNode
    }

    push(node: SinglyLinkedListNode<T>): void {

    }

    deleteNodeAtPosition(position: number): SinglyLinkedListNode<T> | null | undefined {
        if(position < 0) {
            const errMessage = `Invalid Index position given. Index is ${position}, expected position >= 0"`
            throw new Error(errMessage);
        }
    
        // Nothing to delete here
        if (this.head == null) {
            return null
        }
    
        if (this.head != null && position == 0) {
            const current = this.head
            this.head = null
            return current
        }
    
        let current = this.head

        while(current) {
            for (let index = 0; index < position; index++) {
                // @ts-ignore
                current = current.next

                if (!current) {
                    throw new Error(`Invalid position ${position} specified, reached end of list`)
                }
            }
        }
    
        const node = current
        
        // @ts-ignore
        current.data = current.next.Data
        // @ts-ignore
        current.next = current.dext.Next
    
        return node
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

    pairwiseSwap(): SinglyLinkedListNode<T> | null {
        // there is no head here, nothing to do
        if(!this.head) {
            return this.head;
        }

        let current = this.head;

        // While there are at least 2 nodes left
        while(current && current.next) {

            // if the 2 nodes have the same data value
            if(current.data === current.next.data) {
                // @ts-ignore
                // then we move to the next pair
                current = current.next.next
            } else {
                // Swap the 2 data values of the next pair
                let temp = current.data
                current.data = current.next.data
                current.next.data = temp
                
                // @ts-ignore
                // move to the next pair
                current = current.next.next
            }
        }

        return this.head;
    }

    swapNodes(k: number): SinglyLinkedListNode<T> | null {
        let a = this.head; 
        let b = this.head;

        for (let index = 1; index < k; index++) {
            // @ts-ignore
            a = a?.next;            
        }

        let node = a
        // @ts-ignore
        a = a?.next

        while(a) {
            // @ts-ignore
            a = a.next
            // @ts-ignore
            b = b?.next
        }
        
        let temp = node?.data
        // @ts-ignore
        node.data = b?.data
        // @ts-ignore
        b.data = temp;

        return this.head;
    }
}