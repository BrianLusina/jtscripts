/**
 * Get's Pascal's Nth row from Pascal's Triangle using the formula:
 * 
 * NCr = (NCr - 1 * (N - r + 1)) / r where 1 ≤ r ≤ N
 * as the nth row consists of the following sequence:
 * NC0, NC1, ......, NCN - 1, NCN
 * @param {number} nth N'th row
 * @returns {number[]} Array of numbers in nth row of Pascal's Triangle
 */
export function pascalsNthRow(nth: number): number[] {
    let ncr1 = 1
    const row: number[] = [ncr1]

    for(let x = 1;x <= nth; x++) {
        const ncr = (ncr1 * (nth - x + 1)) / x
        row.push(ncr)
        ncr1 = ncr
    }

    return row
}
