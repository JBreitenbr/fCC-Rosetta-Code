/* Sort an array of composite structures
Write a function that takes an array of objects as a parameter. The function should sort the array according to the 'key' attribute of the objects and return the sorted array. */

function sortByKey(arr) {
  let k=[];
  for(let i=0;i<arr.length;i++){
    k.push(arr[i].key);
  }
  let s=k.sort((a,b)=>a-b);
  let res=[];
  for(let i=0;i<s.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j].key==s[i]){
        res.push(arr[j]);
      }
    }
  }
  return res;
}
