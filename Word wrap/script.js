/* Word wrap
Even today, with proportional fonts and complex layouts, there are still cases where you need to wrap text at a specified column. The basic task is to wrap a paragraph of text in a simple way.

Write a function that can wrap this text to any number of characters. Note that the input text already contains line breaks, which your function should handle appropriately. As an example, the text wrapped to 80 characters should look like the following:

Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX
algorithm. If your language provides this, you get easy extra credit, but you
must reference documentation indicating that the algorithm is something better
than a simple minimum length algorithm.
*/

function wrap (text, limit) {
  if (text && text.length > limit) {
  text=text.replaceAll("\n"," ").replaceAll("''","");
  let ed = text.slice(0, limit).lastIndexOf(" ");
  if (ed > 0) {
    let line = text.slice(0, ed);
    let rem = text.slice(ed + 1);
  return line + '\n' + wrap(rem, limit);
     }
  }
  return text;
}
console.log(wrap(text,80));
