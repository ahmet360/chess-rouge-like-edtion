const pieces = [
  { name: "rook", color: "white", symbol: "&#9814;" },
  { name: "knight", color: "white", symbol: "&#9816;" },
  { name: "bishop", color: "white", symbol: "&#9815;" },
  { name: "queen", color: "white", symbol: "&#9813;" },
  { name: "king", color: "white", symbol: "&#9812;" },
  { name: "bishop", color: "white", symbol: "&#9815;" },
  { name: "knight", color: "white", symbol: "&#9816;" },
  { name: "rook", color: "white", symbol: "&#9814;" },
  { name: "pawn", color: "white", symbol: "&#9817;" },
  { name: "pawn", color: "white", symbol: "&#9817;" },
  { name: "pawn", color: "white", symbol: "&#9817;" },
  { name: "pawn", color: "white", symbol: "&#9817;" },
  { name: "pawn", color: "white", symbol: "&#9817;" },
  { name: "pawn", color: "white", symbol: "&#9817;" },
  { name: "pawn", color: "white", symbol: "&#9817;" },
  { name: "pawn", color: "white", symbol: "&#9817;" },
  { name: "rook", color: "black", symbol: "&#9820;" },
  { name: "knight", color: "black", symbol: "&#9822;" },
  { name: "bishop", color: "black", symbol: "&#9821;" },
  { name: "queen", color: "black", symbol: "&#9819;" },
  { name: "king", color: "black", symbol: "&#9818;" },
  { name: "bishop", color: "black", symbol: "&#9821;" },
  { name: "knight", color: "black", symbol: "&#9822;" },
  { name: "rook", color: "black", symbol: "&#9820;" },
  { name: "pawn", color: "black", symbol: "&#9823;" },
  { name: "pawn", color: "black", symbol: "&#9823;" },
  { name: "pawn", color: "black", symbol: "&#9823;" },
  { name: "pawn", color: "black", symbol: "&#9823;" },
  { name: "pawn", color: "black", symbol: "&#9823;" },
  { name: "pawn", color: "black", symbol: "&#9823;" },
  { name: "pawn", color: "black", symbol: "&#9823;" },
  { name: "pawn", color: "black", symbol: "&#9823;" },
];
// Define the chess board
const board = document.getElementById("board");

// Render the chess board
for (let i = 0; i < 64; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  if ((i + Math.floor(i / 8)) % 2 === 0) {
    square.classList.add("light");
  } else {
    square.classList.add("dark");
  }
  square.dataset.index = i;
  board.appendChild(square);
}

// Implement drag and drop functionality
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

// Implement game logic
function isLegalMove(color, name, fromIndex, toIndex) {
  // Implement game logic here
  return true; // Default to allowing any move
}
