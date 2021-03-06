import { SinglyLinkedListNode } from "../types";

export function removeDuplicates(head: SinglyLinkedListNode): SinglyLinkedListNode {
    if(!head || !head.next) {
        return head
    }
    
    let current = head
    let next = current.next
    
    while(next) {
        if(next.data === current.data) {
            current.next = current.next.next
            next = current.next
        } else {
            current = next
            next = current.next
        }
    }
    return head
}