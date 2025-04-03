function sumMults(n) {
  let arr=Array.from(Array(n).keys()).filter((item)=>(item)%3==0 || (item)%5==0).reduce((a,b)=>a+b,0);
  return arr;
}
