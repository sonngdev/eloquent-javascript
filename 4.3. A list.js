function arrayToList(arr) {
  let k = arr.length-1;
  if (k === 0) {
    return {value: arr[0], rest: null};
  } else {
    return {value: arr[0], rest: arrayToList(arr.slice(1))};
  }
}

function listToArray(list) {
  let arr = [list.value];
  if (list.rest === null) {
    return arr;
  } else {
    arr = arr.concat(listToArray(list.rest));
  }
  return arr;
}

function prepend(ele, list) {
  return {value: ele, rest: list};
}

function nth(list, num) {
  if (num === 0) {
    return list.value;
  } else {
    if (list.rest === null) {
      return undefined;
    } else {
      return nth(list.rest, num-1);
    }
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
