function sumsq(array) {
  let sq=array.map((item)=>item*item);
  return sq.reduce((a,b)=>a+b,0);
}
