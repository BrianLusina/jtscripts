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
}
