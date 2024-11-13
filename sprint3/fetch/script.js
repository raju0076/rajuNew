async function getCategoriesData() {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error("Something went wrong:", error.message);
        document.getElementById("meal-grid").innerText = "Something went wrong.";
    }
}

async function getIngredientData() {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error("Something went wrong:", error.message);
        document.getElementById("meal-grid").innerText = "Something went wrong.";
    }
}

function displayMeals(meals) {
    const mealGrid = document.getElementById("meal-grid");
    mealGrid.innerHTML = ""; // Clear previous data
    meals.forEach(meal => {
        const mealCard = document.createElement("div");
        mealCard.classList.add("meal-card");
        
        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <h3>${meal.strMeal}</h3>
            <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a>
        `;
        
        mealGrid.appendChild(mealCard);
    });
}

document.getElementById("get-category-data").addEventListener("click", getCategoriesData);
document.getElementById("get-ingredient-data").addEventListener("click", getIngredientData);
