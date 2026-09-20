function fac(n){
  return [0,1].includes(n)?1:n*fac(n-1);
}

function leftFactorial(n) {
  return n==0?0:Array.from(Array(n).keys()).map((item)=>fac(item)).reduce((a,b)=>a+b,0);
}
