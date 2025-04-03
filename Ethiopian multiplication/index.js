const mezzo=(num)=>Math.floor(num/2);
const doppio=(num)=>num*2;
const pari=(num)=>num%2===0;
function eth_mult(a, b) {
  let sumVec=[];
  if(!pari(a)){
    sumVec.push(b);
  }
  while(a>1){
    a=mezzo(a);
    b=doppio(b);
    if(!pari(a)){
      sumVec.push(b);
    }
  }
  return sumVec.reduce((x,y)=>x+y,0);
}
