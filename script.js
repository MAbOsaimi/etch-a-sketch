const container = document.getElementById("container");
const makeGridBtn = document.getElementById("make-grid-btn");

makeGrid(16, 16);

makeGridBtn.addEventListener("click", () => {
  let width = parseInt(prompt("Enter width"));
  width = width > 100 ? 100 : width;
  let height = parseInt(prompt("Enter height:"));
  height = height > 100 ? 100 : height;
  container.replaceChildren();
  makeGrid(width, height);
});

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
