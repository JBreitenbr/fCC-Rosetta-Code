/* Vector cross product
A vector is defined as having three dimensions as being represented by an ordered collection of three numbers: (X, Y, Z).

Write a function that takes two vectors (arrays) as input and computes their cross product. Your function should return null on invalid inputs such as vectors of different lengths.
*/ 

function crossProduct(a, b) {
  if(a && b){
  let z1=a[1]*b[2]-b[1]*a[2];
  let z2=a[2]*b[0]-b[2]*a[0];
  let z3=a[0]*b[1]-b[0]*a[1];
  return [z1,z2,z3];
  }
  else return null;
}
