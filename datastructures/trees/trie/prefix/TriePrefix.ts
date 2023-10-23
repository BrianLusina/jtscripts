import TrieNode from '../node';

export default class Trie<T> {
  root: TrieNode<T>;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {}

  search(word: string): boolean {}

  startsWith(prefix: string): boolean {}
}
