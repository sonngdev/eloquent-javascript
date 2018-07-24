// Your code here.
fetch("author", {headers: {Accept: "application/rainbows+unicorns"}})
  .then(response => response.text())
  .then(text => console.log(text));
