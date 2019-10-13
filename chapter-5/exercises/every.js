function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

function every(array, test) {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
