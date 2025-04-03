function dotProduct(ary1, ary2) {
   let pSum=0;
   for(let i=0;i<ary1.length;i++){
     pSum+=ary1[i]*ary2[i];
   }
  return pSum;
}
