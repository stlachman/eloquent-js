let arrays = [[1, 2, 3], [4, 5], [6]];

const flattened = arrays.reduce((acc, cv) => {
  return acc.concat(cv);
}, []);

// → [1, 2, 3, 4, 5, 6]
