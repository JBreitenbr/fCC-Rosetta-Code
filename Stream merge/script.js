/* Stream Merge
Write a function that takes multiple sorted arrays of items, and returns one array of sorted items.
*/

function mergeLists(lists) {
  let arr=lists.flat();
  return arr.sort((a,b)=>a-b);
}
mergeLists([[1, 3, 5, 9, 10], [2, 4, 6, 7, 8]])
