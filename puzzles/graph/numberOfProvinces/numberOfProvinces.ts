/**
 * Finds the number of connected components(graphs) in a given adjacency list is_connected. Uses DFS traversal algorithm to find the connected components or the number of graphs from the provided 2D array.
 * Complexity:
 * Time Complexity: O(n^2). Initializing the visited array takes O(n) time. The dfs function visits each node once, which takes O(n) time because there are n nodes in total.
 * From each node, we iterate over all possible edges using graphnode which takes O(n) time for each visited node. As a result, it takes a total of O(n^2) time to visit all the nodes and iterate over its edges.
 * Space Complexity: O(n) visited array takes O(n) space Recursion call stack used by dfs can have no more than n elements in the worst case. It would take up to O(n) space in that case.
 * @param isConnected Array: 2D Array denoting an adjacency list where the index is a city and the values at that index denote interconnectivity with 1 showing a direct connection and 0 showing no connection
 * @returns  Number of connected components or number of graphs from the list
 */
export function numberOfProvincesDfs(isConnected: number[][]): number {
  // number of cities is the length of the rows from the grid
  const cities = isConnected.length;

  let provinces = 0;
  // keep track of visited cities
  const visited = Array(cities).fill(false);

  const dfs = (node: number, graph: number[][], visit: boolean[]) => {
    // mark node as visited
    visit[node] = true;

    for (let i = 0; i < graph.length; i++) {
      // get the city's neighbour to check if it can be reached, in this case if the value is 1, we can reach
      // city's neighbour, i.e, they are connected
      const neighbour = graph[node][i];
      // Checks if the neighbour has already been visited
      const neighbourVisited = visit[i];

      if (neighbour == 1 && !neighbourVisited) {
        dfs(i, graph, visit);
      }
    }
  };

  for (let city = 0; city < cities; city++) {
    if (!visited[city]) {
      provinces += 1;
      dfs(city, isConnected, visited);
    }
  }

  return provinces;
}
