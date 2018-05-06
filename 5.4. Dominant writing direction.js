function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from &&
                                           code < to)) {
      return script;
    }
  }
  return null;
}


function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  // Your code here.
  let charArr = [];
  for (let char of text) {
    charArr.push(char);
  }

  let directionCount = countBy(charArr, char => characterScript(char.codePointAt(0)) ? characterScript(char.codePointAt(0)).direction : null);
  directionCount.sort((dir1, dir2) => dir2.count - dir1.count);
  return directionCount[0].name;
}


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
