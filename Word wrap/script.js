function wordFrequency(txt, n) {
  if(!txt){
    return [];
  }
  else {
  let arr=txt.split(" ").map((item)=>item.toLowerCase());
  let frObj={};
  arr.forEach((item)=>item in frObj?frObj[item]+=1:frObj[item]=1);
  return Object.entries(frObj).sort((a,b)=>b[1]-a[1]).slice(0,n);}
}
