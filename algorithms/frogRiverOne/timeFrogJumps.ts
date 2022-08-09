/**
 * Returns the earliest time that a frog can jump to the other side of the river.
 * Uses a Set to store unique values from leafPositions[].
 * When the size equals to endPosition, means the leaves have covered all positions from 1 to endPosition.
 * So the frog can get to the position endPosition + 1.
 * @param {number} endPosition The position of the other side of the bank
 * @param {number[]} leafPositions Array of the leaf positions
 * @returns {number} Earliset time that a frog can jump to the other side of the river
 */
export default function timeFrogJumps(endPosition: number, leafPositions: number[]): number {
  const values = new Set();

  for (let time = 0; time < leafPositions.length; time++) {
    values.add(leafPositions[time]);
    if (values.size === endPosition) {
      return time;
    }
  }
  return -1;
}
