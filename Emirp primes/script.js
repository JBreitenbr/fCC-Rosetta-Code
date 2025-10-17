/* Emirp primes
An emirp (prime spelled backwards) are primes that when reversed (in their decimal representation) are a different prime.

Write a function that:

Shows the first n emirp numbers.
Shows the emirp numbers in a range.
Shows the number of emirps in a range.
Shows the nth emirp number.
The function should accept two parameters. The first will receive n or the range as an array. The second will receive a boolean, that specifies if the function returns the emirps as an array or a single number (the number of primes in the range or the nth prime). According to the parameters the function should return an array or a number.
*/

function isPrime(num){for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
          if(num % i === 0) return false;
              }
                  return num > 1;
}

function isEmirp(num){
    let rev=Number(num.toString().split("").reverse().join(""));
    if(isPrime(num)&&isPrime(rev)&&num!=rev){
        return true;
    }
  else return false;
}

function emirps(n, showValues = false) {
    let emirps = [];
      if (Array.isArray(n)) {
          let min = n[0], max = n[1];
        for (let i = min; i <= max; i++) {
    if (isEmirp(i)){emirps.push(i)};
}
return showValues ? emirps : emirps.length;
} else {
let c = 13;
while (emirps.length < n) {
    if(isEmirp(c)){
      emirps.push(c);
    }
    c += 2;
}
return showValues ? emirps : emirps.reverse()[0];
   }
}
