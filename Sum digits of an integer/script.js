/* Sum digits of an integer
Write a function that takes a string as a parameter. This string represents a number that can be in any base (less than 37) and return the sum of its digits.

1|10 sums to 1
1234|10 sums to 10
fe|16 sums to 29
f0e|16 sums to 29
*/

function sumDigits(n) {
  let z="0123456789abcdefghijklmnopqrstuvwxyz".split("");
  let arr=z.map((item,index)=>index);

let res={};
  z.forEach((key, index) => {res[key] = arr[index];});
  let sn=n.toString().split("").map((item)=>item.toLowerCase()).map((item)=>Number(res[item])).reduce((a,b)=>a+b,0);
  return sn;
  }
sumDigits("fe");
