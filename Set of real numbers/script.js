/* Set of real numbers
All real numbers form the uncountable set ℝ. Among its subsets, relatively simple are the convex sets, each expressed as a range between two real numbers a and b where a ≤ b. There are actually four cases for the meaning of "between", depending on open or closed boundary:

[a, b]: {x | a ≤ x and x ≤ b }
(a, b): {x | a < x and x < b }
[a, b): {x | a ≤ x and x < b }
(a, b]: {x | a < x and x ≤ b }
Note that if a = b, of the four only [a, a] would be non-empty.

Task

Devise a way to represent any set of real numbers, for the definition of "any" in the implementation notes below.
Provide methods for these common set operations (x is a real number; A and B are sets):
x ∈ A: determine if x is an element of A
example: 1 is in [1, 2), while 2, 3, ... are not.
A ∪ B: union of A and B, i.e. {x | x ∈ A or x ∈ B}
example: [0, 2) ∪ (1, 3) = [0, 3); [0, 1) ∪ (2, 3] = well, [0, 1) ∪ (2, 3]
A ∩ B: intersection of A and B, i.e. {x | x ∈ A and x ∈ B}
example: [0, 2) ∩ (1, 3) = (1, 2); [0, 1) ∩ (2, 3] = empty set
A - B: difference between A and B, also written as A \ B, i.e. {x | x ∈ A and x ∉ B}
example: [0, 2) − (1, 3) = [0, 1]
Write a function that takes 2 objects, a string and an array as parameters. The objects represents the set and have attributes: low, high and rangeType.

The rangeType can have values 0, 1, 2 and 3 for CLOSED, BOTH_OPEN, LEFT_OPEN and RIGHT_OPEN, respectively. The function should implement a set using this information.

The string represents the operation to be performed on the sets. It can be: "union", "intersect" and "subtract" (difference).

After performing the operation, the function should check if the values in the array are present in the resultant set and store a corresponding boolean value to an array. 
The function should return this array. */

function realSet(set1, set2, operation, values) {
   let oObj={
      0:["<=",">="],
      1:["<",">"],
      2:["<=",">"],
      3:["<",">="]
   };
   let cond11=oObj[set1["rangeType"]][1]+set1["low"];
   let cond12=oObj[set1["rangeType"]][0]+set1["high"];  let cond21=oObj[set2["rangeType"]][1]+set2["low"];
   let cond22=oObj[set2["rangeType"]][0]+set2["high"];  
   function check(num){
      let cond;
      if(operation=="union"){
         cond=eval(num+cond11)&&eval(num+cond12)||eval(num+cond21)&&eval(num+cond22);
      } else if(operation=="intersect"){
         cond=eval(num+cond11)&&eval(num+cond12)&&eval(num+cond21)&&eval(num+cond22);
      } else if(operation=="subtract"){
         cond=eval(num+cond11)&&eval(num+cond12)&&!(eval(num+cond21)&&eval(num+cond22));
      }
      return cond;
   }
   let res=[];
   for(let i=0;i<values.length;i++){
      res.push(check(values[i]));
   }
   return res;
}
realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "union", [0, 1, 2])
