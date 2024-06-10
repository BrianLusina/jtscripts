import { generateHash } from '../../utils/hash';

type HashItem<K, V> = {
  key: K;
  value: V;
};

export default class HashMap<K, V> {
  private maxSize: number;
  private map: Map<string, HashItem<K, V>>;
  // Current MAX_SIZE, is 10**3, change this to change the default size of the hashmap
  private MAX_SIZE = 10 ** 3;
  private currentSize: number;

  constructor(size?: number) {
    this.maxSize = size || this.MAX_SIZE;
    this.currentSize = 0;
    this.map = new Map<string, HashItem<K, V>>();
  }

  private hash(key: K): string {
    return generateHash(key);
  }

  put(key: K, value: V): void {
    if (this.isFull()) {
      throw new Error(`HashMap is currently full. Current capacity is ${this.currentSize}`);
    }

    const hash = this.hash(key);
    const newItem = { key: key, value: value };
    const item = this.map.get(hash);

    if (item) {
      item.value = value;
      this.map.set(hash, item);
    } else {
      this.map.set(hash, newItem);
    }

    this.currentSize += 1;
  }

  get(key: K): V | undefined {
    const hash = this.hash(key);
    const item = this.map.get(hash);
    return item ? item.value : undefined;
  }

  remove(key: K): void {
    const hash = this.hash(key);

    if (!this.map.has(hash)) {
      return;
    }

    this.map.delete(hash);
    this.currentSize -= 1;
  }

  isFull(): boolean {
    return this.maxSize === this.currentSize;
  }

  public get capacity(): number {
    return this.currentSize;
  }
}
