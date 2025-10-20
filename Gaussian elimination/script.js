/* Gaussian elimination
Write a function to solve  Ax=b
  using Gaussian elimination then backwards substitution.

A being an  n×n matrix. Also,  x and  b  are  n by 1 vectors.

To improve accuracy, please use partial pivoting and scaling.
*/

/* I took this from https://onecompiler.com/javascript/3zs6bubue */
function gaussianElimination(A, B) {
  const M = A.length; // Number of equations
  const N = A[0].length; // Number of variables

  // Combine the coefficient matrix A and the constants vector B into an augmented matrix
  const augmentedMatrix = new Array(M);
  for (let i = 0; i < M; i++) {
    augmentedMatrix[i] = [...A[i], B[i]];
  }

  // Perform Gaussian Elimination
  for (let j = 0; j < N; j++) {
    // Find the pivot row with the largest absolute value in the current column
    let maxRow = j;
    for (let i = j + 1; i < M; i++) {
      if (Math.abs(augmentedMatrix[i][j]) > Math.abs(augmentedMatrix[maxRow][j])) {
        maxRow = i;
      }
    }

    // Swap rows if needed
    if (maxRow !== j) {
      [augmentedMatrix[j], augmentedMatrix[maxRow]] = [augmentedMatrix[maxRow], augmentedMatrix[j]];
    }

    // Eliminate other rows
    for (let i = 0; i < M; i++) {
      if (i !== j) {
        const factor = augmentedMatrix[i][j] / augmentedMatrix[j][j];
        for (let k = j; k <= N; k++) {
          augmentedMatrix[i][k] -= factor * augmentedMatrix[j][k];
        }
      }
    }
  }

  // Back substitution to find the solutions
  const solutions = new Array(N);
  for (let j = 0; j < N; j++) {
    solutions[j] = augmentedMatrix[j][N] / augmentedMatrix[j][j];
  }
  return solutions
}
