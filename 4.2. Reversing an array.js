function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr.unshift(...arr.splice(i, 1));
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
