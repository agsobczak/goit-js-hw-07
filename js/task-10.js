function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = Array(amount).fill(null);

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = "30px";
    box.style.height = 30 + 10 * i + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxes[i] = box;
  }

  document.querySelector("#boxes").appendChild(...boxes);
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
}
document
  .querySelector("#controls button[data-create]")
  .addEventListener("click", () => {
    const amount = document.querySelector("#controls input").value;
    createBoxes(amount);
  });

document
  .querySelector("#controls button[data-destroy]")
  .addEventListener("click", destroyBoxes);
