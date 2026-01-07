/* Knapsack problem/Bounded
The bounded knapsack problem is defined as follows:

You are given an array of objects representing items to be put in a knapsack. The objects have 4 attributes: name, pieces (the number of the particular item), weight, and value. The items need to be selected so that the total weight does not exceed the maximum weight and the value is maximized. Keep in mind that each item can appear between 0 and pieces times.

Write a function to solve the knapsack problem. The function is given the array of objects and the maximum weight as parameters. It should return the maximum total value possible. */ 

function knapsackRec(W, val, wt, n) {
  if (n === 0 || W === 0)    {return 0;}
  let pick = 0;
  if (wt[n - 1] <= W){
    pick = val[n - 1] + knapsackRec(W - wt[n - 1], val, wt, n - 1);}
  let notPick = knapsackRec(W, val, wt, n - 1);
  return Math.max(pick, notPick);
  }

function findBestPack(data, maxweight) {
  let vals=[];
  let wts=[];
  for(let i=0;i<data.length;i++){
    for(let j=0;j<data[i].pieces;j++){
      vals.push(data[i].value);
      wts.push(data[i].weight);
    }
  }
  return knapsackRec(maxweight,vals,wts,vals.length);
  }
