export function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const inDegrees = Array.from(Array(n)).fill(0);
    
    edges.forEach((e: number[]) => inDegrees[e[1]] += 1);
    
    const vertices: number[] = []
    
    for(let x = 0;x < n; x++) {
        if(inDegrees[x] === 0) {
            vertices.push(x)
        }
    }
    
    return vertices
};