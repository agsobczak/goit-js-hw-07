function createBoxes(amount) {
  const boxes = Array(amount).fill(null);

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = "30px";
    box.style.height = 30 + 10 * i + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxes[i] = box;
  }

  document.querySelector("#boxes").append(...boxes);
}
