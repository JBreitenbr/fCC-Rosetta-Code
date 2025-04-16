function countCoins(cents) {
  let l1=Math.ceil(cents/25)+1;
  let l2=Math.ceil(cents/10)+1;
  let l3=Math.ceil(cents/5)+1;
  let l4=cents+1;
  let rSum=0;
  for(let i1=0;i1<l1;i1++){
     for(let i2=0;i2<l2;i2++){
        for(let i3=0;i3<l3;i3++){
           for(let i4=0;i4<l4;i4++){   
             if(i1*25+i2*10+i3*5+i4==cents){
                rSum+=1;
             }
           }
        }
     }
  }
  return rSum;
}
