let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
// console.log(map.hasOwnProperty("one"));
console.log({}.hasOwnProperty.call(map, "one"));
// → true

// or
Object.prototype.hasOwnProperty.call(map, "one"); // true
