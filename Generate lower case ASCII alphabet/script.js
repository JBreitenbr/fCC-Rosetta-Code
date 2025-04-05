function lascii(cFrom, cTo) {
  let tArr=[];
  let c1=cFrom.charCodeAt();
  let c2=cTo.charCodeAt();
  for(let i=c1;i<=c2;i++){
    tArr.push(String.fromCharCode(i));}
    return tArr;
}
