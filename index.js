function createBoard() {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push(false);
    }
    board.push(row);
  }
  return board;
}

function knightMoves(i_pos, f_pos) {
  for (const position of [...i_pos, ...f_pos]) {
    if (!(position >= 0 && position <= 7)) return null;
  }
  let knightMovesOffset = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  let visited = createBoard();
  let moves = [];
  moves.push({ position: i_pos, path: [i_pos] });
  while (moves.length > 0) {
    let currentMove = moves.shift();
    let [y, x] = currentMove.position;

    if (y == f_pos[0] && x == f_pos[1]) {
      console.log(
        `You have made it in ${
          currentMove.path.length - 1
        } moves! Here's your path: `
      );
      for (const move of currentMove.path) {
        console.log(move);
      }
      return;
    }

    for (const [dy, dx] of knightMovesOffset) {
      let newY = y + dy;
      let newX = x + dx;
      if (
        newY >= 0 &&
        newY <= 7 &&
        newX >= 0 &&
        newY <= 7 &&
        !visited[newY][newX]
      ) {
        moves.push({
          position: [newY, newX],
          path: [...currentMove.path, [newY, newX]],
        });
      }
    }
  }
}

knightMoves([3, 4], [1, 5]);
