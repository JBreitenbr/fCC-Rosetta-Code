function hlp(arr){
let tr=[];
tr.push(Number(arr[0][0])); tr.push(Number(arr[1][0]));
if(arr[0][1]!=arr[1][1]){
  return tr.slice(0,1);
}
else {
  return tr;}
}

function mode(arr) {
let frObj={};
  arr.forEach((item)=>item in frObj?frObj[item]+=1:frObj[item]=1);
    return hlp(Object.entries(frObj).sort((a,b)=>b[1]-a[1]).slice(0,2));
}
