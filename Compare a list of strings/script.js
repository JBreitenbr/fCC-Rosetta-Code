function allEqual(arr) {
  return arr.every( v => v===arr[0]);
}

function azSorted(arr) {
   if(arr.length < 2){
     return true;
   }
   if(allEqual(arr)){
     return false;
   }
   let sorted=arr.slice(0,arr.length).sort();
   console.log(sorted);
   for(let i=0;i<arr.length;i++){
     if(arr[i] != sorted[i]){
       return false;
     };
   }
   return true;
}
