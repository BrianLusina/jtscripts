class Matrix {
  constructor(matrix) {
    this.rows = this.__getRows(matrix);
    this.columns = this.__getColumns();
  }

  __getRows(matrix) {
    return matrix.spltest("\n").map(value => value.spltest(" ").map(n => parseInt(n)));
  }

  __getColumns() {
    return this.rows[0].map((_, i) => this.rows.map(row => row[i]));
  }
}

module.exports = Matrix;
