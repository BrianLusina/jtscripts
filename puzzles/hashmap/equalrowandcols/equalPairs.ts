// below denotes solution using a hash map

export function equalPairsHashmap(grid: number[][]): number {
  let count = 0;
  const gridSize = grid.length;
  const rowCounter = new Map<string, number>();

  for (const row of grid) {
    const key = row.join(',');
    rowCounter.set(key, (rowCounter.get(key) || 0) + 1);
  }

  for (let column = 0; column < gridSize; column++) {
    const columns = [];

    for (let row = 0; row < gridSize; row++) {
      columns.push(grid[row][column]);
    }

    const colKey = columns.join(',');
    if (rowCounter.has(colKey)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      count += rowCounter.get(colKey);
    }
  }

  return count;
}

// below denotes solution using brute force

export function equalPairsBruteForce(grid: number[][]): number {
  let count = 0;
  const gridSize = grid.length;

  // check each row r against each column c
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      let match = true;
      // Iterate over row r and column c.
      for (let i = 0; i < gridSize; i++) {
        if (grid[r][i] != grid[i][c]) {
          match = false;
          break;
        }
      }

      // If row r equals column c, increment count by 1.
      if (match) {
        count += 1;
      }
    }
  }

  return count;
}

// below denotes solution using a trie

class TrieNode {
  count: number;
  children: Map<number, TrieNode>;

  constructor() {
    this.count = 0;
    this.children = new Map<number, TrieNode>();
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(array: number[]) {
    let current = this.root;

    for (const item of array) {
      if (!current.children.has(item)) {
        current.children.set(item, new TrieNode());
      }

      if (current.children.has(item)) {
        const child = current.children.get(item);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        current = child;
      } else {
        current = new TrieNode();
      }
    }
    current.count += 1;
  }

  search(array: number[]): number {
    let current = this.root;

    for (const item of array) {
      if (current.children.has(item)) {
        const child = current.children.get(item);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        current = child;
      } else {
        return 0;
      }
    }
    return current.count;
  }
}

export function equalPairsTrieNode(grid: number[][]): number {
  const trie = new Trie();
  let count = 0;
  const n = grid.length;

  for (const row of grid) {
    trie.insert(row);
  }

  for (let c = 0; c < n; c++) {
    const colArray = Array(n);

    for (let r = 0; r < n; r++) {
      colArray[r] = grid[r][c];
    }
    count += trie.search(colArray);
  }

  return count;
}
