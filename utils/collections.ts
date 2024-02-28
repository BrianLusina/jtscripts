export function sum<T>(array: T[]): T {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return array.reduce((a, b) => a + b, 0);
}
