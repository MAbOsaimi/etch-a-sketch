const container = document.getElementById("container");
makeGrid(16, 16);
function makeGrid(width, height) {
  for (let i = 1; i <= height; i++) {
    const squaresRow = document.createElement("div");
    squaresRow.setAttribute("id", `squares-row-${i}`);
    squaresRow.classList.add("squares-row");
    for (let j = 1; j <= width; j++) {
      const square = document.createElement("div");
      square.setAttribute("id", `square-${j}`);
      square.classList.add("square");
      squaresRow.appendChild(square);
    }
    container.appendChild(squaresRow);
  }
}
