export default function bouncingBall(h: number, bounce: number, window: number): number {
  let rebound = -1;

  if (0 < bounce && bounce < 1) {
    while (h > window) {
      h *= bounce;
      rebound += 2;
    }
  }

  return rebound;
}
