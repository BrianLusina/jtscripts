export function tribonacci(n: number): number {
    const sig = [0, 1, 1];

    if (sig.indexOf(n) !== -1) {
        return n;
    }

    let first = sig[0];
    let second = sig[1];
    let third = sig[2];

    for (let index = 3; index <= n; index++) {
        const fourth = first + second + third;
        first = second;
        second = third;
        third = fourth;
    }

    return third;
};
