function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return (num > 0) ? isEven(num-2) : isEven(num+2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
