/*Entropy
Calculate the Shannon entropy H of a given input string.

Given the discrete random variable  X
  that is a string of  N
  "symbols" (total characters) consisting of  n
  different characters (n=2 for binary), the Shannon entropy of X in bits/symbol is:

H2(X)=−∑count_i/N*log2(count_i/N)
 (summation from 1 to n)
where  count_i is the count of character n_i. */

function entropy(s) {
  // Build a frequency map from the string.
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
  return sn;
}
 
