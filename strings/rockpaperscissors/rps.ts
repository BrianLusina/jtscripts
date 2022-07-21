export default function rps(p1: string, p2: string): string {
    const mapping: Record<string, string> = {
        scissors: "paper",
        paper: "rock",
        rock: "scissors",
    }

    if (p1 === p2) {
        return "Draw!"
    }

    if (mapping[p1] === p2) {
        return "Player 1 won!"
    }

    return "Player 2 won!"
}
