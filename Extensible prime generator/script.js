function isPrime(num){
   let thr=Math.ceil(Math.sqrt(num))+1;
   if(num==2 || num==3){
      return true;
   }
   for(let i=2;i<thr;i++){
      if(num%i==0){
         return false;
      }
   }
   return true;
}

function primeGenerator(num, showPrimes) {
  let tArr=[];
  let cVar=2;
     if(typeof num=="number"){
       do {
         if(isPrime(cVar)){
            tArr.push(cVar);
         }
         cVar+=1;
           }
      while(tArr.length<num);
      }
      else {
         for(let i=num[0];i<num[1];i++){
         if(isPrime(i)){
            tArr.push(i);
         }
      }
  }
  if(showPrimes==true){
  return tArr;
  } else {
     if(typeof num=="number")
     {return tArr[tArr.length-1];}
     else {
        return tArr.length;
     }
  }
}
