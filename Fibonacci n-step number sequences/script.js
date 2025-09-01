function fib(n,dim) {
let m=0;
if(n==0){return 0;}
if(n==1){return 1;}
if(n==2){return 1;}
if(n==3){return 2;}
else {
for(let i=1;i<=dim;i++){
  m+=fib(n-i,dim);
}
}
return m;
}
function luc(n,dim){
let m=0;
if(n==0){return 2;}
if(n==1){return 1;}
if(n==2){return 3;}
if(n==3 && dim<=2){return 4;}
if(n==3 && dim>2){return 6;}
if(n==4 && dim>=5){return 12;}
else {
  for(let i=1;i<=dim;i++){
    m+=luc(n-i,dim);
  }
}
return m;
}
function mkArr(n,dim,w){
  let targ=[];
  for(let i=0;i<=n;i++){
  if(w=="f"){targ.push(fib(i,dim));}else{targ.push(luc(i,dim));}}
  return w=="f"?targ.slice(1):targ.slice(0,targ.length-1);
}

function fib_luc(n, len, w) {
  return w=="f"?mkArr(len,n,"f"):mkArr(len,n,"l");
}
