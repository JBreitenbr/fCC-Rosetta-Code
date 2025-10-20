/* Kaprekar numbers
A positive integer is a Kaprekar number if:

It is 1, or,
The decimal representation of its square may be split once into two parts consisting of positive integers which sum to the original number.
Note that a split resulting in a part consisting purely of 0s is not valid, as 0 is not considered positive.

Example Kaprekar numbers:

2223 is a Kaprekar number, as 2223 * 2223 = 4941729, 4941729 may be split to 494 and 1729, and 494 + 1729 = 2223
The series of Kaprekar numbers is known as A006886, and begins as 1, 9, 45, 55, ...
Write a function that takes a number  n
 , a base  bs
 , and returns true if the number is a Kaprekar number for the given base. Otherwise, the function returns false.
*/

function arrToObj (keys, vals) {
  let res = {};
    keys.forEach((key, index) => {res[key] = vals[index];});
      return res;
}

function fromBase(num,base){
  let alph="0123456789abcdefghijklmnopqrstuvwxyz".split("");
  let rg=Array.from(Array(36).keys());
  let res=arrToObj(alph,rg);
  let s1=num.toString().split("").reverse();
  let s2=s1.map((item,index)=>res[item]*Math.pow(base,index));
  return s2.reduce((a,b)=>a+b,0);
}

function isKaprekar(n, bs) {
   if(n==1){return true;}
   else if(bs==10){
     let prod=(n*n).toString();   for(let i=1;i<prod.length;i++){
       if(Number(prod.substring(0,i))+Number(prod.substring(i))==n){
         return true;
       }
     }
   }
   else {
   let p=(n*n).toString(bs);  
   for(let i=1;i<p.length;i++)
   {
     let s1=p.substring(0,i);
     let s2=p.substring(i);
     if(fromBase(s1,bs)+fromBase(s2,bs)==n){
       return true;
     }
   }
   }
  return false;
}
isKaprekar(225,17);
