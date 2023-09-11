/**
 * Checks if it's possible to visit all rooms if we have only the 1st room as open. The input rooms is a 2D array/
 * matrix with all the rooms with each room's number as the index and the value at each index being the list of keys
 * for other room numbers.
 *
 * Space Complexity: O(n+k) as we are keeping track of visited nodes in a set and k is the number of keys.
 * Time Complexity: O(n) as we are traversing all nodes in the graph
 *
 * @param rooms adjacency list where room[i] represents the adjacent vertices of the vertex i.
 * @return {boolean} indicating whether it is possible to visit all the vertices/rooms in the adjacency list
 */
export function canVisitAllRooms(rooms: number[][]): boolean {
  // the starting point in the graph
  const startingNode = 0;

  // keep track of nodes not yet visited/processed
  const queue = [startingNode];
  const visitedNodes = new Map<number, boolean>();
  visitedNodes.set(startingNode, true);

  while (queue.length !== 0) {
    // dequeue the vertex from the queue
    const vertex = queue.shift();

    // get all the vertex adjacent neighbors, i.e. rooms we can visit from current room
    const neighbors = rooms[vertex];

    for (const neighbor of neighbors) {
      // check if we haven't visited this room
      if (!visitedNodes.has(neighbor)) {
        // add that we have visited this node
        visitedNodes.set(neighbor, true);
        // add it for processing
        queue.push(neighbor);
      }
    }
  }

  return visitedNodes.size === rooms.length;
}
