export function lastSurvivor(letters: string, coords: number[]): string {
  const letterArr = letters.split('');

  for (let x = 0; x < coords.length; x++) {
    const pos = coords[x];
    letterArr.splice(pos, 1);
  }

  return letterArr.join('');
}
