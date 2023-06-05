export function gcd(x: number, y: number): number {
  if (y == 0) {
    return x;
  } else {
    return gcd(y, x % y);
  }
}
