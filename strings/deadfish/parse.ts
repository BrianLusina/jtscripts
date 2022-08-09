/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  let value = 0;
  const result: number[] = [];

  for (const d of data) {
    switch (d) {
      case 'i':
        value += 1;
        break;

      case 's':
        value *= value;
        break;

      case 'd':
        value -= 1;
        break;

      case 'o':
        result.push(value);
        break;

      default:
        break;
    }
  }

  return result;
}
