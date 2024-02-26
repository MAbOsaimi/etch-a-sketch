const container = document.getElementById("container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.setAttribute("id", `square-x${i}-y${j}`);
    square.classList.add("square");
    container.appendChild(square);
  }
}
