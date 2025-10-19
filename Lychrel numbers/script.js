/* Lychrel numbers
Take an integer n₀, greater than zero.
Form the next number n of the series by reversing n₀ and adding it to n₀
Stop when n becomes palindromic - i.e. the digits of n in reverse order == n.
The above recurrence relation when applied to most starting numbers n = 1, 2, ... terminates in a palindrome quite quickly.
Notice that the check for a palindrome happens after an addition.

Some starting numbers seem to go on forever; the recurrence relation for 196 has been calculated for millions of repetitions forming numbers with millions of digits, without forming a palindrome. These numbers that do not end in a palindrome are called Lychrel numbers.

For the purposes of this task a Lychrel number is any starting number that does not form a palindrome within 500 (or more) iterations.*/

function isPali(stri){
  return stri==stri.split("").reverse().join("");
}
function wrangle(n){
  return Number(n.toString().split("").reverse().join(""))+n;
}
function isLychrel(n) {
  let lst=[n];
  lst.push(wrangle(lst[0]));
  if(isPali(lst[1].toString())){return false;}
  for(let i=2;i<500;i++){
    lst.push(wrangle(lst[i-1]));  if(isPali(lst[i].toString())){
      return false;
    }
  }
  return true;
}
isLychrel(12);
