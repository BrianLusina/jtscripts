/**
 * TrieNode represents a node in a Trie
 */
export default class TrieNode<T> {
  // children is a mapping of the children of this node
  children: Map<T, TrieNode<T>>;

  constructor() {
    this.children = new Map();
  }
}
