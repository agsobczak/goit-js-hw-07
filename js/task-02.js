const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsArr = ingredients.map((ingredient) =>
  ingredient.toUpperCase()
);

const ingredientsList = document.querySelector("#ingredients");

for (const ingredient of ingredientsArr) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ingredientsList.appendChild(li);
}
