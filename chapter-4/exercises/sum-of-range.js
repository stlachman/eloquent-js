const range = (start, end, step) => {
  const result = [];
  let increment = step === undefined ? 1 : step;
  if (increment > 0) {
    for (let i = start; i <= end; i += increment) {
      result.push(i);
    }
  } else if (increment < 0) {
    for (let i = start; i >= end; i -= Math.abs(increment)) {
      result.push(i);
    }
  }
  return result;
}

// console.log(range(1, 10));
// console.log(range(5, 2, -1));

const sum = arr => {
  return arr.reduce((total, currentVaue) => total + currentVaue);
}

console.log(sum(range(1, 10)));