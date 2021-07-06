import MaxStackJs from "./MaxStackJs"
import MaxStack from './MaxStack'

describe("Max Stack", () => {

    describe("in JS", () => {
        const maxStack = new MaxStackJs()
        it("should add -2 to stack", () => {
            maxStack.push(-2)
            expect(maxStack.stack).toEqual([-2])
        })

        it("should add 0 to stack", () => {
            maxStack.push(0)
            expect(maxStack.stack).toEqual([-2, 0])
        })

        it("should add -3 to stack", () => {
            maxStack.push(-3)
            expect(maxStack.stack).toEqual([-2, 0, -3])
        })

        it("should getMin & return 0", () => {
            const currentMax = maxStack.getMax()
            expect(maxStack.stack).toEqual([-2, 0, -3])
            expect(currentMax).toEqual(0)
        })

        it("should pop() top item & remove it from stack", () => {
            maxStack.pop()
            expect(maxStack.stack).toEqual([-2, 0])
        })

        it("should peek top item & not remove it from stack", () => {
            const currentTop = maxStack.top()
            expect(maxStack.stack).toEqual([-2, 0])
            expect(currentTop).toEqual(0)
        })

        it("should get current min as -2 & not remove it from stack", () => {
            const currentMax = maxStack.getMax()
            expect(maxStack.stack).toEqual([-2, 0])
            expect(currentMax).toEqual(0)
        })
    })

    describe('In TS', () => {
        const maxStack = new MaxStack()

        it("should add -2 to stack", () => {
            maxStack.push(-2)
            expect(maxStack.stack).toEqual([-2])
        })

        it("should add 0 to stack", () => {
            maxStack.push(0)
            expect(maxStack.stack).toEqual([-2, 0])
        })

        it("should add -3 to stack", () => {
            maxStack.push(-3)
            expect(maxStack.stack).toEqual([-2, 0, -3])
        })

        it("should getMin & return -3", () => {
            const currentMax = maxStack.getMax()
            expect(maxStack.stack).toEqual([-2, 0, -3])
            expect(currentMax).toEqual(0)
        })

        it("should pop() top item & remove it from stack", () => {
            maxStack.pop()
            expect(maxStack.stack).toEqual([-2, 0])
        })

        it("should peek top item & not remove it from stack", () => {
            const currentTop = maxStack.peek()
            expect(maxStack.stack).toEqual([-2, 0])
            expect(currentTop).toEqual(0)
        })

        it("should get current min as -2 & not remove it from stack", () => {
            const currentMax = maxStack.getMax()
            expect(maxStack.stack).toEqual([-2, 0])
            expect(currentMax).toEqual(0)
        })
    })
})