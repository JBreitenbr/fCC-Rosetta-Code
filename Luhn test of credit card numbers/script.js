/* Luhn test of credit card numbers
The Luhn test is used by some credit card companies to distinguish valid credit card numbers from what could be a random selection of digits.

Those companies using credit card numbers that can be validated by the Luhn test have numbers that pass the following test:

Reverse the order of the digits in the number.
Take the first, third, ... and every other odd digit in the reversed digits and sum them to form the partial sum s1
Taking the second, fourth ... and every other even digit in the reversed digits:
Multiply each digit by two and sum the digits if the answer is greater than nine to form partial sums for the even digits.
Sum the partial sums of the even digits to form s2.
If s1 + s2 ends in zero then the original number is in the form of a valid credit card number as verified by the Luhn test.*/

function arrSum(stri){
  let sn=0;
  let arr=stri.split("");
  for(let i=0;i<arr.length;i++){
    sn+=Number(arr[i]);
  }
  return sn;
}

function luhnTest(str) {
   let arr=str.split("").reverse().join("").split("").map((item)=>Number(item));
   for(let i=1;i<arr.length;i=i+2){
     arr[i]=arrSum((2*arr[i]).toString());
   }
   return arr.reduce((a,b)=>a+b)%10==0;
}
