export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    return (cell1.charCodeAt(0) + cell1.charCodeAt(1)) % 2 === (cell2.charCodeAt(0) + cell2.charCodeAt(1)) % 2
}