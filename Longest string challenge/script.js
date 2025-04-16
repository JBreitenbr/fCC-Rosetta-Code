function longestString(strings) {
   let maxi=strings[0].length;
   let arr=[];
   for(let i=0;i<strings.length;i++){
     if(strings[i].length>=maxi){
       maxi=strings[i].length;
       arr.push(strings[i]);
     }
   }
   let l=arr[arr.length-1].length;
   return arr.filter((item)=>item.length==l);
}
console.log(longestString(["a", "bb", "ccc", "ee", "f", "ggg"]));
