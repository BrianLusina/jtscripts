export function largestAltitude(gain: number[]): number {
  let currentAltitude = 0;
  let highest = 0;

  for (const altitude of gain) {
    currentAltitude += altitude;
    highest = Math.max(highest, currentAltitude);
  }

  return highest;
}
