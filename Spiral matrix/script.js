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
  return arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
}

function fillArr(arr,n,r){
  let l=arr.length;
  let diff=n-l;
  let h1;
  let h2;
  if(diff==0) return arr;
  if((n-l)%2==0){
    h1=(n-l)/2;
    h2=(n-l)/2;
  } else {
    h1=Math.ceil((n-l)/2);
    h2=Math.floor((n-l)/2);
  }
  if(r==1){
    arr.push(Array(h1).fill(0));
    arr.unshift(Array(h2).fill(0));
  } else {
    arr.push(Array(h2).fill(0));
    arr.unshift(Array(h1).fill(0));
  }

  return arr.flat();
}
function spiralArray(n) {
  let res=Array(n).fill(1).map(_ => Array(n).fill(0));
  let nums=Array.from(Array(n*n).keys());
  let sn=0;
  let x1;
  let x2;
  let arr1=[nums.slice(0,n)];
  let arr2=[];
  for(let i=n-1;i>0;i--){
    x1=nums.slice(sn+n,sn+n+i);
    x2=nums.slice(sn+n+i,sn+n+2*i);
    if(n%2==1){
    arr1.push(i%2==1?x2:x2.reverse());
    arr2.push(i%2==0?x1:x1.reverse());
    }
    if(n%2==0){
      arr1.push(i%2==1?x2.reverse():x2);
      arr2.push(i%2==0?x1.reverse():x1);
    }
    sn+=2*i;
  }
  let t1=Array(arr1.length).fill(0);
  for(let i=0;i<Math.ceil(n/2);i++){
    t1[i]=arr1[2*i];
    t1[n-i]=arr1[2*i+1];
  }
  t1=t1.filter((item)=>item!=0 && item!=undefined);
  let s1=t1.map((item)=>fillArr(item,n,1));
  let t2=Array(arr2.length).fill(0);
  for(let i=0;i<Math.ceil(n/2);i++){
    t2[i]=arr2[2*i];
    t2[n-i]=arr2[2*i+1];
  }
  t2=t2.filter((item)=>item!=undefined && item!=0);
  let s2=t2.map((item)=>fillArr(item,n,0));
 s2.splice(n%2==1?Math.floor(s2.length/2):n/2,0,Array(n).fill(0));
 s2=transp(s2).map((item)=>item.reverse());  
 for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      res[i][j]=Math.max(s1[i][j],s2[i][j]);
    }
  }
  return res;
}

/* Alternative (selbe Idee, aber von ChatGPT gelöst)*/
function transp(a) {
  if (!a.length) return [];
  return a[0].map((_, c) => a.map(r => r[c]));
}

function padToN(arr, n, side = "both") {
  // side: "both" | "left" | "right"
  const diff = n - arr.length;
  if (diff <= 0) return arr.slice();

  const left = side === "right" ? 0 : Math.floor(diff / 2);
  const right = side === "left" ? 0 : diff - left;

  return Array(left).fill(0).concat(arr, Array(right).fill(0));
}

function buildSegments(n) {
  // Returns segments per ring in order: top, right, bottom, left (clockwise)
  let val = 0;
  const rings = [];

  for (let layer = 0; layer < Math.ceil(n / 2); layer++) {
    const sideLen = n - 2 * layer;
    if (sideLen <= 0) break;

    if (sideLen === 1) {
      // center
      rings.push({
        top: [val++],
        right: [],
        bottom: [],
        left: []
      });
      break;
    }

    const top = Array.from({ length: sideLen }, () => val++);

    const right = Array.from({ length: sideLen - 1 }, () => val++);

    const bottom = Array.from({ length: sideLen - 1 }, () => val++).reverse();

    const left = Array.from({ length: sideLen - 2 }, () => val++).reverse();

    rings.push({ top, right, bottom, left });
  }

  return rings;
}

function spiralArray_layered(n) {
  const rings = buildSegments(n);

  // 1) Build rows-layer matrix: place each ring's top and bottom rows at the correct outer positions
  const rowsMat = Array.from({ length: n }, () => Array(n).fill(0));

  for (let layer = 0; layer < rings.length; layer++) {
    const { top, bottom } = rings[layer];
    const topRow = layer;
    const botRow = n - 1 - layer;

    // place "top" horizontally
    for (let j = 0; j < top.length; j++) {
      rowsMat[topRow][layer + j] = top[j];
    }

    // place "bottom" horizontally (if exists)
    if (bottom.length) {
      for (let j = 0; j < bottom.length; j++) {
        rowsMat[botRow][layer + j] = bottom[j];
      }
    }
  }

  // 2) Build cols-layer in "column form": we create columns as arrays, then transpose to get a row matrix
  // We'll create an n x n zero matrix in column form: colsAsCols[c][r]
  const colsAsCols = Array.from({ length: n }, () => Array(n).fill(0));

  for (let layer = 0; layer < rings.length; layer++) {
    const { right, left } = rings[layer];
    const rightCol = n - 1 - layer;
    const leftCol = layer;

    // place "right" vertically (top to bottom) starting at row=layer+1
    for (let i = 0; i < right.length; i++) {
      colsAsCols[rightCol][layer + 1 + i] = right[i];
    }

    // place "left" vertically (top to bottom) starting at row=layer+1
    // Note: left segment was built reversed already to follow clockwise spiral,
    // but its placement is still top->bottom here.
    for (let i = 0; i < left.length; i++) {
      colsAsCols[leftCol][layer + 1 + i] = left[i];
    }
  }

  // transpose column-form to normal row-form
  const colsMat = transp(colsAsCols);

  // 3) merge by max
  const res = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => Math.max(rowsMat[i][j], colsMat[i][j]))
  );

  return res;
}

// test
console.log(spiralArray_layered(5));
