export const cycle = (n: number): number => {
    if(n % 2 === 0 || n % 5 === 0) {
      return -1;
    }
    let remainders = [1]
    let r = 0
    
    while (r != 1) {
      r = remainders[remainders.length - 1] * 10 % n
      remainders.push(r)
    }
    return remainders.length - 1
};