/* Circles of given radius through two points
Given two points on a plane and a radius, usually two circles of given radius can be drawn through the points.

Exceptions:

A radius of zero should be treated as never describing circles (except in the case where the points are coincident).
If the points are coincident then an infinite number of circles with the point on their circumference can be drawn, unless the radius is equal to zero as well which then collapses the circles to a point.
If the points form a diameter then return a single circle.
If the points are too far apart then no circles can be drawn.
Implement a function that takes two points and a radius and returns the two circles through those points. For each resulting circle, provide the coordinates for the center of each circle rounded to four decimal digits. Return each coordinate as an array, and coordinates as an array of arrays.

For edge cases, return the following:

If points are on the diameter, return one point. If the radius is also zero however, return "Radius Zero".
If points are coincident, return "Coincident point. Infinite solutions".
If points are farther apart than the diameter, return "No intersection. Points further apart than circle diameter".
Sample inputs:

      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0 */

const eDist=(p1,p2)=>{
  return Math.sqrt(p1.map((e,i)=>(e-p2[i])*(e-p2[i])).reduce((a,b)=>a+b))/2;
}
const pAng = (p1, p2) =>Math.atan(p1.map((e, i) => e - p2[i]).reduce((p, c) => c / p, 1))
;
const solveF = (p, r) => t => [r*Math.cos(t) + p[0], r*Math.sin(t) + p[1]];
const diamPoints = (p1, p2) => p1.map((e, i) => e + (p2[i] - e) / 2);
function getCircles(...args) {
const [p1, p2, s] = args;
const solve = solveF(p1, s);
const halfDist = eDist(p1, p2);
if(p1[0]==p2[0]&&p1[1]==p2[1]&&s>0)return "Coincident point. Infinite solutions";
 if(s==0.0) return "Radius Zero";
 if(eDist(p1,p2)>s) return "No intersection. Points further apart than circle diameter";
 let theta=pAng(p1,p2);
 let theta2=Math.acos(halfDist/2);
 let m=[1,-1].map(e=>solve(theta+e*theta2)).map((item)=>[Math.round(item[0]*10000)/10000,Math.round(item[1]*10000)/10000]);
 if(Math.sign(s-halfDist)==0)
 return diamPoints(p1,p2);
 return m;
}
