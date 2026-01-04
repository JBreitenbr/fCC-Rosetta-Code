/* Sort stability
When sorting records in a table by a particular column or field, a stable sort will always retain the relative order of records that have the same key.

For example, in this table of countries and cities, a stable sort on the second column, the cities, would keep the US Birmingham above the UK Birmingham. (Although an unstable sort might, in this case, place the US Birmingham above the UK Birmingham, a stable sort routine would guarantee it).

UK  London
US  New York
US  Birmingham
UK  Birmingham
Similarly, stable sorting on just the first column would generate "UK London" as the first item and "US Birmingham" as the last item (since the order of the elements having the same first word – "UK" or "US" – would be maintained).

Write a function that takes a 2D array as a parameter. Each element has 2 elements similar to the above example. The function should sort the array as mentioned previously and return the sorted array. */

function stableSort(arr) {
    arr.sort(function(a, b) { return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0)) });
      return arr;
 }
