function factors(num) {
    let arr=Array.from(Array(num+1).keys()).slice(1,num+1).filter((item)=>num%item===0);
      return arr.slice(1,arr.length-1);
      }

function isSemiPrime(n) {
   let fac=factors(n);
   if(fac.length>2){
      return false;
   }
   else if(fac.length==2){
      return true;
   }
   else if(fac.length==1 && fac[0]*fac[0]==n){
      return true;
   }
   else {
      return false;
   }
}
