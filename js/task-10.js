function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = i * 10 + 30 + "px";
    box.style.height = i * 10 + 30 + "px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.top = i * 10 + "px";
    boxes.push(box);
  }
  document.querySelector("#boxes").append(...boxes);
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
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
