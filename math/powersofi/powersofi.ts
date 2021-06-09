export default function pofi(n: number): string {
    return ['1', 'i', '-1', '-i'][n % 4];
  }