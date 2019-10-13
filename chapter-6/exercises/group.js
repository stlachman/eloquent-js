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

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.current = 0;
  }

  next() {
    if (this.current === this.group.store.length) return { done: true };
    let value = this.group.store[this.current];
    this.current++;
    return { value, done: false };
  }
}
