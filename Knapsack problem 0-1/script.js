/* Knapsack problem/0-1
The 0-1 knapsack problem is defined as follows:

You are given an array of objects representing items to be put in a knapsack. The objects have 3 attributes: name, weight, and value. The items need to be selected so that the total weight does not exceed the maximum weight and the value is maximized.

Write a function to solve the knapsack problem. The function is given the array of objects and the maximum weight as parameters. 
It should return the maximum total value possible. */

function knapsackRec(W, val, wt, n) {
   if (n === 0 || W === 0)    {return 0;}
   let pick = 0;
   if (wt[n - 1] <= W){
      pick = val[n - 1] + knapsackRec(W - wt[n - 1], val, wt, n - 1);}
   let notPick = knapsackRec(W, val, wt, n - 1);
   return Math.max(pick, notPick);
 }
 
function knapsack(items, maxweight) {
   let vals=[];
   let wts=[];
   for(let i=0;i<items.length;i++){
      vals.push(items[i].value);
      wts.push(items[i].weight);
   }
   let n=vals.length;
   return knapsackRec(maxweight,vals,wts,n);
}
