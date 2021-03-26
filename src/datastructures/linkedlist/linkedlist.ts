export default abstract class LinkedList<Node> {
    constructor(head: Node | null | undefined) {
        head = null
    }

    /**
     * Create new node add it to the end of the Linked List
     * @param {Node} node
     */
    abstract push(node: Node): void

    abstract alternateSplit(): [Node, Node]

    /**
     * Checks if a Linked list is a palindrome
     * @returns {boolean} True if the linked list can be read from tail to head as from head to tail
     */
    abstract isPalindrome(): boolean
}
