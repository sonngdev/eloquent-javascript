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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

console.log(group);
