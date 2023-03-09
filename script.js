const pieces = [
  { name: "rook", symbol: "♖", color: "white" },
  { name: "knight", symbol: "♘", color: "white" },
  { name: "bishop", symbol: "♗", color: "white" },
  { name: "queen", symbol: "♕", color: "white" },
  { name: "king", symbol: "♔", color: "white" },
  { name: "bishop", symbol: "♗", color: "white" },
  { name: "knight", symbol: "♘", color: "white" },
  { name: "rook", symbol: "♖", color: "white" },
  { name: "pawn", symbol: "♙", color: "white" },
  { name: "pawn", symbol: "♙", color: "white" },
  { name: "pawn", symbol: "♙", color: "white" },
  { name: "pawn", symbol: "♙", color: "white" },
  { name: "pawn", symbol: "♙", color: "white" },
  { name: "pawn", symbol: "♙", color: "white" },
  { name: "pawn", symbol: "♙", color: "white" },
  { name: "pawn", symbol: "♙", color: "white" },
  { name: "rook", symbol: "♜", color: "black" },
  { name: "knight", symbol: "♞", color: "black" },
  { name: "bishop", symbol: "♝", color: "black" },
  { name: "queen", symbol: "♛", color: "black" },
  { name: "king", symbol: "♚", color: "black" },
  { name: "bishop", symbol: "♝", color: "black" },
  { name: "knight", symbol: "♞", color: "black" },
  { name: "rook", symbol: "♜", color: "black" },
  { name: "pawn", symbol: "♟", color: "black" },
  { name: "pawn", symbol: "♟", color: "black" },
  { name: "pawn", symbol: "♟", color: "black" },
  { name: "pawn", symbol: "♟", color: "black" },
  { name: "pawn", symbol: "♟", color: "black" },
  { name: "pawn", symbol: "♟", color: "black" },
  { name: "pawn", symbol: "♟", color: "black" },
  { name: "pawn", symbol: "♟", color: "black" },
];
const board = document.getElementById("board");

for (let i = 0; i < 64; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  if ((i + Math.floor(i / 8)) % 2 === 0) {
    square.classList.add("light");
  } else {
    square.classList.add("dark");
  }
  board.appendChild(square);
}
for (let i = 0; i < pieces.length; i++) {
  const piece = document.createElement("div");
  piece.classList.add("piece");
  piece.innerHTML = pieces[i].symbol;
  piece.setAttribute("draggable", "true");
  piece.dataset.color = pieces[i].color;
  piece.dataset.name = pieces[i].name;
  const square = document.querySelector(`.square[data-index="${i}"]`);
  square.appendChild(piece);
}
let draggedPiece = null;

document.addEventListener("dragstart", function (event) {
  const target = event.target;
  if (target.classList.contains("piece")) {
    draggedPiece = target;
  }
});

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  const target = event.target;
  if (target.classList.contains("square")) {
    const color = draggedPiece.dataset.color;
    const name = draggedPiece.dataset.name;
    const fromIndex = parseInt(draggedPiece.parentNode.dataset.index);
    const toIndex = parseInt(target.dataset.index);
    const legalMove = isLegalMove(color, name, fromIndex, toIndex);
    if (legalMove) {
      const capturedPiece = target.querySelector(".piece");
      if (capturedPiece !== null) {
        capturedPiece.parentNode.removeChild(capturedPiece);
      }
      target.appendChild(draggedPiece);
    }
  }
  draggedPiece = null;
});
function isLegalMove(color, name, fromIndex, toIndex) {
  // Implement game logic here
  return true; // Default to allowing any move
}
