import { createHash } from 'crypto';

export function generateHash<D>(data: D): string {
  return createHash('sha1').update(`${data}`).digest('hex');
}
