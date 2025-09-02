function pre(n){
  let a=[0,1];
  if(n==1){return [0,1];}
  else {
  for(let i=1;i<=n;i++){
    for(let j=1;j<i;j++){
    a.push(j/i);
    }
  }
  }
  return Array.from(new Set(a)).sort();
}

function farey(n) {
  let b=[];
  let arr=pre(n);
  for(let i=0;i<arr.length;i++){
    for(let j=2;j<=n;j++){
    if(parseInt(arr[i]*j)==arr[i]*j){
    arr[i]=arr[i]*j.toString()+"/"+j.toString();
     }
    }
  }
  arr[0]="0/1";
  arr[arr.length-1]="1/1";
  return arr;
}
