/* Hailstone sequence
The Hailstone sequence of numbers can be generated from a starting positive integer, n by:

If n is 1 then the sequence ends
If n is even then the next n of the sequence = n/2
If n is odd then the next n of the sequence = (3 * n) + 1
The (unproven) Collatz conjecture is that the hailstone sequence for any starting number always terminates.

The hailstone sequence is also known as hailstone numbers (because the values are usually subject to multiple descents and ascents like hailstones in a cloud), or as the Collatz sequence.

Create a routine to generate the hailstone sequence for a number
Your function should return an array with the number less than limit which has the longest hailstone sequence and that sequence's length. (But don't show the actual sequence!) */

function hailSeq(limit) {
  let res=Array.from(Array(limit).keys()).map((item)=>[item]);
  for(let i=1;i<limit;i++){
    for(let j=1;j<77040;j++){
      if(res[i][j-1]%2==0){
        res[i].push(res[i][j-1]/2);
      } else res[i].push(3*res[i][j-1]+1);
      if(res[i][j]==1)break;
    }
  }
  return res;
}

function hailstoneSequence(limit){
  let arr=hailSeq(limit);
  let maxi=arr[1].length;
  let vali=arr[1];
  for(let i=2;i<arr.length;i++){
    if(arr[i].length>maxi){
      maxi=arr[i].length;
      vali=i;
    }
  }
  return [vali,maxi];
}
