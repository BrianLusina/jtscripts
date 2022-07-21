import add from './functionaladd'

describe("Functional Add", () => {
    it("should return 4 for add(1)(3)", () => {
        const actual = add(1)(3)
        const expected = 4
        expect(actual).toEqual(expected)
    })

    for (let i = 0; i < 100; i++) {
        const num1 = Math.floor(Math.random() * 1001) - 500
        const num2 = Math.floor(Math.random() * 1001) - 500
        const actual = add(num1)(num2)
        const expected = num1 + num2

        it(`should return ${expected} for add(${num1})(${num2})`, () => {
          expect(actual).toEqual(expected)
        })
    }
})
