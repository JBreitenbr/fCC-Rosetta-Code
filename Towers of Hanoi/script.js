/* Towers of Hanoi
Solve the Towers of Hanoi problem. The number of objects will be given as the first parameter, followed by the strings used to identify each stack of objects. Create a nested array containing the list of moves, ["source", "destination"].

For example, the parameters (4, 'A', 'B', 'C'), will result in nested array of moves [['A', 'C'], ['B', 'A']], indicating that the 1st move was to move an object from stack A to C and the 2nd move was to move an object from stack B to A.

Write a function that returns the moves to stack the objects in a nested array.*/

function towerOfHanoi(n, a, b, c) {
   if(n==0){return []}
   else if (n > 0) {
      return towerOfHanoi(n - 1,a, c, b).concat([[a,b]]).concat(towerOfHanoi(n - 1, c, b, a))
   }
}
