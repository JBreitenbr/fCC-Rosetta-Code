/* Soundex

Soundex Algorithm deals with the intentions of the words. It creates a representation for similar sounding words.

It is used for searching names and addresses. This means that the person who filled in the name, can focus on how it sounds instead of correcting the spelling of names.

For example:

If you are hearing the name Quenci for the first time, and misspelled it, you will get Soundex code Q520.

When you spell the name Quincy correctly next time, you will still get the same code Q520, which means you can link multiple name pronunciations into the same person without the need for adding every spelling.

Here is the rules:

If a vowel (A, E, I, O, U) separates two consonants that have the same soundex code, the consonant to the right of the vowel is coded. 
Tymczak is coded as T-522 (T, 5 for the M, 2 for the C, Z ignored (see "Side-by-Side" rule above), 2 for the K). Since the vowel "A" separates the Z and K, the K is coded.
If "H" or "W" separate two consonants that have the same soundex code, the consonant to the right of the vowel is not coded. 
Example: Ashcraft is coded A-261 (A, 2 for the S, C ignored, 6 for the R, 1 for the F). It is not coded A-226.
Write a function that takes a string as a parameter and returns the encoded string. */

function soundex(s) {
  let sh=s[0].toLowerCase()==s[1]?s.slice(1):s;
  let sObj={};
  for(let el of ["b","f","p","v"])
  {
    sObj[el]=1;
  }
  for(let el of ["c","g","j","k","q","s","x","z"]){
    sObj[el]=2;
  }
  sObj["d"]=3;
  sObj["t"]=3;
  sObj["l"]=4;
  sObj["m"]=5;
  sObj["n"]=5;
  sObj["r"]=6;
  let res=s[0];
  for(let i=1;i<sh.length;i++){
    if(Object.keys(sObj).includes(sh[i]) && sObj[sh[i]]!=res[i-1] && sh[i]!=sh[i-1]){
      res+=sObj[sh[i]];
    };
  }
  res+="0000";
  return res.slice(0,4);
}
