function standardDeviation(arr) {
  let mean=arr.reduce((a,b)=>a+b,0)/arr.length;
  return Math.round(Math.sqrt(arr.map((item)=>(item-mean)*(item-mean)).reduce((a,b)=>a+b,0)/arr.length)*1000)/1000;
}
