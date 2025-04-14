function factors(num){
  let cl=Math.ceil(Math.sqrt(num));
  let arr=Array.from(Array(cl).keys());
  let p1=arr.filter((item)=>num%item==0);
  let p2=p1.map((item)=>num/item).reverse();
  let facs=[...p1,...p2];
  return facs.slice(0,facs.length-1);
}
              
function isAmicable(num){
  let facs1=factors(num);
  let s1=facs1.reduce((a,b)=>a+b,0);
  let facs2=factors(s1);
  let s2=facs2.reduce((a,b)=>a+b,0);
  return s2==num && s1!=num;
}

function amigos(num){
  let rArr=[];
  if(isAmicable(num)){
    rArr.push(num);
    let ami=factors(num).reduce((a,b)=>a+b,0);
    rArr.push(ami);
  }
  return rArr;
}

function amicablePairsUpTo(maxNum) {
  let aPairs=[];
  for(let i=1;i<=maxNum;i++){
    if(isAmicable(i)){
      console.log(aPairs.includes(amigos(i)));
      aPairs.push(amigos(i));
    }
  }
  return aPairs.filter((item)=>item[1]>item[0]);
}
console.log(amicablePairsUpTo(3000));
