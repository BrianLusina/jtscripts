export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  // time complexity incurred here is O(N) as we iterate over all the asteroids
  for (const asteroid of asteroids) {
    let flag = true;

    while (stack.length > 0 && 0 < stack[stack.length - 1] && asteroid < 0) {
      // If the top asteroid in the stack is smaller, then it will explode.
      // Hence pop it from the stack, also continue with the next asteroid in the stack.
      if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroid)) {
        stack.pop();
        continue;
      } else if (Math.abs(stack[stack.length - 1]) == Math.abs(asteroid)) {
        // If both asteroids have the same size, then both asteroids will explode.
        // Pop the asteroid from the stack; also, we won't push the current asteroid to the stack.
        stack.pop();
      }

      // If we reach here, the current asteroid will be destroyed
      // Hence, we should not add it to the stack
      flag = false;
      break;
    }

    if (flag) {
      stack.push(asteroid);
    }
  }

  return stack;
}
