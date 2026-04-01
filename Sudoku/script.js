/* Sudoku

Write a function to solve a partially filled-in normal 9x9 Sudoku grid and return the result. 
The blank fields are represented by -1. */

function isSafe(grid, row, col, num){
  for(let x = 0; x < 9; x++)
    if (grid[row][x] == num)
      return false;
  for(let y = 0; y < 9; y++)
    if (grid[y][col] == num)
      return false;
  let startRow = row - row % 3;
  let startCol = col - col % 3;
  for(let i = 0; i < 3; i++)
    for(let j = 0; j < 3; j++)
        if (grid[i + startRow][j + startCol] == num) return false;
  return true;
}

function solver(grid, row, col){
  let N=9;
  if (row == N - 1 && col == N)  return grid;
  if (col == N){
    row+=1;
    col = -1;
  }
  if (grid[row][col] != -1)
      return solver(grid, row, col + 1);
  for(let num = 1; num < 10; num++)
    {
      if (isSafe(grid, row, col, num)){
            grid[row][col] = num;
      if (solver(grid, row, col + 1)) return grid;
         }
   grid[row][col] = -1;
  }
    return false;
}

function solveSudoku(puzzle) {
  return solver(puzzle,0,0);
}
