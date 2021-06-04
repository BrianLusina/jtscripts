import DoublyLinkedList, { DoubleNode } from "../linkedlist/doublylinkedlist/DoublyLinkedList";

export default class LRUCache {
    capacity: number;
    lookup: Record<number, any>;
    size: number;
    linkedlist: DoublyLinkedList<number, any>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.lookup = {};
        this.size = 0;
        this.linkedlist = new DoublyLinkedList();
    }

    get(key: number): number {
        const node = this.lookup[key];

        if(node) {
            const data = node.data;
            this.linkedlist.deleteNode(node);
            this.linkedlist.moveToHead(node);
            return data
        }
        return -1;
    }

    put(key: number, value: number): void {
        const node = this.lookup[key];

        if(node) {
            node.data = value;
            this.linkedlist.deleteNode(node);
            this.linkedlist.moveToHead(node);
        } else {
            const newNode = new DoubleNode(key, value);
            this.lookup[key] = newNode;

            if (this.size === this.capacity) {
                // evict last node
                const tail = this.linkedlist.tail;
                if (tail) {
                    delete this.lookup[tail.key];
                }
                this.linkedlist.deleteNode(tail);
                this.linkedlist.moveToHead(newNode);
            } else {
                this.size += 1;
                this.linkedlist.moveToHead(newNode);
            }
        }
    }
}
