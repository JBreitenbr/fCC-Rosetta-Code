function getAllSubsets(arr){
    return arr.reduce((subsets, value) => subsets.concat(subsets.map(set => [value,...set])),[[]]);
}     

function isArrayIsSorted(arr){
    return arr.slice(1).every((item,i)=>arr[i]<=item);
}

function findSequence(input) {
   let subsets=getAllSubsets(input).map((item)=>item.reverse());
   let ord=subsets.filter((item)=>isArrayIsSorted(item));
   let m=ord.sort(function (a, b) { return b.length - a.length;});
   let l=m[0].length;
   let m2=m.filter((item)=>item.length==l).map((item)=>item.join("/")).sort().map((item)=>item.split("/")).map((item)=>item.map((sub)=>Number(sub)));
   return m2[0];
}
findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]);
