/* Longest common subsequence
The longest common subsequence (or LCS) of groups A and B is the longest group of elements from A and B that are common between the two groups and in the same order in each group. 
For example, the sequences 1234 and 1224533324 have an LCS of 1234:
1234
1224533324

For a string example, consider the sequences thisisatest and testing123testing. 
An LCS would be tsitest:
thisisatest
testing123testing.

Your code only needs to deal with strings.

Write a case-sensitive function that returns the LCS of two strings. You don't need to show multiple LCS's.*/

function subs(stri){
  let arr=stri.split("");
  return arr.reduceRight(
  (acc, a) => [...acc, ...acc.map(b => [a, ...b])],[[]]).filter((item)=>item.length>0).map((item)=>item.join(""));
}

function commons(stri1,stri2){
  let m1=new Set(stri1);
  let m2=new Set(stri2);
  let res=Array.from(m1.intersection(m2));
  return res;
}

function lcs(a, b) {
  let c=commons(a,b);
  let res1="";
  let res2="";
  for(let i=0;i<Math.max(a.length,b.length);i++){
    if(c.includes(a[i])){
      res1+=a[i];
    } if(c.includes(b[i])){
      res2+=b[i];
    }
  }
  let s1=new Set(subs(res1));
  let s2=new Set(subs(res2));
  let u=Array.from(s1.intersection(s2)).sort((a,b)=>b.length-a.length);
  return u[0];
}
