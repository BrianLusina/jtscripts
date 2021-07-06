import MinStackJs from "./MinStackJs"
import MinStack from './MinStack'

describe("Min Stack", () => {

    describe("in JS", () => {
        const minStack = new MinStackJs()
        it("should add -2 to stack", () => {
            minStack.push(-2)
            expect(minStack.stack).toEqual([-2])
        })

        it("should add 0 to stack", () => {
            minStack.push(0)
            expect(minStack.stack).toEqual([-2, 0])
        })

        it("should add -3 to stack", () => {
            minStack.push(-3)
            expect(minStack.stack).toEqual([-2, 0, -3])
        })

        it("should getMin & return -3", () => {
            const currentMin = minStack.getMin()
            expect(minStack.stack).toEqual([-2, 0, -3])
            expect(currentMin).toEqual(-3)
        })

        it("should pop() top item & remove it from stack", () => {
            minStack.pop()
            expect(minStack.stack).toEqual([-2, 0])
        })

        it("should peek top item & not remove it from stack", () => {
            const currentTop = minStack.top()
            expect(minStack.stack).toEqual([-2, 0])
            expect(currentTop).toEqual(0)
        })

        it("should get current min as -2 & not remove it from stack", () => {
            const currentMin = minStack.getMin()
            expect(minStack.stack).toEqual([-2, 0])
            expect(currentMin).toEqual(-2)
        })
    })

    describe('In TS', () => {
        const minStack = new MinStack()

        it("should add -2 to stack", () => {
            minStack.push(-2)
            expect(minStack.stack).toEqual([-2])
        })

        it("should add 0 to stack", () => {
            minStack.push(0)
            expect(minStack.stack).toEqual([-2, 0])
        })

        it("should add -3 to stack", () => {
            minStack.push(-3)
            expect(minStack.stack).toEqual([-2, 0, -3])
        })

        it("should getMin & return -3", () => {
            const currentMin = minStack.getMin()
            expect(minStack.stack).toEqual([-2, 0, -3])
            expect(currentMin).toEqual(-3)
        })

        it("should pop() top item & remove it from stack", () => {
            minStack.pop()
            expect(minStack.stack).toEqual([-2, 0])
        })

        it("should peek top item & not remove it from stack", () => {
            const currentTop = minStack.peek()
            expect(minStack.stack).toEqual([-2, 0])
            expect(currentTop).toEqual(0)
        })

        it("should get current min as -2 & not remove it from stack", () => {
            const currentMin = minStack.getMin()
            expect(minStack.stack).toEqual([-2, 0])
            expect(currentMin).toEqual(-2)
        })
    })
})