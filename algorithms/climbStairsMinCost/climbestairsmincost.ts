export function minCostClimbingStairs(cost: number[]): number {
    const minimumCost = Array(cost.length + 1).fill(0);

    for (let x = 2; x <= cost.length; x++) {
        const oneStep = minimumCost[x - 1] + cost[x - 1];
        const twoSteps = minimumCost[x - 2] + cost[x - 2];
        minimumCost[x] = Math.min(oneStep, twoSteps);
    }

    return minimumCost[minimumCost.length - 1];
};
