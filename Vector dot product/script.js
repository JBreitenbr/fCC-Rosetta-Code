function dotProduct(...vectors) {
if(vectors.length != 2 || vectors[0].length!=vectors[1].length){
  return null;
}
else {
  let v1=vectors[0];
  let v2=vectors[1];
  let vSum=0;
  for(let i=0;i<v1.length;i++)
 {
    vSum+=v1[i]*v2[i];
 }
 return vSum;
  }
}
