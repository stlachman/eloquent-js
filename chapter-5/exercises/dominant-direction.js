function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ direction }) => direction != "none");

  let currentMax = 0;
  let direction;

  scripts.map(item => {
    if (item.count > currentMax) {
      currentMax = item.count;
      direction = item.name;
    }
  });

  return direction;
}

console.log(dominantDirection("Hello!"));
// ltr
console.log(dominantDirection("Hey, مساء الخير"));
// rtl
