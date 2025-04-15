function prep(num){
  let stri=num.toString().split("");
  let res=stri.map((item)=>Number(item*item)).reduce((a,b)=>a+b,0);
  return res;
}

function happy(number) {
  let num=number;
  for(let i=0;i<20;i++){
    num=prep(num);
    if(num==1){
      return true;
    }
  }
  return false;
}
