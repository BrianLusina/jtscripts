import RandomizedSet from "./RandomizedSet"

describe("RandomizedSet", () => {

	it("insert(1) -> remove(2) -> insert(2) -> getRandom() -> remove(1) -> insert(2) -> getRandom()", () => {
		const randomizedSet = new RandomizedSet()

		const actualStepOne = randomizedSet.insert(1)
		expect(actualStepOne).toEqual(true)

		const actualStepTwo = randomizedSet.remove(2)
		expect(actualStepTwo).toEqual(false)

		const actualStepThree = randomizedSet.insert(2)
		expect(actualStepThree).toEqual(true)

		const actualStepFour = randomizedSet.getRandom()
		expect([1,2]).toContain(actualStepFour)

		const actualStepFive = randomizedSet.remove(1)
		expect(actualStepFive).toEqual(true)

		const actualStepSix = randomizedSet.insert(2)
		expect(actualStepSix).toEqual(false)

		const actualStepSeven = randomizedSet.getRandom()
		expect(actualStepSeven).toEqual(2)
	})
})
