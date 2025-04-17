function factorial(num){
  if(num==0 || num==1){
    return 1;
  } else {
    return num*factorial(num-1);
  }
}

function leftFactorial(n) {
  let fArr=[];
  if(n==0){
    return 0;
  } else {
     for(let i=0;i<n;i++){
       fArr.push(factorial(i));
     }
  }
  return fArr.reduce((a,b)=>a+b,0);
}
