function getArr(sec) {
  let arr=[0,0,0,0,0];
  arr[0]=Math.floor(sec/(60*60*24*7));
  let r1=Math.floor(sec-60*60*24*7*arr[0]);
  arr[1]=Math.floor(r1/(60*60*24));
  let r2=Math.floor(sec-60*60*24*7*arr[0]-60*60*24*arr[1]);
  arr[2]=Math.floor(r2/(60*60));
  let r3=Math.floor(sec-3600*24*7*arr[0]-3600*24*arr[1]-3600*arr[2]);
  arr[3]=Math.floor(r3/60);
  let r4=Math.floor(sec-3600*24*7*arr[0]-3600*24*arr[1]-3600*arr[2]-60*arr[3]);
  arr[4]=r4;
  return arr;
}

function convertSeconds(sec){
  let arr=getArr(sec);
  let units=["wk","d","hr","min","sec"];
  let c=[0,0,0,0,0];
  for(let i=0;i<5;i++){
    if(arr[i]>0){
      c[i]=arr[i].toString()+" "+units[i]+",";
    }
  }
  let pre=c.filter((item)=>item!=0);
  let stri=pre.join(" ");
  return stri.slice(0,stri.length-1);
}
convertSeconds(6000000);
