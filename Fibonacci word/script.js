/* Fibonacci word

The Fibonacci Word Sequence may be created in a manner analogous to the Fibonacci Sequence, but it focuses on iterating concatenation.

Define  F_Word1  as  1
Define  F_Word2  as  0
Form   F_Word3  as  F_Word2   concatenated with  F_Word1   i.e.:  01
Form   F_Wordn  as  F_Wordn-1  concatenated with  F_wordn-2
Entropy calculation is required in this challenge, as shown in this Rosetta Code challenge

Write a function to return the first n Fibonacci Words. The number of n is provided as a parameter to the function. The function should return an array of objects. 
The objects should be of the form: { N: 1, Length: 1, Entropy: 0, Word: '1' }. Entropy is computed for the string Word and rounded to 8 decimal digits of accuracy.
Note that the indices of this sequence start at 1. */

function entropy(s) {
  let st=Array.from(new Set(s.split("")));
  let freqs={};
  for(let i=0;i<st.length;i++){
    freqs[st[i]]=0;
      }
  for(let i=0;i<s.length;i++){
    freqs[s[i]]+=1;
    }
  let sn=0;
  for(let el of Object.values(freqs)) {
    sn-=(el/s.length)*Math.log2(el/s.length);
    }
  let r=Math.round(100000000*sn)/100000000;
  return r;
}

function fibWord(n) {
  let seq=["1","0"];
  let obj;
  for(let i=2;i<7;i++){
    seq.push(seq[i-1]+seq[i-2]);
  }
  let res=[];
  for(let i=0;i<7;i++){
    obj={N:i+1,Length:seq[i].length,Entropy: entropy(seq[i]), Word:seq[i]};
    res.push(obj);
  }
  return res.slice(0,n);
}
