import ValidBraces from "./valid_braces"

describe("ValidBraces", () => {
	it("should return true for complex latex expression", () => {
		const input = "\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)"
		const expected = true
		const actual = ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for valid math expression", () => {
		const input = "(((185 + 223.85) * 15) - 543)/2"
		const expected = true
		const actual = ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for empty strings", () => {
		const input =  ""
		const expected =  true
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for (){}[]", () => {
		const input =  "(){}[]"
		const expected =  true
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for ([{}])", () => {
		const input =  "([{}])"
		const expected =  true
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return false for (}", () => {
		const input =  "(}"
		const expected =  false
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return false for [(])", () => {
		const input =  "[(])"
		const expected =  false
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return false for [({)](]", () => {
		const input =  "[({)](]"
		const expected =  false
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for {}()[]", () => {
		const input =  "{}()[]"
		const expected =  true
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for ([{}])", () => {
		const input =  "([{}])"
		const expected =  true
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return false for ([{)]}", () => {
		const input =  "([{)]}"
		const expected =  false
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return false for ([}{])", () => {
		const input =  "([}{])"
		const expected =  false
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for {}({})[]", () => {
		const input =  "{}({})[]"
		const expected =  true
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for (({{[[]]}}))", () => {
		const input =  "(({{[[]]}}))"
		const expected =  true
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return false for (((({{}})[]))", () => {
		const input =  "(((({{}})[]))"
		const expected =  false
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for )(}{[]", () => {
		const input =  ")(}{[]"
		const expected =  false
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})

	it("should return true for (({[]{()}}[{(())}[]]))", () => {
		const input =  "(({[]{()}}[{(())}[]]))"
		const expected =  true
		const actual =  ValidBraces(input)
		expect(actual).toEqual(expected)
	})
})
