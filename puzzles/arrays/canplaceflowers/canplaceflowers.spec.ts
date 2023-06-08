import { canPlaceFlowers, canPlaceFlowers2 } from "./canplaceflowers";

type testCase = {
    flowerBed: number[]
    n: number
    expected: boolean
}

const testCases: testCase[] = [
    {
        flowerBed: [1, 0, 0, 0, 1],
        n: 1,
        expected: true
    },
    {
        flowerBed: [1, 0, 0, 0, 1],
        n: 2,
        expected: false
    }
]

describe('Can Place Flowers', () => {
    describe('Single Scan', () => {
        testCases.forEach(({ flowerBed, n, expected }) => {
            it(`should return ${expected} for flowerbed=${flowerBed} and n=${n}`, () => {
                const actual = canPlaceFlowers(flowerBed, n)
                expect(actual).toEqual(expected)
            })
        })
    })

    describe('Optimized Single Scan', () => {
        testCases.forEach(({ flowerBed, n, expected }) => {
            it(`should return ${expected} for flowerbed=${flowerBed} and n=${n}`, () => {
                const actual = canPlaceFlowers2(flowerBed, n)
                expect(actual).toEqual(expected)
            })
        })

    })
})
