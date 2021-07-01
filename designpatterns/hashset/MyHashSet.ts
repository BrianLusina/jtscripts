class MyHashSet {
    map: Map<number, boolean>;
    constructor() {
        this.map = new Map<number, boolean>();
    }

    add(key: number): void {
        if (!this.contains(key)) {
            this.map.set(key, true);
        }
    }

    remove(key: number): void {
        if (this.contains(key)) {
            this.map.delete(key);
        }
    }

    contains(key: number): boolean {
        return this.map.has(key);
    }
}

export default MyHashSet;