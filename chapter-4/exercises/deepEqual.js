let obj = { here: { is: "an" }, object: 2 };

function isObj(val) {
  return typeof val === "object" && typeof val !== null;
}

function deepEqual(val1, val2) {
  const keys1 = Object.keys(val1);
  const keys2 = Object.keys(val2);
  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    if (isObj(val1[keys1[i]]) && isObj(val2[keys2[i]])) {
      deepEqual(val1[keys1[i]], val2[keys2[i]]);
    } else if (val1[keys1[i]] !== val2[keys2[i]]) {
      return false;
    }
  }
  return true;
}
// deepEqual(obj, obj);
// // true
// deepEqual(obj, { here: 1, object: 2 });
// // false
// deepEqual(obj, { here: { is: "an" }, object: 2 });
// true
deepEqual(obj, { here: { is: "an" }, object: { name: 3 } });
// false
