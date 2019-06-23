let triangle = "";
for (let i = 0; i < 7; i++) {
  console.log((triangle += "#"));
}

// Author's solution
for (let line = "#"; line.length < 8; line += "#") console.log(line);
