export const square = (n: number): bigint => {
    if (n < 1 || n > 64) {
        throw new Error(`Invalid input ${n}. Input must be between 1 and 64`)
    }
    return BigInt(2n) ** BigInt(n - 1)
}

export const total = (): bigint => {
    return BigInt(2n) ** BigInt(64n) - BigInt(1n)
}
