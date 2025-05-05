function combinations(possibleNumbers, total) {
  let tArr=[];
  let l1=possibleNumbers.slice(0,1)[0];
  let l2=possibleNumbers.reverse().slice(0,1)[0];
  for(let i=l1;i<=l2;i++){
    for(let j=l1;j<=l2;j++){
      for(let k=l1;k<=l2;k++){
        if(i+j+k==total && i!=j && i!=k && j!=k){
          tArr.push([i,j,k]);
        }
      }
    }
  }
  return tArr.filter((item)=>item[0]%2==0);
}
