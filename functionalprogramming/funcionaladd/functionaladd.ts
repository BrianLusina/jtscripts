export default function add(n: number): Function {
    return (x: number): number => x + n
}
