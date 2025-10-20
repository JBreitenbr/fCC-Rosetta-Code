/* Sum of a series
Compute the nth term of a series, i.e. the sum of the n first terms of the corresponding sequence. Informally this value, or its limit when n tends to infinity, is also called the sum of the series, thus the title of this task. For this task, use:  
Sn=∑(k=1)(n)1/k*k. (the reciproke of k*k, summed from 1 to n)

Write a function that take  a and  b
as parameters and returns the sum of  ath
to  bth members of the sequence.
*/

function sum(a, b) {
let arr=Array.from(Array(b-a+1).keys()).map((item)=>item+a);
  let sn=arr.map((item)=>1/(item*item));
  return sn.reduce((a,b)=>a+b,0);
}
sum(1,100);
