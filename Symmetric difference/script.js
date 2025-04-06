function intersect(a, b) {
    let setA = new Set(a);
    let setB = new Set(b);
    let intersection = new Set([...setA].filter(x => setB.has(x)));
          return Array.from(intersection);
          }

function symmetricDifference(A, B) {
  let tArr=[];
  let intersection=intersect(A,B);
  for(let i=0;i<A.length;i++){
      if(!intersection.includes(A[i])){
          tArr.push(A[i]);
      }
  }
  for(let j=0;j<B.length;j++){
      if(!intersection.includes(B[j])){
          tArr.push(B[j]);
      }
  }
  return tArr.sort();
}
