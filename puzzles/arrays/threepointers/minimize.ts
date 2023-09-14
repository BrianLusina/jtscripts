// minimize minimizes the maximum difference
// Windowing strategy works here.
// Take 3 pointers i, j and k
//
// Initialize them to point to the start of arrays a, b and c
// Find min of i, j and k.
// Compute max(i, j, k) - min(i, j, k).
// If the new result is less than the current result, change it to the new result.
// Increment the pointer of the array which contains the minimum.
//
// Note that we increment the pointer of the array which has the minimum, because our goal is to decrease the difference.
// Increasing the maximum pointer is definitely going to increase the difference. Increasing the second maximum pointer
// can potentially increase the difference (however, it certainly will not decrease the difference).
export function minimize(a: number[], b: number[], c: number[]): number {
  let currentMin = Number.MAX_SAFE_INTEGER;
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length && k < c.length) {
    const aNum = a[i];
    const bNum = b[j];
    const cNum = c[k];

    const ab = Math.abs(aNum - bNum);
    const bc = Math.abs(bNum - cNum);
    const ca = Math.abs(cNum - aNum);

    const current = Math.max(ab, bc, ca);
    currentMin = Math.min(current, currentMin);

    const minOfThree = Math.min(aNum, bNum, cNum);

    if (aNum == minOfThree) {
      i += 1;
    } else if (bNum == minOfThree) {
      j += 1;
    } else {
      k += 1;
    }
  }

  return currentMin;
}
