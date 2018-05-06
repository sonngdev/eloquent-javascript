var arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
var newArr = arrays.reduce(function(arr1, arr2) {
  return arr1.concat(arr2);
})

console.log(newArr);
// → [1, 2, 3, 4, 5, 6]
