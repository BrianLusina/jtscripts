export default class Vertex<T> {
  private id: string;
  private data: T;
  private metadata: Map<string, unknown> | undefined;
  private adjacentVertices: Map<string, Vertex<T>>;

  constructor(id: string, data: T, metadata: Map<string, unknown> | undefined) {
    this.id = id;
    this.data = data;
    this.metadata = metadata;
    this.adjacentVertices = new Map<string, Vertex<T>>();
  }

  addAdjacentVertex(vertex: Vertex<T>) {
    if (!this.adjacentVertices.has(vertex.id)) {
      // add adjacent vertex given ID, if this vertex does not exist
      this.adjacentVertices.set(vertex.id, vertex);

      // add this vertex as a neighbour
      vertex.addAdjacentVertex(this);
    }
  }
}
