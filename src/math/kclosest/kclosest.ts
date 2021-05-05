
/**
 * Sort the points by distance, then take the closest K points.
 * This sorts the points in-place
 * @param points 2D array of points on the plane
 * @param k number of points to return
 * @returns k closest points to origin
 */
function kClosest(points: number[][], k: number): number[][] {
    points.sort((x, y) => (x[0] ** 2 + x[1] ** 2) - (y[0] ** 2 + y[1] ** 2))
    return points.slice(0, k)
};
