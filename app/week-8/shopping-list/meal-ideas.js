"use client";

import { useEffect, useState } from "react";


async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);


  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };


  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h1>Meal Ideas for {ingredient}</h1>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <h2>{meal.strMeal}</h2>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

