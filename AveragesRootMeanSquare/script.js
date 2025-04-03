function rms(arr) {
  return Math.sqrt(arr.map((item)=>item*item).reduce((a,b)=>a+b,0)/arr.length);
}
