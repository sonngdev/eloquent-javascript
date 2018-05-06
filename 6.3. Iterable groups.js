// Your code here (and the code from the previous exercise)
class Group {
  // Your code here.
  constructor() {
    this.members = [];
  }

  add(val) {
    if (!this.members.includes(val)) {
      this.members.push(val);
    }
  }

  delete(val) {
    let index = this.members.indexOf(val);
    if (index != -1) {
      this.members.splice(index, 1);
    }
  }

  has(val) {
    return this.members.includes(val);
  }

  static from(iterable) {
    let group = new Group();
    for (let val of iterable) group.add(val);
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.members = group.members.slice();
  }

  next() {
    if (this.index == this.members.length) return {done: true};
    let value = this.members[this.index];
    this.index++;
    return {value, done: false}
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

var newGroup = Group.from([1, 2, 3]);
var iter = newGroup[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
