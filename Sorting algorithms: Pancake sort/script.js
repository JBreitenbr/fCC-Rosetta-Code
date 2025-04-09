/* Quelle: https://reintech.io/blog/javascript-pancake-sort-tutorial */
function pancakeSort(arr) {
  for(let i = arr.length - 1; i >= 1; i--) {
    // Find the index of the largest element not yet sorted
    let max_idx = 0;
    let max_val = arr[0];
    for(let j = 1; j <= i; j++) {
      if(arr[j] > max_val) {
        max_val = arr[j];
        max_idx = j;
      }
    }

    // If we need to move it, we use the flip operation
    if(max_idx != i) {
      // First, we flip from the start to max_idx
      let start = 0;
      let end = max_idx;
      while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }

      // Then we flip from the start to i
      start = 0;
      end = i;
      while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  }

  return arr;
}
