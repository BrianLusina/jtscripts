const openersToClosersMap: Record<string, string> = {
	'(': ')',
	'{': '}',
	'[': ']',
	'<': '>',
}

const openers: Record<string, boolean> = {'(': true, '{': true, '[': true, '<': true}
const closers: Record<string, boolean> = {')': true, '}': true, ']': true, '>': true}

export default function ValidBraces(str: string): boolean {
	const stack: string[] = []

	for (let index = 0; index < str.length; index++) {
		const char = str[index]
		if (openers[char]) {
			stack.push(char)
		} else if (closers[char]) {
			if (stack.length === 0) {
				return false
			} else {
				const lastOpener = stack.pop()
				if (lastOpener) {
					if (openersToClosersMap[lastOpener] !== char) {
						return false
					}
				}
			}
		}
		
	}

	return stack.length === 0
}
