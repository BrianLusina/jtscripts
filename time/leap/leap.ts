export function isLeap(year: number): boolean {
  return !((!(year % 100) && year % 400) || year % 4);
}
