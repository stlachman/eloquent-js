let obj = { here: { is: "an" }, object: 2 };

const checkIfObj = val => typeof val === "object" && val !== null;

const deepEqual = (val1, val2) => {
  const keys1 = Object.keys(val1);
  const keys2 = Object.keys(val2);

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    let first = val1[keys1[i]];
    let second = val2[keys2[i]];

    if (checkIfObj(first) && checkIfObj(second)) {
      if (!deepEqual(first, second)) {
        return false;
      }
    } else if (first !== second) {
      return false;
    }
  }
  return true;
};

// deepEqual(obj, obj);
// // true
// deepEqual(obj, { here: 1, object: 2 });
// // false
// deepEqual(obj, { here: { is: "an" }, object: 2 });
// true
deepEqual(obj, { here: { is: "an" }, object: { name: 3 } });
// false
