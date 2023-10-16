import { ArrayMinHeap } from '../../../datastructures/trees/heap/binary/minheap';

export function totalCost(costs: number[], k: number, candidates: number): number {
  const headWorkers = new ArrayMinHeap<number>();
  const tailWorkers = new ArrayMinHeap<number>();

  // headWorkers stores the first k workers
  // tailWorkers stores at most k workers without any workers from the first k workers
  for (let i = 0; i < candidates; i++) {
    headWorkers.insert(costs[i]);
  }

  for (let i = Math.max(candidates, costs.length - candidates); i < costs.length; i++) {
    tailWorkers.insert(costs[i]);
  }

  let result = 0;
  let nextHead = candidates;
  let nextTail = costs.length - 1 - candidates;

  for (let i = 0; i < k; i++) {
    if (
      tailWorkers.size() === 0 ||
      (headWorkers.size() !== 0 && headWorkers.peek() <= tailWorkers.peek())
    ) {
      result += headWorkers.delete();

      // only refill the queue if there are workers outside the 2 queues
      if (nextHead <= nextTail) {
        headWorkers.insert(costs[nextHead]);
        nextHead += 1;
      }
    } else {
      result += tailWorkers.delete();
      // only refill the queue if there are workers outside the 2 queues
      if (nextHead <= nextTail) {
        tailWorkers.insert(costs[nextTail]);
        nextTail -= 1;
      }
    }
  }

  return result;
}
