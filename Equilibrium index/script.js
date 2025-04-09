function isEqui(arr,ind){
  let pt1=arr.slice(0,ind);
  let pt2=arr.slice(ind+1,arr.length);
  let s1,s2;
  s1=pt1.reduce((a,b)=>a+b,0);
  s2=pt2.reduce((a,b)=>a+b,0);
  return s1==s2;
}

function equilibrium(a) {
  let rArr=[];
  for(let i=0;i<a.length;i++){
    if(isEqui(a,i)){
      rArr.push(i);
    }
  }
  return rArr;
}
