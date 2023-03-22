import RecentCounter from "./RecentCounter";

describe('RecentCounter', () => {
    it('should work for calls ping(1) -> ping(100) -> ping(3001) -> ping(3002)', () => {
        const recentCounter = new RecentCounter()
        
        // requests = [1], range is [-2999,1], return 1
        const firstPing = recentCounter.ping(1)
        expect(firstPing).toEqual(1)

        // requests = [1, 100], range is [-2900,100], return 2
        const secondPing = recentCounter.ping(100)
        expect(secondPing).toEqual(2)

        // requests = [1, 100, 3001], range is [1,3001], return 3
        const thirdPing = recentCounter.ping(3001)
        expect(thirdPing).toEqual(3)

        // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
        const fourthPing = recentCounter.ping(3002)
        expect(fourthPing).toEqual(3)
    })
})
