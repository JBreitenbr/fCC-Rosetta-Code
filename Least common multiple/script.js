function factors(num) {
       let arr=Array.from(Array(num+1).keys()).slice(1,num+1).filter((item)=>num%item===0);
             return arr;
             }
                 
                 function gcd(a, b) {
                    let arr1 = factors(a);
                       let arr2 = factors(b);
                          return Math.max(...arr1.filter(function(item) { return arr2.indexOf(item) !== -1;}));
                          }
function kgV(a,b){
   return Math.abs(a*b)/gcd(a,b);
}

function LCM(A) {
   return A.map((item)=>Math.abs(item)).reduce((a,b)=>kgV(a,b),1);
}

console.log(LCM([-50, 25, -45, -18, 90, 447]));
