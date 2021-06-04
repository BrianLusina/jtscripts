/**
 * Gets the minimum difference between 2 sections of a tape
 * @param {Number[]} tape Array of numbers denoting points on a tap
 * @returns {Number} minimum difference
 */
export function tapeEquilibrium(tape: number[]): number {
    let parts = []

    parts[0] = tape[0]

    for (let index = 1; index < tape.length; index++) {
		parts[index] = tape[index] + parts[index - 1]
    }
    
    let difference = Number.MAX_SAFE_INTEGER

    for (let index = 0; index < parts.length - 1; index++) {
        difference = Math.min(difference, Math.abs(parts[-1] - 2 * parts[index]))
    }

    return difference
}