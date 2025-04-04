function countSubstring(str, subStr) {
  let cntVar=0;
  do {
    let ind=str.indexOf(subStr);
    if(ind!==-1){
    str=str.slice(ind+subStr.length,str.length);}
    console.log(str);
    cntVar+=1;
    }
  while(str.length>subStr.length);
  return cntVar;
}
