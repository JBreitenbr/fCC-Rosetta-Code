/* Hash from two arrays
Given two arrays, create a hash object where the elements from one array (the keys) are linked to the elements of the other (the values).

Example:

const firstArr = [1, 2, 3];
const secondArr = ["a", "b", "c"];
const hashObj = arrToObj(firstArr, secondArr);
The hash object created from the arrays above will be {1: "a", 2: "b", 3: "c"}.
*/

function arrToObj (keys, vals) {
let res = {};
  keys.forEach((key, index) => {res[key] = vals[index];});
  return res;
}
arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])
