/* SEDOLs
SEDOL is a list of securities identification numbers issued by the London Stock Exchange.

For each number list of 6-digit SEDOLs, calculate and append the checksum digit. That is, given the input string on the left, your function should return the corresponding string on the right:

710889 => 7108899
B0YBKJ => B0YBKJ7
406566 => 4065663
B0YBLH => B0YBLH2
228276 => 2282765
B0YBKL => B0YBKL9
557910 => 5579107
B0YBKR => B0YBKR5
585284 => 5852842
B0YBKT => B0YBKT7
B00030 => B000300
Check that each input is correctly formed, especially with respect to valid characters allowed in a SEDOL string. Your function should return null on an invalid input.*/

function sedol(input) {
  let checkSum = 0;
  let c="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");let v=c.map((item,index)=>index+10);
  let w=[1,3,1,7,3,9];
  let h={};
  for(let i=0;i<10;i++){
    h[(i).toString()]=i;
  }
  for(let i=0;i<c.length;i++){
    if(!["A","E","I","O","U"].includes(c[i])){
      h[c[i]]=v[i];
    }
  }
  for(let i=0;i<input.length;i++){
    checkSum+=h[input[i]]*w[i];
  }
  console.log(checkSum);
  let ch =10-checkSum%10;
  if(!checkSum) return null;
  return input+ch;
}
