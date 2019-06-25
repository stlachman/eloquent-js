// Input: String
// Output: Number of uppercase Bs
const countBs = str => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count++;
    }
  }
  return count;
};
console.log(countBs("BBC"));
// -> 2

const countChar = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};
console.log(countChar("kakkerlak", "k"));
// -> 4

// countBs rewritten
const countBs = str => {
  return countChar(str, "B");
};
