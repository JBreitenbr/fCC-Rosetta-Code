function factors(num) {
  let arr=Array.from(Array(num+1).keys()).slice(1,num+1).filter((item)=>num%item===0);
  return arr;
}
