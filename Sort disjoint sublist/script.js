/* Sort disjoint sublist
Given a list of values and a set of integer indices into that value list, the task is to sort the values at the given indices, but preserving the values at indices outside the set of those to be sorted.

Make your function work with the following list of values and set of indices:

values: [7, 6, 5, 4, 3, 2, 1, 0]

indices(0-based): {6, 1, 7}
Where the correct result would be:

[7, 0, 5, 4, 3, 2, 1, 6].
*/

function arrToObj (keys, vals) {
   let res = {};
     keys.forEach((key, index) => {res[key] = vals[index];});
       return res;
       }

function sortDisjoint(values, indices) {
   let s=indices.map((item)=>values[item]);
   let res=arrToObj(indices.sort(),s.sort());
   let k=Object.keys(res);
   let vals=values.map((item,index)=>k.includes(index.toString())?res[index.toString()]:item);
   return vals;
}
sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])
