/**
 * Reorders the edges of the directed graph represented as an adjacency list in connections such that each vertex
 * is connected and has a path to the first vertex marked with 0. n represents the number of vertices.
 * Complexity:
 * n is the number of vertices/nodes
 * 
 * Time Complexity: O(n)
 *    O(n) to initialize the adjacency list
 *    The dfs function visits each node once, which takes O(n) time in total. Because we have undirected edges,
 *    each edge can only be iterated twice (by nodes at the end), resulting in O(e) operations total while
 *    visiting all nodes, where e is the number of edges. Because the given graph is a tree, there are n−1
 *    undirected edges, so O(n+e)=O(n).
 * Space Complexity: O(n)
 *    Building the adjacency list takes O(n) space.
 *    The recursion call stack used by dfs can have no more than n elements in the worst-case scenario.
 *     It would take up O(n) space in that case.
 * 
 * @param {number} n number of vertices or in this case, number of cities
 * @param {number[][]} connections adjacency matrix for a directed graph or in this case, representation of cities
 * @returns the minimum number of edges to re-arrange to ensure that each vertex is directly or indirectly connected to
// the initial vertex
 */
export function minReorder(n: number, connections: number[][]): number {
  let count = 0;

  // Adjacency list that contains list of pairs of nodes such that adj[node] contains all the neighbours of node in the
  // form of [neighbour, sign] where neighbour is the neighbouring node and sign is the direction of the edge. If the
  // sign is 0, it's an 'artificial' edge, meaning it was added by the algorithm in order to get to this vertex, and 1
  // denotes that it's an 'original' edge, meaning that it's the original edge and no need to re-order that connection
  const adj = new Map<number, number[][]>();

  for (const connection of connections) {
    if (adj.has(connection[0])) {
      const neighbors = adj.get(connection[0]);
      neighbors?.push([connection[1], 1]);
    }

    if (adj.has(connection[1])) {
      const neighbors = adj.get(connection[1]);
      neighbors?.push([connection[0], 0]);
    }
  }

  const dfs = (node: number, parent: number, adjacency: Map<number, number[][]>) => {
    if (!adjacency.has(node)) {
      return;
    }

    // iterate over all children of node(nodes that share an edge)
    // for every child, sign, check if child is equal to parent. if child is equal to parent, we will not visit it
    // again
    // if child is not equal to parent, we perform count+=sign and recursively call the dfs with node = child and
    // parent = node
    const neighbour = adjacency.get(node);
    if (!neighbour) {
      return;
    }

    for (const [child, sign] of neighbour) {
      if (child != parent) {
        count += sign;
        dfs(child, node, adjacency);
      }
    }
  };

  dfs(0, -1, adj);
  return count;
}
