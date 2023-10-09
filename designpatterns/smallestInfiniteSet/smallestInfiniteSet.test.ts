import SmallestInfiniteSet from "./smallestInfiniteSet";

describe('SmallestInfiniteSet', () => {
    describe('Operations are AddBack(2) - PopSmallest() - PopSmallest() - PopSmallest() - AddBack(1) - PopSmallest() - PopSmallest() - PopSmallest()', () => {
        const smallestInfiniteSet = new SmallestInfiniteSet()

        it('should perform operations in sequence correctly', () => {
			// 2 is already in the set, so no change is made.
			smallestInfiniteSet.addBack(2)

			// return 1, since 1 is the smallest number, and remove it from the set.
			const actual1 = smallestInfiniteSet.popSmallest()
			const expected1 = 1
			expect(actual1).toEqual(expected1)

			// return 2, and remove it from the set.
			const actual2 = smallestInfiniteSet.popSmallest()
			const expected2 = 2
			expect(actual2).toEqual(expected2)

			// return 3, and remove it from the set.
			const actual3 = smallestInfiniteSet.popSmallest()
			const expected3 = 3
			expect(actual3).toEqual(expected3)

			// 1 is added back to set
			smallestInfiniteSet.addBack(1)

			// return 1, since 1 was added back to the set and is the smallest number, and remove it from the set.
			const actual1_1 = smallestInfiniteSet.popSmallest()
			const expected1_1 = 1
			expect(actual1_1).toEqual(expected1_1)

			// return 4, and remove it from the set.
			smallestInfiniteSet.popSmallest()
        })
    })

    describe("PopSmallest is called 1000 times",() => {
		const smallestInfiniteSet = new SmallestInfiniteSet()

		it("should perform operations in sequence correctly", () => {
            for (let x = 1; x < 1001; x++) {
                const actual = smallestInfiniteSet.popSmallest()
                expect(actual).toEqual(x)
            }
		})
	})
})
