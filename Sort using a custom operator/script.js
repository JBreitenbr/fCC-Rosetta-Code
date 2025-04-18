function lengthSorter(arr) {
   let s=arr.sort().sort((a,b)=>b.length-a.length);
   return s;
}
