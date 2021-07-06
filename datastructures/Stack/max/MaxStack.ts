import Stack from "../index"

class MaxStack extends Stack {
    private maximum: number

    constructor(maxsize: number = 0) {
        super(maxsize)
        this.maximum = -Infinity
    }

    push(val: number): void {
        super.push(val)
        if (val > this.maximum) {
            this.maximum = val
        }
    }

    pop(): void {
        const v = super.pop()

        if (this.stack.length === 0) {
            this.maximum = -Infinity
        } else if (this.maximum === v) {
            this.maximum = Math.max(...this.stack)
        }
    }

    peek(): number {
        return super.peek()
    }

    getMax(): number {
        return this.maximum
    }
}

export default MaxStack