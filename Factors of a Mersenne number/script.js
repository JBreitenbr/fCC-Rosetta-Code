/* Factors of a Mersenne number

A Mersenne number is a number in the form of 2^P-1.

If P is prime, the Mersenne number may be a Mersenne prime. (If P is not prime, the Mersenne number is also not prime.)

In the search for Mersenne prime numbers it is advantageous to eliminate exponents by finding a small factor before starting a, potentially lengthy, Lucas-Lehmer test.

There are very efficient algorithms for determining if a number divides 2^P-1 (or equivalently, if 2^P mod (the number) = 1).

Some languages already have built-in implementations of this exponent-and-mod operation (called modPow or similar).

The following is how to implement this modPow yourself:

For example, let's compute 2^23 mod 47.

Convert the exponent 23 to binary, you get 10111. Starting with square = 1, repeatedly square it.

Remove the top bit of the exponent, and if it's 1 multiply square by the base of the exponentiation (2), then compute square modulo 47.

Use the result of the modulo from the last step as the initial value of square in the next step:

Remove   Optional
square        top bit  multiply by 2  mod 47
------------  -------  -------------  ------
1*1 = 1       1  0111  1*2 = 2           2
2*2 = 4       0   111     no             4
4*4 = 16      1    11  16*2 = 32        32
32*32 = 1024  1     1  1024*2 = 2048    27
27*27 = 729   1        729*2 = 1458      1
Since 223 mod 47 = 1, 47 is a factor of 2^P-1.

(To see this, subtract 1 from both sides: 2^23-1 = 0 mod 47.)

Since we've shown that 47 is a factor, 2^23-1 is not prime.

Further properties of Mersenne numbers allow us to refine the process even more.

Any factor q of 2P-1 must be of the form 2kP+1, k being a positive integer or zero. Furthermore, q must be 1 or 7 mod 8.

Finally any potential factor q must be prime.

As in other trial division algorithms, the algorithm stops when 2kP+1 > sqrt(N).These primarily tests only work on Mersenne numbers where P is prime. 
For example, M4=15 yields no factors using these techniques, but factors into 3 and 5, neither of which fit 2kP+1.

Using the above method find a factor of 2^p-1. */

function checkDiv(p,d){
  let s=parseInt(p).toString(2);
  let l=BigInt(`${s.length}`);
  let t=1n;
  let m;
  for(let i=0n;i<l;i=i+1n){
   if(BigInt(s[i])==1n){
      t=(((2n*t)%d)*((2n*t)%d));
      if(t==1n && i==l-1n) return true;
    } else {
      t=(t%d)*(t%d);
      if(t==1n && i==l-1n) return true;
    }
  }
  return false;
}

function knewIt(n, x0) {
   let x1 = ((n / x0) + x0) >> 1n; 
   if (x0 === x1 || x0 === (x1 - 1n)) {
    return x0; } 
    return knewIt(n, x1); } 

function knewSqr(val) { 
     if (val< 2n) { return val; } 
     return knewIt(val, 1n); 
} 

function isPrime(p) { 
  if (p == 2n) { 
    return true; } 
  else if (p <= 1n || p % 2n === 0n) { 
    return false; } 
  else { 
    let to = knewSqr(p); 
    for (let i = 3n; i <= to; i += 2n){ 
      if (p % i == 0n) { return false; }
    } return true; } 
}

function check_mersenne(p) {
  let n=BigInt(`${p}`);
  let t;
  if(n<6n){
    if(isPrime((1n << n)-1n)){
      return `M${p} = 2^${p}-1 is prime`;
    }
  }
  let r;
  let c;
  for(let k=1n;k<14000n;k=k+1n){
     r=2n*k+1n;
     c=(r%8n==1n || r%8n==7n) && isPrime(r);
     if(c){if(checkDiv(n,r)){
       return `M${p} = 2^${p}-1 is composite with factor ${parseInt(r)}`;
     };
    }
  }
}
