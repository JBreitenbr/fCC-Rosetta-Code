function factors(num){
    let cl=Math.ceil(Math.sqrt(num));
    let arr=Array.from(Array(cl+1).keys());
    let p1=arr.filter((item)=>num%item==0);
    let p2=p1.map((item)=>num/item).reverse();
    let facs=[...new Set([...p1,...p2])];
    return facs.slice(0,facs.length-1);
 }

function classi(num) {
  let facs0=factors(num);
  let facs=facs0.slice(0,facs0.length);
  let fSum=facs.reduce((a,b)=>a+b,0);
  if(fSum<num){
    return "d";
  }
  else if(fSum==num){
    return "p";
  }
  else if(fSum>num){
    return "a";
  }
  else return "Fehler!";
}

function getDPA(num) {
  let cArr=[];
  for(let i=1;i<=num;i++){
    cArr.push(classi(i));
  }
  let d=cArr.filter((item)=>item=="d").length;
  let p=cArr.filter((item)=>item=="p").length;
  let a=cArr.filter((item)=>item=="a").length;
  return [d,p,a];
}
console.log(getDPA(20000));
