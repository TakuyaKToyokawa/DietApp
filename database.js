//Fake Database

let foods = [
  {
    category: "dairy",
    name: "Milk",
    calories: 100,
    carbs: 123,
    protein: 200,
    fat: 10
  },

  {
    category: "fruit",
    name: "Strawberry",
    calories: 400,
    carbs: 223,
    protein: 200,
    fat: 10
  },

  {
    category: "meat",
    name: "Egg",
    calories: 100,
    carbs: 123,
    protein: 200,
    fat: 10
  },

  {
    category: "vegetable",
    name: "Celery",
    calories: 500,
    carbs: 223,
    protein: 200,
    fat: 10
  },

  {
    category: "grain",
    name: "Bread",
    calories: 500,
    carbs: 223,
    protein: 200,
    fat: 10
  },

  {
    category: "sweet",
    name: "Pancake",
    calories: 500,
    carbs: 223,
    protein: 200,
    fat: 10
  },
];

let meals = [
  {
    id: 1,
    category: "sweet",
    name: "Pancake",
    calories: 500,
    carbs: 223,
    protein: 200,
    fat: 10,
    meal: "breakfast",
  },
];

// Return all food items from all categories of foods
function allFoods() {
  return foods;
}
exports.allFoods = allFoods;

// Return all meal items from all categories of foods
function allDiary() {
  return meals;
}
exports.allDiary = allDiary;

// Add food to array and push it to meal list object
function addFood(meal) {
  meal.id = meals.length + 1;
  meal.category = meals.category;
  meals.push(meal);
  return meal;
}

exports.addFood = addFood;

// Delete food from meal list
function deleteFood(mealsId) {
  const mealsIndex = meals.findIndex((meals) => meals.id === mealsId);
  if (mealsIndex !== -1) {
    meals.splice(mealsIndex, 1);
  }
  return { id: mealsId };
}

exports.deleteFood = deleteFood;

//**Extra functions that may come in handy later (Delete and Update foods inside database) */

// Create food and push it food object as a new entry
// function createFood(food) {
//   food.id = foods.length + 1;
//   foods.push(food);
//   return food;
// }

// function updateFood(foodId, data) {
//   if (data.completed !== undefined) {
//     const food = foods.find((food) => food.id === foodId);
//     food.completed = data.completed;
//   }
//   return { id: foodId, ...data };
// }
