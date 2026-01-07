/* Taxicab numbers
A taxicab number (the definition that is being used here) is a positive integer that can be expressed as the sum of two positive cubes in more than one way.

The first taxicab number is 1729, which is:

13 + 123 and

93 + 103.

Taxicab numbers are also known as:

taxi numbers
taxi-cab numbers
taxi cab numbers
Hardy-Ramanujan numbers
Write a function that returns the lowest n taxicab numbers. For each of the taxicab numbers, show the number as well as its constituent cubes. */

function taxicabNumbers(n) {
  let arr=[];
  for(let i=1;i<81;i++){
    for(let j=i;j<85;j++){
      arr.push(i*i*i+j*j*j);
    }
  }
  let dups = arr.filter((item, index) => arr.indexOf(item) !== index).sort((a,b)=>a-b);
  return dups.slice(0,n);
}
