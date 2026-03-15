/* Self-referential sequence
There are several ways to generate a self-referential sequence. One very common one (the Look-and-say sequence) is to start with a positive integer, then generate the next term by concatenating enumerated groups of adjacent alike digits:

0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...
The terms generated grow in length geometrically and never converge.

Another way to generate a self-referential sequence is to summarize the previous term.

Count how many of each alike digit there is, then concatenate the sum and digit for each of the sorted enumerated digits. Note that the first five terms are the same as for the previous sequence.

0, 10, 1110, 3110, 132110, 13123110, 23124110 ...
Sort the digits largest to smallest. Do not include counts of digits that do not appear in the previous term. */

function selfRef(stri){
  let s=Array.from(new Set(stri.split(""))).sort((a,b)=>b-a);
  let res="";
  for(let i=0;i<s.length;i++){
    res+=(stri.split(s[i]).length-1).toString();
    res+=s[i];
  }
 return res;
}

function selfReferential(n) {
  let seq=[n.toString()];
  for(let i=1;i<15;i++){
    seq.push(selfRef(seq[i-1]));  
    let m=Array.from(new Set(seq));
    if(m.length<seq.length) return seq.slice(0,i);
  }
}
