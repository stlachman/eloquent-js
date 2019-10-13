class Group {
  constructor() {
    this.store = [];
  }

  add(item) {
    if (!this.has(item)) {
      this.store.push(item);
    }
  }

  delete(item) {
    if (this.has(item)) {
      let index = this.store.indexOf(item);
      this.store = this.store
        .slice(0, index)
        .concat(this.store.slice(index + 1));
    }
  }

  has(item) {
    return this.store.includes(item);
  }

  static from(items) {
    let g = new Group();
    for (let item of items) {
      if (!g.has(item)) {
        g.store.push(item);
      }
    }
    return g;
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
