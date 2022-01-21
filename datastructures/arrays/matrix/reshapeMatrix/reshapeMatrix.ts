function flatten(mat: number[][]): number[] {
    const values: number[] = []

    for (let i = 0; i < mat.length; i++) {
        const row = mat[i]
        for (let j = 0; j < row.length; j++) {
            values.push(row[j])
        }
    }

    return values
}

function createEmptyMatrix(rows: number, cols: number): number[][] {
    const result = []

    for (let x = 0; x < rows; x++) {
        result.push(Array(cols).fill(undefined))
    }
    return result
}

export function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    if (mat.length * mat[0].length !== r * c) {
        return mat
    }

    const values = flatten(mat)
    const result = createEmptyMatrix(r, c)

    let i = 0

    for (let row = 0; row < r; row++) {
        for (let col = 0; col < c; col++) {
            result[row][col] = values[i]
            i++
        }
    }
    return result
}
