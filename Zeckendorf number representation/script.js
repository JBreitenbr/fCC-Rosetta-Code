function getCombis(){
  let combis = [];
  for(let a = 0; a < 2; a++) {
    for(let b = 0; b < 2; b++) {
      for(let c=0;c<2;c++){
        for(let d=0;d<2;d++){
          for(let e=0;e<2;e++){
            for(let f=0;f<2;f++){
    combis.push(`${a}${b}${c}${d}${e}${f}`);
        }
       }
     }
   }
 }
}
  return combis;
}

function dotProduct(ary1, ary2) {
     let pSum=0;
        for(let i=0;i<ary1.length;i++){
             pSum+=ary1[i]*ary2[i];
                }
     return pSum;
}

function zeckendorf(n) {
   let fibi=[13,8,5,3,2,1];
   let combis=getCombis();
   let trg=[];
   console.log(combis[3]);
   for(let i=0;i<combis.length;i++){
      let fSum=dotProduct(combis[i].split("").map((item)=>Number(item)),fibi);
      if(fSum===n){
        trg.push(combis[i]);
      }
   }
   return trg.filter((item)=>!(item.includes("11")));
}
