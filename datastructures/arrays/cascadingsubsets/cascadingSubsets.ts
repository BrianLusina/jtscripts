export default function eachCons(array: number[], n: number): number[][] {
	const result: number[][] = []

	for (let x = 0; x <= array.length - n; x++) {
		result.push(array.slice(x, x + n))
	}

	return result
}
