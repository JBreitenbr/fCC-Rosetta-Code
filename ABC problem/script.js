/* ABC Problem
You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:

(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.
Some rules to keep in mind:

Once a letter on a block is used, that block cannot be used again.
The function should be case-insensitive.
*/

function canMakeWord(word) {
let blocks=[["B","O"],["X","K"],["D","Q"],["C","P"],["N","A"],["G","T"],["R","E"],["T","G"],
["Q","D"],["F","S"],["J","W"],["H","U"],["V","I"],
["A","N"],["O","B"],["E","R"],["F","S"],["L","Y"],["P","C"],["Z","M"]];
let strArr0=blocks.map((item)=>item[0]+item[1]);
let dups = strArr0.reduce(function(acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) 
        acc.push(el); 
return acc;
  }, []);

let strArr=Array.from(new Set(strArr0));
for(let i=0;i<dups.length;i++){
  strArr.push(dups[i].split("").reverse().join(""));
}
let wrd=word.toUpperCase().split("");
let used=[];
for(let j=0;j<wrd.length;j++){
for(let i=0;i<strArr.length;i++){
  if(strArr[i].includes(wrd[j])){
    used.push(strArr[i]);
    strArr=strArr.filter((item)=>!used.includes(item));
    break;
  }
}
}
return wrd.length==used.length;
}
