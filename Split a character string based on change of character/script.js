/* Split a character string based on change of character
Split a (character) string into comma (plus a blank) delimited strings based on a change of character (left to right). Blanks should be treated as any other character (except they are problematic to display clearly). The same applies to commas. For instance, the string:

"gHHH5YY++///\\"
should be split as:

["g", "HHH", "5", "YY", "++", "///", "\\" ]; */

function split(str) {
  let r=str[0];
  for(let i=1;i<str.length;i++){
    if(str[i]!=str[i-1]){
      r+="*"+str[i];
    } else {
      r+=str[i];
    }
  }
  return r.split("*");
}
