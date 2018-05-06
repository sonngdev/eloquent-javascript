for (var i = 1; i < 101; i++) {
  let print = "";
  if (i % 3 == 0) {
    print += "Fizz";
  }
  if (i % 5 == 0) {
    print += "Buzz";
  }
  if (i % 3 != 0 && i % 5 != 0) {
    print = i;
  }
  console.log(print);
}
