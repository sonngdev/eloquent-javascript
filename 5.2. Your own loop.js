// Your code here.
function loop(val, testFunc, updateFunc, bodyFunc) {
  if (!testFunc(val)) {
    return;
  }

  bodyFunc(val);

  loop(updateFunc(val), testFunc, updateFunc, bodyFunc);
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
