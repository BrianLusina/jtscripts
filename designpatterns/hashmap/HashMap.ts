interface Item {
    key: string | number
    value: string | number | unknown
}

interface ItemList extends Array<Item> {}

class MyHashMap {
    private size: number
    private map: ItemList[]
    // Current MAX_SIZE, is 10**3, change this to change the default size of the hashmap
    private MAX_SIZE = 10 ** 3

    constructor(size?: number) {
        this.size = size || this.MAX_SIZE
        this.map = new Array(this.size)
    }

    private hash(key: number): number {
        return key % this.size
    }

    put(key: number, value: number): void {
        const hash = this.hash(key)

        if (!this.map[hash]) {
            this.map[hash] = []
        }

        const itemList = this.map[hash]
        const item = itemList.find((item) => item.key === key)
        if (item) {
            item.value = value
        } else {
            itemList.push({ key, value })
        }
    }

    get(key: number): number | string | undefined | unknown {
        const hashed = this.hash(key)
        const itemlist = this.map[hashed] || []
        const item = itemlist.find((item) => item.key === key)
        return item ? item.value : undefined
    }

    remove(key: number): void {
        const hashed = this.hash(key)

        if (!this.map[hashed]) {
            return
        }

        this.map[hashed] = this.map[hashed].filter((item) => item.key !== key)
    }
}

export default MyHashMap
