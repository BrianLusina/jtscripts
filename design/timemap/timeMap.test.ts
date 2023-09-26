import { TimeMap } from "./timeMap"

describe("TimeMap", () => {
	it("set('foo', 'bar', 1) -> get('foo', 1) -> get('foo', 3) -> get('foo', 3) -> set('foo', 'bar2', 4) -> get('foo', 4) -> get('foo', 5)", () => {
		const timeMap = new TimeMap()

		// store the key "foo" and value "bar" along with timestamp = 1.
		timeMap.set("foo", "bar", 1)

		// return "bar"
		const expectedBar = "bar"
		const actualAtTime1 = timeMap.get("foo", 1)
		expect(actualAtTime1).toEqual(expectedBar)

		// return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
		const expectedBar2 = "bar"
		const actualAtTime3 = timeMap.get("foo", 3)
		expect(actualAtTime3).toEqual(expectedBar2)

		// store the key "foo" and value "bar2" along with timestamp = 4.
		timeMap.set("foo", "bar2", 4)

		// # return "bar2"
		const expectedBar22 = "bar2"
		const actualAtTime4 = timeMap.get("foo", 4)
		expect(actualAtTime4).toEqual(expectedBar22)

		// # return "bar2"
		const expectedBar23 = "bar2"
		const actualAtTime5 = timeMap.get("foo", 5)
		expect(actualAtTime5).toEqual(expectedBar23)
	})
})
