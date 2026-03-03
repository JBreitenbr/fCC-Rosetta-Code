/* Spiral matrix
Produce a spiral array. A spiral array is a square arrangement of the first N2 natural numbers, where the numbers increase sequentially as you go around the edges of the array spiraling inwards. 
For example, given 5, produce this array:

0  1  2  3  4
15 16 17 18 5
14 23 24 19 6
13 22 21 20 7
12 11 10  9 8

*/

function transp(arr){
  if (!arr.length) return [];
  return arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
}

function fillArr(arr, n, r){
  let l = arr.length;
  let diff = n - l;
  let h1;
  let h2;

  if (diff === 0) return arr; 

  if ((n - l) % 2 === 0){
    h1 = (n - l) / 2;
    h2 = (n - l) / 2;
  } else {
    h1 = Math.ceil((n - l) / 2);
    h2 = Math.floor((n - l) / 2);
  }

  if (r === 1){
    arr.push(Array(h1).fill(0));
    arr.unshift(Array(h2).fill(0));
  } else {
    arr.push(Array(h2).fill(0));
    arr.unshift(Array(h1).fill(0));
  }

  return arr.flat();
}

function spiralArray(n) {
  let res = Array(n).fill(1).map(_ => Array(n).fill(0));
  let nums = Array.from(Array(n*n).keys());
  let sn = 0;
  let x1;
  let x2;

  let arr1 = [nums.slice(0, n)];
  let arr2 = [];

  for (let i = n - 1; i > 0; i--){
    x1 = nums.slice(sn + n,     sn + n + i);
    x2 = nums.slice(sn + n + i, sn + n + 2*i);

    if (n % 2 === 1){
      arr1.push(i % 2 === 1 ? x2 : x2.reverse());
      arr2.push(i % 2 === 0 ? x1 : x1.reverse());
    }
    if (n % 2 === 0){
      arr1.push(i % 2 === 1 ? x2.reverse() : x2);
      arr2.push(i % 2 === 0 ? x1.reverse() : x1);
    }
    sn += 2*i;
  }

  let t1 = Array(n).fill(undefined);
  for (let i = 0; 2*i < arr1.length; i++){
    t1[i] = arr1[2*i];
    if (2*i + 1 < arr1.length) {
      t1[n - 1 - i] = arr1[2*i + 1]; 
    }
  }
  t1 = t1.filter(item => item !== undefined);

  let s1 = t1.map(item => fillArr(item, n, 1));

  let t2 = Array(n).fill(undefined);
  for (let i = 0; 2*i < arr2.length; i++){
    t2[i] = arr2[2*i];
    if (2*i + 1 < arr2.length) {
      t2[n - 1 - i] = arr2[2*i + 1]; 
    }
  }
  t2 = t2.filter(item => item !== undefined);

  let s2 = t2.map(item => fillArr(item, n, 0));

  s2.splice(n % 2 === 1 ? Math.floor(s2.length / 2) : n / 2, 0, Array(n).fill(0));

  s2 = transp(s2).map(item => item.reverse());

  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      res[i][j] = Math.max(s1[i][j], s2[i][j]);
    }
  }
  return res;
}
