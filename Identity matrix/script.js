function idMatrix(n) {
let arr=Array.from(Array(n), () => Array(n).fill(0));
let ind=Array.from(Array(n).keys()).forEach((item)=>arr[item][item]=1);
return arr;
}
