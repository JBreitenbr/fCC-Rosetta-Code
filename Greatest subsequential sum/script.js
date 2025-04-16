function maximumSubsequence(arr) {
  let maxi=arr.reduce((a,b)=>a+b,0);
  let sliSum;
  let hArr=[[arr,maxi]];
  for(let j=0;j<arr.length-1;j++){
     for(let i=1; i<arr.length;i++){
         let sli=arr.slice(j,i);
         sliSum=sli.reduce((a,b)=>a+b,0);
         let p=[sli,sliSum];
         if(sliSum>maxi){
            maxi=sliSum;
            hArr.push(p);
          }
       }
  }
  return hArr[hArr.length-1][0];
}
