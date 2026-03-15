/* Sorting algorithms/Permutation sort
Write a function to implement a permutation sort, which proceeds by generating the possible permutations of the input array until discovering the sorted one. The function should return the sorted array.

Pseudocode:

while not InOrder(list) do
  nextPermutation(list)
done */

function permute(nums) {
  let result = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length; i++) {
  let currentNum = nums[i];
  let remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
  let remainingNumsPermuted = permute(remainingNums);   
  for (let j = 0; j < remainingNumsPermuted.length; j++) {
 let permutedArray=              [currentNum].concat(remainingNumsPermuted[j]);
result.push(permutedArray);
    }
   }
  return result;
}

function isSorted(arr){
  for(let i=1;i<arr.length;i++){
    if(arr[i]<arr[i-1]) return false;
  }
  return true;
}

function permutationSort(arr) {
  let perms=permute(arr);
  for(let i=0;i<perms.length;i++){
    if(isSorted(perms[i])) return perms[i];
  }
}
