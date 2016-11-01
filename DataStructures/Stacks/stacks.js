/**
 * Stack class to create Stack objects for browserHistory
 * underscore denotes that these variables are private and should not be manipulated externally
 * top method returns the current position*/ 
class Stack{
    constructor(){
        this._storage = {};
        this._position = -1 //0 indexed when we add items
    }
    top(){
        return this._position;
    }
}

let browserHistory = new Stack();