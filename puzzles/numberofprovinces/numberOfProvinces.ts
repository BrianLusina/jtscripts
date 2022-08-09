class UnionFind {
  root: number[];
  rank: number[];
  count: number;

  constructor(size: number) {
    this.root = new Array(size).fill(0).map((_, i) => i);
    this.rank = new Array(size).fill(1);
    this.count = size;
  }

  find(x: number): number {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x]);
      return this.root[x];
    }
    return x;
  }

  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) {
      return;
    }
    if (this.rank[rootX] < this.rank[rootY]) {
      this.root[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else {
      this.root[rootY] = rootX;
      this.rank[rootX]++;
    }
    this.count--;
  }
}

export default function numberOfProvinces(grid: number[][]): number {
  if (grid.length === 0) {
    return 0;
  }

  const rowNum = grid.length;
  const unionFind = new UnionFind(rowNum);

  for (let row = 0; row < rowNum; row++) {
    for (let col = row + 1; col < rowNum; col++) {
      if (grid[row][col] === 1) {
        unionFind.union(row, col);
      }
    }
  }

  return unionFind.count;
}
