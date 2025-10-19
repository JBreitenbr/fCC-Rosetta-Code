/* Last letter-first letter
A certain children's game involves starting with a word in a particular category. Each participant in turn says a word, but that word must begin with the final letter of the previous word. Once a word has been given, it cannot be repeated. If an opponent cannot give a word in the category, they fall out of the game.

For example, with "animals" as the category,

Child 1: dog
Child 2: goldfish
Child 1: hippopotamus
Child 2: snake
...
Write a function that takes an input array of words. The function should return an array of words where the first letter of each word is the same as the last letter of the previous word. Only use the words in the input array, and once a word is used it cannot be repeated. The words in the return array should be selected and sequenced so that its length is maximized.
*/

function genSeq(r){
let s=[];
if(r[0].split("").reverse()[0]==r[1][0]){
  s.push(r[0]);
}
for(let i=1;i<r.length;i++){
  if(r[i][0]==r[i-1].split("").reverse()[0]){
    s.push(r[i]);
  }
}
return s;
}
function checkSeq(r){
  let s=[];
  if(r[0].split("").reverse()[0]==r[1][0]){
    s.push(r[0]);
    }
    for(let i=1;i<r.length;i++){
      if(r[i][0]==r[i-1].split("").reverse()[0]){
          s.push(r[i]);
            }
            }
      return s.length==r.length;
}

function findMaxLengthOfNestedArrays(nestedArray) {
                 return Math.max(...nestedArray.map(row => row.length))
}

function permi(arr){
let res = [[]];
for (let num of arr) {
    const temp = [];
            for (let arr of res) {for (let i = 0; i <= arr.length; i++) {
const newArr = [...arr];
newArr.splice(i, 0, num);
temp.push(newArr);
}
            }
res=temp;                     
}                                
  return res;}   

function findLongestChain(items) {
  let p0=permi(items).map((item)=>genSeq(item)).filter((item)=>item.length>1);
  let p1=p0.filter((item)=>checkSeq(item));
  let l=findMaxLengthOfNestedArrays(p1);
  let p2=p1.filter((item)=>item.length==l).sort();
  return p2[0];
}
/*
findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"]);
findLongestChain(["audino", "bagon", "kangaskhan", "banette", "bidoof", "braviary", "exeggcute", "yamask"]);*/
findLongestChain(["scolipede", "elephant", "zeaking", "sealeo", "silcoon", "tigers"]);
