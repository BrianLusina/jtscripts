/* eslint-disable @typescript-eslint/ban-ts-comment */
type pair = {
  timestamp: number;
  value: string;
};

export class TimeMap {
  private histories: Map<string, pair[]>;

  constructor() {
    this.histories = new Map<string, pair[]>();
  }

  set(key: string, value: string, timestamp: number): void {
    const timeToValue = { timestamp: timestamp, value: value };

    if (!this.histories.has(key)) {
      this.histories.set(key, []);
    }

    const values = this.histories.get(key);
    values?.push(timeToValue);

    // @ts-ignore
    this.histories.set(key, values);
  }

  get(key: string, timestamp: number): string {
    if (!this.histories.has(key)) {
      return '';
    }

    const keyHistoricalValues = this.histories.get(key);
    // @ts-ignore
    if (keyHistoricalValues[0].timestamp > timestamp) {
      return '';
    }

    let left = 0;
    // @ts-ignore
    let right = keyHistoricalValues?.length - 1;
    let pos = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // @ts-ignore
      const timestampValueAtMid = keyHistoricalValues[mid];
      const timestampForValue = timestampValueAtMid.timestamp;

      if (timestampForValue == timestamp) {
        return timestampValueAtMid.value;
      }

      if (timestampForValue <= timestamp) {
        left = mid + 1;
        pos = mid;
      } else {
        right = mid - 1;
      }
    }

    if (pos == -1) {
      return '';
    }
    // @ts-ignore
    return keyHistoricalValues[pos].value;
  }
}
