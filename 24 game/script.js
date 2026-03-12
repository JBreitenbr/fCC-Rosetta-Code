/* 24 game
The 24 Game tests a person's mental arithmetic.

The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24

Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9 (inclusive) with repetitions allowed, and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists".

Rules:

Only the following operators/functions are allowed: multiplication, division, addition, subtraction.
Division should use floating point or rational arithmetic, etc, to preserve remainders.
Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
The order of the digits when given does not have to be preserved.
Example input	Example output
solve24("4878");	(7-8/8)*4
solve24("1234");	3*1*4*2
solve24("6789");	(6*8)/(9-7)
solve24("1127");	(1+7)*(2+1) */

function getFactors(num) {
  const factors = [1];
    const bound = Math.sqrt(num);
    for (let i = 2; i <= bound; i++) {
      if (num % i === 0) factors.push(i, num / i);
            }
    return factors.sort((a,b)=>a-b);
}

function recurPermute(index, s, ans) {
  if (index === s.length) {
    ans.add(s.join(""));    return; 
  }
  for (let i = index; i < s.length; i++) {
    [s[index], s[i]] = [s[i], s[index]];
    recurPermute(index + 1, s, ans);
    [s[index], s[i]] = [s[i], s[index]];
    }
  }

function findPermutation(s){
    s=s.split("").sort();
    let res = new Set();
    recurPermute(0, s, res);                         
    return Array.from(res).sort();
}

function expr(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let [min, max] = a < b ? [a, b] : [b, a];
    switch (c) {
      case max + min:
        return max + '+' + min;
      case max - min:
        return max + '-' + min;
      case max / min:
        return max + '/' + min;
      case max * min:
        return max + '*' + min;
      default:
        return 'NA';
   }
  }

function solveN(numStr,target){
  let perms = findPermutation(numStr);
  let facs = getFactors(target);
  for (let p of perms) {
    let exp1, exp2;
    for (let f of facs) {
  // Check if format exp(a,b, factor) * exp(c, d, 24/factor) works
    exp1 = expr(p[0],p[1],f);
    exp2 = expr(p[2], p[3], target/f);
    if (exp1 !== 'NA' && exp2 !== 'NA') {
  exp1 = exp1.length == 1 ? exp1 : '(' + exp1 + ')';
  exp2 = exp2.length == 1 ? exp2 : '(' + exp2 + ')';
    return exp1 + '*' + exp2;
}
  }
  for (let i = 1; i <= 3; i++) {
  // Check if format exp(a,b, 24*i) / exp(c, d, i) works
    exp1 = expr(p[0], p[1], target * i);
    exp2 = expr(p[2],p[3],i);
    exp1 = exp1.length > 1 ? exp1 : '(' + exp1 + ')';
    exp2 = exp2.length > 1 ? exp2 : '(' + exp2 + ')';
  if (exp1 !== 'NA' && exp2 !== 'NA') {
    exp1 = exp1.length === 1 ? exp1 : '(' + exp1 + ')';
  exp2 = exp2.length === 1 ? exp2 : '(' + exp2 + ')';
    return exp1 + '/' + exp2;
     }
  }    
  for (let i = 2; i <= 81; i++) {
    // Check if format exp(a,b, 24+i) - exp(c, d, i) works
    exp1 = expr(p[0], p[1], target - i);
    exp2 = expr(p[2], p[3], i);
  if (exp1 !== 'NA' && exp2 !== 'NA') {
    exp1 = exp1.length === 1 ? exp1 : '(' + exp1 + ')';
    exp2 = exp2.length === 1 ? exp2 : '(' + exp2 + ')';
  return exp1 + '+' + exp2;                        }  
   // Check if format exp(a,b, 24-i) + exp(c, d, i) works
  exp1 = expr(p[0], p[1], target + i);
  exp2 = expr(p[2], p[3], i);
  if (exp1 !== 'NA' && exp2 !== 'NA') {
    exp1 = exp1.length === 1 ? exp1 : '(' + exp1 + ')';
    exp2 = exp2.length === 1 ? exp2 : '(' + exp2 + ')';
    return exp1 + '-' + exp2;                   }                         
    }
  if (numStr[0] === '0') {
  return 'no solution exists';
               }   
  exp1 = parseInt(p[0]);
  if (target % exp1 === 0) {
    exp2 = solveN('0' + p.slice(1), target / exp1);
  if (exp2 !== 'no solution exists') {
    exp2 = exp2.length === 1 ? exp2 : '(' + exp2 + ')';
  return exp1 + '*' + exp2;
    }
  }
  exp2 = solveN('0' + p.slice(1), target * exp1);
  if (exp2 !== 'no solution exists') {
    exp2 = exp2.length === 1 ? exp2 : '(' + exp2 + ')';
    return exp2 + '/' + exp1;
                      }
  exp2 = solveN('0' + p.slice(1), target + exp1);
  if (exp2 !== 'no solution exists') {
    exp2 = exp2.length === 1 ? exp2 : '(' + exp2 + ')';
    return exp2 + '-' + exp1;
  }
  exp2 = solveN('0' + p.slice(1), target - exp1);
  if (exp2 !== 'no solution exists') {
    exp2 = exp2.length === 1 ? exp2 : '(' + exp2 + ')';
    return exp1 + '+' + exp2;
}
  }
  return "nanu";
}

function solve24(numStr) {
  return solveN(numStr, 24);
}
