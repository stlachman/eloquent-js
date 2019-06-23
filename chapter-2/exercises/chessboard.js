let size = 7;
for (let i = 0; i <= size; i++) {
  let chessBoard = "";
  for (let j = 0; j <= size; j++) {
    if (i % 2 == 0 && j % 2 === 0) {
      chessBoard += " ";
    } else if (i % 2 == 0 && j % 2 === 1) {
      chessBoard += "#";
    } else if (i % 2 == 1 && j % 2 === 0) {
      chessBoard += "#";
    } else if (i % 2 == 1 && j % 2 === 1) {
      chessBoard += " ";
    }
  }
  console.log(chessBoard);
}

// Author's Solution

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
