export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let index = 0; index < flowerbed.length; index++) {
    const flowerPlot = flowerbed[index];
    if (flowerPlot == 0) {
      const emptyLeftPlot = index == 0 || flowerbed[index - 1] == 0;
      const emptyRightPlot = index == flowerbed.length - 1 || flowerbed[index + 1] == 0;

      if (emptyLeftPlot && emptyRightPlot) {
        flowerbed[index] = 1;
        count += 1;
      }
    }
  }

  return count >= n;
}

export function canPlaceFlowers2(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let index = 0; index < flowerbed.length; index++) {
    const flowerPlot = flowerbed[index];
    if (flowerPlot == 0) {
      const emptyLeftPlot = index == 0 || flowerbed[index - 1] == 0;
      const emptyRightPlot = index == flowerbed.length - 1 || flowerbed[index + 1] == 0;

      if (emptyLeftPlot && emptyRightPlot) {
        flowerbed[index] = 1;
        count += 1;
        if (count >= n) {
          return true;
        }
      }
    }
  }

  return count >= n;
}
