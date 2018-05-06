var size = 8;

for (var i = 0; i < size; i++) { // row
  var print = "";
  for (var j = 0; j < size; j++) { // col
    print += ((i+j) % 2 == 0) ? " " : "#";
  }
  console.log(print);
}
