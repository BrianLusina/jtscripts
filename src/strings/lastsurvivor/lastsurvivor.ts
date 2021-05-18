export function lastSurvivor(letters: string, coords: number[]): string {
    let letterArr = letters.split('');

    for (let x = 0; x < coords.length; x++) {
      let pos = coords[x];
      letterArr.splice(pos, 1);
    }
    
    return letterArr.join('');
}
