class OrderedStream {
    private stream: string[];
    private pointer: number;
    
    constructor(n: number) {
        this.stream = Array(n + 1).fill(null);
        this.pointer = 1
    }

    insert(idKey: number, value: string): string[] {
        this.stream[idKey] = value

        if (idKey > this.pointer) {
            return []
        }

        while(this.pointer < this.stream.length && this.stream[this.pointer]) {
            this.pointer +=1
        }

        return this.stream.slice(idKey, this.pointer);
    }
}

export default OrderedStream