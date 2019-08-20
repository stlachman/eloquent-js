const arrayToList = arr => {
  let list = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
};

arrayToList([1, 2, 3]);
