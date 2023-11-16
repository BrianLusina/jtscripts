import maxProfit from "./maxprofit"

describe("maxProfit", () => {
    it("should return 5 for prices of 7,1,5,3,6,4", () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
    })

    it("should return 0 for prices of 7,6,4,3,1", () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
    })
})
