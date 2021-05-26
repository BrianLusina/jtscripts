export function makeValley(arr: number[]): number[] {
    if(arr.length === 0) {
      return [];
    }
    
    arr.sort();

    let leftWing = [];
    let rightWing = [];

    for (let index = arr.length - 1; 0 < index; index -= 2) {
        leftWing.push(arr[index]);
    }

    for (let index = arr.length - 2; 0 < index; index -= 2) {
        rightWing.push(arr[index]);
    }

    rightWing.sort((a, b) => a - b);

    return leftWing.concat(rightWing);
}