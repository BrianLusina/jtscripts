import Stack from "../index"

class MinStack extends Stack {
    private minimum: number

    constructor(maxsize: number = 0) {
        super(maxsize)
        this.minimum = Infinity
    }

    push(val: number): void {
        super.push(val)
        if (val < this.minimum) {
            this.minimum = val
        }
    }

    pop(): void {
        const v = super.pop()

        if (this.stack.length === 0) {
            this.minimum = Infinity
        } else if (this.minimum === v) {
            this.minimum = Math.min(...this.stack)
        }
    }

    peek(): number {
        return super.peek()
    }

    getMin(): number {
        return this.minimum
    }
}

export default MinStack