import BrowserHistory from "./BrowserHistory";

describe('BrowserHistory', () => {
    it("should handle visit('google.com') -> visit('facebook.com') -> visit('youtube.com') -> back(1) -> back(1) -> forward(1) -> visit('linkedin.com') -> forward(2) -> back(2) -> back(7)", () => {
		const browserhistory = new BrowserHistory("leetcode.com")
		browserhistory.visit("google.com")
		browserhistory.visit("facebook.com")
		browserhistory.visit("youtube.com")

		// move back to facebook.com from youtube.com
		expect(browserhistory.back(1)).toEqual("facebook.com")

		// move back to google.com from facebook.com
		expect(browserhistory.back(1)).toEqual("google.com")

		// move forward to facebook.com from google.com
		expect(browserhistory.forward(1)).toEqual("facebook.com")

		browserhistory.visit("linkedin.com")

		// move forward by 2 steps is not possible
		expect(browserhistory.forward(2)).toEqual("linkedin.com")

		// move back by 2 steps to google.com
		expect(browserhistory.back(2)).toEqual("google.com")

		// move back by 7 steps to leetcode.com
		expect(browserhistory.back(7)).toEqual("leetcode.com")
    })
})