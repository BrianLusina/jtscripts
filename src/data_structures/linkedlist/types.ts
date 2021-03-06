// export class SinglyLinkedListNode<T> {
//     public next: SinglyLinkedListNode<T> | null = null;    
//     constructor(public data: T) {}
// };

// export class DoublyLinkedListNode<T> {
//     public next: DoublyLinkedListNode<T> | null = null;
//     public prev: DoublyLinkedListNode<T> | null = null;
//     constructor(public data: T) {}
// };

export type SinglyLinkedListNode = {
    data: any;
    next?: SinglyLinkedListNode | null;
}