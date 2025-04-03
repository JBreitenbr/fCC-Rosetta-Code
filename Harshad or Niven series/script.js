function crossSumDiv(num) {
   return num%num.toString().split("").map((item)=>Number(item)).reduce((a,b)=>a+b,0)==0;
}

function isHarshadOrNiven(n) {
  const res = [];
  do {
    if(crossSumDiv(n+1)){
      res.push(n+1);
    }
    n++;
  } while(res.length<10);
  return res;
}

console.log(isHarshadOrNiven(10));
