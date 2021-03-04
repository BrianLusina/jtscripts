import { SinglyLinkedListNode } from "../types";

export function hasCycle(head: SinglyLinkedListNode) {
    let fastRunner = head;
    let slowRunner = head
    
    while(fastRunner && fastRunner.next) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;
        
        if(fastRunner === slowRunner) {
            return true;
        }
    }
    
    return false;
}