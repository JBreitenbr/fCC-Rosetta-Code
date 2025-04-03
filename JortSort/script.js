function jortsort(array) {
  let sorted=array.slice(0,array.length).sort((a,b)=>a-b);
  for(let i=0;i<array.length;i++){
    if(array[i]!==sorted[i]){
      return false;
    }
  }
  return true;
}
