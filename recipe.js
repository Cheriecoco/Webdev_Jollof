// recipe.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleIngredients");
    const ingredientsList = document.getElementById("ingredientsList");
  
    toggleButton.addEventListener("click", () => {
      if (ingredientsList.style.display === "" || ingredientsList.style.display === "none") {
        ingredientsList.style.display = "block";
        toggleButton.textContent = "Hide Ingredients";
      } else {
        ingredientsList.style.display = "none";
        toggleButton.textContent = "Show Ingredients";
      }
    });
  });
  
