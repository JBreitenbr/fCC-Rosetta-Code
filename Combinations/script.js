function permute(nums) {
   let result = [];
      if (nums.length === 0) return [];
      if (nums.length === 1) return [nums];
      for (let i = 0; i < nums.length; i++) {
          const currentNum = nums[i];
          const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
          const remainingNumsPermuted = permute(remainingNums);
          for (let j = 0; j < remainingNumsPermuted.length; j++) {
              const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
              result.push(permutedArray);
          }
      }
    let stri=result.map((item)=>item.join(""));
    return stri;
}
                                                                                        
function isArrayIsSorted(arr){
  return arr.slice(1).every((item,i)=>arr[i]<=item);
}
function combinations(m,n){
   let nums=Array.from(Array(n).keys());
   let p=permute(nums).map((item)=>item.substring(0,m));
   let r=[...new Set(p)];
   let s=r.map((item)=>item.split("")).filter((item)=>isArrayIsSorted(item));
   let t=s.map((item)=>item.map((sub)=>Number(sub)));
   return t;
}

