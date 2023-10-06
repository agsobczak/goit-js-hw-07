const categories = document.querySelectorAll(".item");

const categoryCount = categories.length;
console.log("Liczba kategorii:", categoryCount);

for (const category of categories) {
  const title = category.querySelector("h2").textContent;

  const itemCount = category.querySelectorAll("li").length;

  console.log(`Kategoria: ${title}, elementów:`, itemCount);
}
