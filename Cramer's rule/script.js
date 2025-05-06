/* Regel von Sarrus */
function det3D(m){
let b1=m[0][0]*m[1][1]*m[2][2];
let b2=m[0][1]*m[1][2]*m[2][0];
let b3=m[0][2]*m[1][0]*m[2][1];
let b4=m[2][0]*m[1][1]*m[0][2];
let b5=m[2][1]*m[1][2]*m[0][0];
let b6=m[2][2]*m[1][0]*m[0][1];
return b1+b2+b3-b4-b5-b6;
}
/* Vorzeichen für Matrixelement */
function signu(i,j){
  return (i+j)%2==0?1:(-1);
}
/* Matrix transponieren */
function tMat(m) {
  let tM=[[],[],[],[]];
  if(m.length==3){
    tM=[[],[],[]];
  }
  for(let i=0;i<m.length;i++){
   for(let j=0;j<m.length;j++){
    tM[i].push(m[j][i]);
  }
 }
  return tM;
}                
/* Untermatrizen */
function subM(mat,i,j){
  let m=mat.slice();
  let m2=[];
  for(let k=0;k<m.length;k++){
    let sb=m[k].filter((item,index)=>index!=j);
    if(k!=i){
      m2.push(sb);
    }
  }
  return m2;
}
/* Spalte in Matrix ersetzen */
function replVec(mat,v,i){
  let m=tMat(mat.slice());
  let m2=[];
  for(let k=0;k<m.length;k++){
    if(k!=i){
      m2.push(m[k]);
    }
    else {
      m2.push(v);
    }
  }
  return tMat(m2);
}
/* Laplacescher Entwicklungssatz:
Entwicklung nach der ersten Zeile */
function det4D(m){
  let det=0;
  for(let k=0;k<m.length;k++){
    det+=signu(0,k)*det3D(subM(m,0,k))*m[0][k];
  }
  return det;
}

function cramersRule(matrix, freeTerms) {
  let rArr=[];
  let m=matrix.slice();
  let v=freeTerms.slice();
  let l=matrix.length;
  for(let i=0;i<l;i++){
    let q=replVec(m,v,i);
    console.log(q);
    if(l==3){
      rArr.push(det3D(q)/det3D(m));
    }
    if(l==4){
      rArr.push(det4D(q)/det4D(m));
    }
  }
  return rArr;
      }
