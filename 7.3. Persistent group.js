class PGroup {
  // Your code here
  constructor(arr) {
    this.members = [];
    for (let val of arr) {
      if (!this.members.includes(val)) this.members.push(val);
    }
  }

  add(val) {
    return new PGroup(this.members.concat(val));
  }

  delete(val) {
    return new PGroup(this.members.filter(a => a != val));
  }

  has(val) {
    return this.members.includes(val);
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
