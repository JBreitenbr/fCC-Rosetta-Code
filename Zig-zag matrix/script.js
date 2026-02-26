/* Zig-zag matrix
A 'zig-zag' array is a square arrangement of the first  N2
  integers, where the numbers increase sequentially as you zig-zag along the array's anti-diagonals.

For example, for the input 5, the following result should be produced:

 0  1  5  6 14
 2  4  7 13 15
 3  8 12 16 21
 9 11 17 20 22
10 18 19 23 24
Write a function that takes the size of the zig-zag matrix, and returns the corresponding matrix as two-dimensional array.*/

function ZigZagMatrix(n) {
  let c=2*(n-1)+1;
  let res=Array(n).fill(1).map(_ => Array(n).fill(0));
  console.log(res);
  let arr=[[0]];
  let arr2=[];
  let nums=Array.from(Array(n*n).keys());
  let sn=0;
  for(let i=1;i<n;i++){
    let t1=i*(i+1)/2;
    let t2=(i+1)*(i+2)/2;

    let t=nums.slice(t1,t2);
    arr.push(t);
    let x=nums.slice(nums.length-t2,nums.length-t1);
    arr2.push(x);
  }
  let r=arr2.reverse().slice(1);
  for(let i=0;i<n-2;i++){
    arr.push(r[i]);
  }
  arr.push([n*n-1]);
  let s=[];
  for(let i=0;i<c;i++){
    if(i%2==0){
      s.push(arr[i].reverse());
    } else s.push(arr[i]);
  }
  for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
      res[i][j-i]=s[j][i];
    }
  }
  
for(let j=0;j<n-1;j++){
  for(let i=1;i<n-j;i++){
    res[i+j][n-1-j]=s[c-(n-i)][j];
  }
}
  return res;
}
