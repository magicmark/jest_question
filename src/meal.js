import Food from "./food";

function formatMeal() {
  const { carbs, veg, type } = Food;

  if (type === "dinner") {
    return `Good evening. Dinner is ${veg} and ${carbs}. Yum!`;
  } else if (type === "breakfast") {
    return `Good morning. Breakfast is ${veg} and ${carbs}. Yum!`;
  } else {
    return "No soup for you!";
  }
}

export default function getMeal() {
  const meal = formatMeal();

  return meal;
}
