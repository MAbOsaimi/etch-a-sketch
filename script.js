const container = document.getElementById("container");
const makeGridBtn = document.getElementById("make-grid-btn");

makeGrid(16, 16);

makeGridBtn.addEventListener("click", () => {
  let width = parseInt(prompt("Enter width"));
  width = width > 100 ? 100 : width;
  width = width <= 0 || !width ? 16 : width;
  let height = parseInt(prompt("Enter height:"));
  height = height > 100 ? 100 : height;
  height = height <= 0 || !height ? 16 : height;
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
      const red = Math.ceil(Math.random() * 255);
      const blue = Math.ceil(Math.random() * 255);
      const green = Math.ceil(Math.random() * 255);
      square.style.setProperty(
        "--square-background-color",
        `rgb(${red}, ${blue}, ${green})`,
      );
      square.style.setProperty("--square-brightness", "110%");
      squaresRow.appendChild(square);
    }

    container.appendChild(squaresRow);
  }
  const squares = document.querySelectorAll(".square");

  squares.forEach((currentValue) => {
    currentValue.addEventListener("mouseover", () => {
      const brightness =
        parseInt(currentValue.style.getPropertyValue("--square-brightness")) -
          10 <
        0
          ? 0
          : parseInt(
              currentValue.style.getPropertyValue("--square-brightness"),
            ) - 10;
      currentValue.style.setProperty("--square-brightness", `${brightness}%`);
      currentValue.style.backgroundColor = currentValue.style.getPropertyValue(
        "--square-background-color",
      );
    });
  });
}
