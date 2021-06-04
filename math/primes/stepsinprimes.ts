import isprime from "./isprime";


export default function step(g: number, m: number, n: number): number[] | null {
    if ((n - m) < g) {
        return null;
    }

    if ((n - m) == g && (isprime(m) && isprime(n))) {
        return [m, n]
    }

    for (let x = m; x <= n; x++) {
        const second = x + g;

        if(isprime(x) && isprime(second)) {
            return [x, second]
        }
    }

    return null;
}    
