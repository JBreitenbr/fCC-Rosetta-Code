function isCube(num) {
  let r=Math.pow(num,1/3);
  for(let i=2;i<Math.ceil(r)+1;i++){ 
     if(Math.pow(i,3)==num){
       return true;
     }
  }
  return false;
}

function genSquares(num){
  return Array.from(Array(num+2).keys()).map((item)=>Math.pow(item+1,2)).slice(1,num+2);
}

function exponentialGenerator(n) {
  return genSquares(2*n).filter((item)=>!isCube(item))[n-1];
}
