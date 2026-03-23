/* Lucas-Lehmer test

Lucas-Lehmer Test: for  p
  an odd prime, the Mersenne number  2p−1
  is prime if and only if  2p−1
  divides  S(p−1)
  where  S(n+1)=(S(n))2−2
 , and  S(1)=4
 .

Write a function that returns whether the given Mersenne number is prime or not. */

function lucasLehmer(p) {
  let pr=BigInt(`${p}`);
  if(pr == 2n) {
    return true;
  } else {
      let m_p = (1n << pr) - 1n;
      let s = 4n;
      for(let i = 3n; i <= pr; i++) {
        s = (s * s - 2n) % m_p;
    }
    return s === 0n;
  }
}
