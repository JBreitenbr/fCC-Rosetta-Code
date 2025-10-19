/* Closest-pair problem
Provide a function to find the closest two points among a set of given points in two dimensions.
*/

let Point = function(x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function() {
  return this.x;
};
Point.prototype.getY = function() {
  return this.y;
};
const points = [
  new Point(1, 2),
  new Point(3, 3),
  new Point(2, 2)
        ];
console.log(points);
function getDistance(point1,point2){
  return Math.sqrt(Math.pow(point2.x-point1.x,2)+Math.pow(point2.y-point1.y,2));
}

function helper(points){
  let minPoints=points.slice(0,2);
  let minDist=getDistance(points[0],points[1]);
  for(let i=0;i<points.length-1;i++){
    for(let j=i+1;j<points.length;j++){
      if(getDistance(points[i],points[j])<minDist){
        minDist=getDistance(points[i],points[j]);
        minPoints=points[i].x<points[j].x?[points[i],points[j]]:[points[j],points[i]];
    }
  }
  }
  return [minPoints,minDist];
}

function getClosestPair(pointsArr) {
  let arr=helper(pointsArr);
  return { distance:arr[1],pair:arr[0]}
}
