/**
 * Node element which will contain reference to the next and previous node elements
 */
class Node{
    /**
     * Creates a new node element
     * @param {*} value Value of the node
     * @param {*} next link to the the next node element
     * @param {*} prev link to the previous node element
     */
    constructor(value, next, prev){
        this.value = value;
        this.next = next || this;
        this.prev = prev || this;
    }
}

class LinkedList{

    /**
     * Initiallly set the front of the linked list as null
     */
    constructor(){
        this._front = null;
    }

    /**
     * Adds an element to the back of the linked list
     * check if the fron is null, means that this is the first entry in the linked list
     * create new node element
     * 
     * @param {Node} elem 
     * @return {undefined}
     */    
    push(elem){
        if(this._front === null){
            this._front = new Node(elem);
        }else{
            let node = new Node(elem, null, this._front);
            this._front.next = node;
            // let back = this._front.prev;
            // let node = new Node(elem, this._front, back);
            // back.next = node;
            // this._front.next = node;
        }
    }

    /**
     * Remove value at the back of the linked list and returns it
     * If there is nothing in the linked list undefined will be returned
     * @return {Node} the node element if found
     */
    pop(){
        if(this._front === null){
            return undefined;
        }
        this._front = this._front.prev;
        
        return this.shift();
    }

    /**
     * Remove an element from the front of the linked list and return it
     * 
     * @return {Node}
     */
    shift(){
        let val = this._front.value;
        let nxt = this._front.next;
        let prv = this._front.prev;

        if(nxt === this._front){
            this._front = null;
        }else{
            nxt.prev = prv;
            prv.next = nxt;
            this._front = nxt;
        }

        return val;
    }

    /**
     * Insert a value at the front of the linked list
     * @param {Node} elem 
     */
    unshift(elem){

    }
}

module.exports = LinkedList;
