/* Iterated digits squaring
If you add the square of the digits of a Natural number (an integer bigger than zero), you always end with either 1 or 89:

15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
7 -> 49 -> 97 -> 130 -> 10 -> 1
Write a function that takes a number as a parameter and returns 1 or 89 after performing the mentioned process.
*/

function sqSumDig(n){
  let arr=n.toString().split("");
  return arr.map((item)=>Number(item)*Number(item)).reduce((a,b)=>a+b,0);
}

function iteratedSquare(n) {
  let lst=[n];
  for(let i=1;i<10;i++){
    lst.push(sqSumDig(lst[i-1]));
    if(lst[i]==1 || lst[i]==89){
      return lst[i];
    }
  }
}
