function loop(val, test, update, body) {
  for (let i = val; test(i); i = update(i)) {
    body(i);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
