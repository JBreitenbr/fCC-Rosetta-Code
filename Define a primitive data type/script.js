/* Define a primitive data type
Define a type that behaves like an integer but has a lowest valid value of 1 and a highest valid value of 10.

Error handling:

If you try to instantiate a Num with a value outside of 1 - 10, it should throw a TypeError with an error message of 'Out of range'.
If you try to instantiate a Num with a value that is not a number, it should throw a TypeError with an error message of 'Not a Number'.
*/

function Num(n) {
  if(typeof(n)!="number"){
    throw TypeError("Not a Number");
  }
  if(n<1||n>10){
    throw TypeError("Out of range");
  }
  return new Number(n);
}
