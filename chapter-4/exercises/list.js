const arrayToList = arr => {
  let list = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

const listToArray = list => {
  const arr = [];

  let node = list;

  while (node) {
    if (node.value) {
      arr.push(node.value);
    }
    node = node.rest;
  }
  return arr;
};
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

const prepend = (element, list) => {
  let newList = {};
  newList.value = element;
  newList.rest = list;

  return newList;
};
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

const nth = (list, number) => {
  let value;
  let node = list;
  let counter = 0;

  while (node) {
    if (counter == number) {
      return node.value;
    }
    counter++;
    node = node.rest;
  }
  return value;
};

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
