function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.top = i * 10 + "px";
    boxes.push(box);
  }

  appendBoxesToContainer(boxes, document.querySelector("#boxes"));
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
}

function increaseBoxSize(factor) {
  const boxes = document.querySelectorAll("#boxes div");
  for (const box of boxes) {
    increaseBoxSize(box, factor);
  }
}

const controls = document.querySelector("#controls");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");

createButton.addEventListener("click", () => {
  const amount = Number(controls.querySelector("input").value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

const increaseBoxSizeButton = document.createElement("button");
increaseBoxSizeButton.textContent = "Increase box size";
increaseBoxSizeButton.addEventListener("click", () => {
  increaseBoxSize(1.2);
});

controls.appendChild(increaseBoxSizeButton);
