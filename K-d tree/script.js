/* K-d tree
A k-d tree (short for k-dimensional tree) is a space-partitioning data structure for organizing points in a k-dimensional space. k-d trees are a useful data structure for several applications, such as searches involving a multidimensional search key (e.g. range searches and nearest neighbor searches). 
k-d trees are a special case of binary space partitioning trees. k-d trees are not suitable, however, for efficiently finding the nearest neighbor in high dimensional spaces. 
As a general rule, if the dimensionality is k, the number of points in the data, N, should be N ≫ 2k. 
Otherwise, when k-d trees are used with high-dimensional data, most of the points in the tree will be evaluated and the efficiency is no better than exhaustive search, and other methods such as approximate nearest-neighbor are used instead.

Write a function to perform a nearest neighbor search using k-d tree. The function takes two parameters: an array of k-dimensional points, and a single k-dimensional point whose nearest neighbor should be returned by the function.
A k-dimensional point will be given as an array of k elements. */

function eDist(arr1,arr2){
  let sn=0;
  for(let i=0;i<arr1.length;i++){
    sn+=Math.pow(arr1[i]-arr2[i],2);
  }
  return Math.sqrt(sn);
}

function kdNN(fpoints, fpoint) {
  let mini=eDist(fpoints[0],fpoint);
  let ind=0;
  for(let i=1;i<fpoints.length;i++){
    if(eDist(fpoints[i],fpoint)<mini){
       mini=eDist(fpoints[i],fpoint);
       ind=i;
    };
  }
  return fpoints[ind];
}
