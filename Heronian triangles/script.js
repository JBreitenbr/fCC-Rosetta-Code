/* Heronian triangles
Hero's formula for the area of a triangle given the length of its three sides a, b, and c is given by:

A=Math.sqrt(s(s−a)(s−b)(s−c)),
 

where s is half the perimeter of the triangle; that is,

s=a+b+c2.
 

Heronian triangles are triangles whose sides and area are all integers.

An example is the triangle with sides 3, 4, 5 whose area is 6 (and whose perimeter is 12).

Note that any triangle whose sides are all an integer multiple of 3, 4, 5; such as 6, 8, 10, will also be a Heronian triangle.

Define a Primitive Heronian triangle as a Heronian triangle where the greatest common divisor

of all three sides is 1 (unity).

This will exclude, for example, triangle 6, 8, 10.

Implement a function based on Hero's formula that returns the first nth ordered triangles in an array of arrays.
*/

function isHeronian(a,b,c){
  let s=0.5*(a+b+c);
  let ar=Math.sqrt(s*(s-a)*(s-b)*(s-c));
  let ch=Math.floor(ar)==ar && s>a && s>b && s>c;
  return ch;
}

function gcd (a, b) {
  if(b == 0){return a;}
  return gcd(b, a%b);
  }
                      function gcd_gen(a) {
  return a.reduce(gcd)
  }

function ar_dia(a,b,c){
  return [Math.sqrt((a+b+c)/2*((a+b+c)/2-a)*((a+b+c)/2-b)*((a+b+c)/2-c)),a+b+c];
}
function heronianTriangle(n) {
  let res=[];
  for(let i=3;i<60;i++){
    for(let j=i;j<60;j++){
      for(let k=j;k<60;k++){
        if(isHeronian(i,j,k)&&gcd_gen([i,j,k])==1){
          res.push([i,j,k,ar_dia(i,j,k)]);
        }
      }
    }
  }
  let compl=res.sort((a,b)=>a[3][0]-b[3][0]||a[3][1]-b[3][1]).map((item)=>item.slice(0,3));
  return compl.slice(0,n);
}
heronianTriangle(10)
