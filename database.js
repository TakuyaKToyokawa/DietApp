//Fake Database

let foods = [
  {
    category: "dairy",
    name: "Milk",
    calories: 500,
    carbs: 223,
    protein: 200,
  },

  {
    category: "fruit",
    name: "Strawberry",
    calories: 500,
    carbs: 223,
    protein: 200,
  },

  {
    category: "meat",
    name: "Egg",
    calories: 500,
    carbs: 223,
    protein: 200,
  },

  {
    category: "vegetable",
    name: "Celery",
    calories: 500,
    carbs: 223,
    protein: 200,
  },

  {
    category: "grain",
    name: "Bread",
    calories: 500,
    carbs: 223,
    protein: 200,
  },

  {
    category: "sweet",
    name: "Pancake",
    calories: 500,
    carbs: 223,
    protein: 200,
  },
];

let diary = [
  {
    category: "sweet",
    name: "Pancake",
    calories: 500,
    carbs: 223,
    protein: 200,
  },
];

// Return all food items from all categories of foods
function allFoods() {
  return foods;
}
exports.allFoods = allFoods;

// Return all diary items from all categories of foods
function allDiary() {
  return diary;
}
exports.allDiary = allDiary;

// Add food to array and push it to diary list object
function addFood(food) {
  diary.category = foods.category;
  diary.push(food);
  return food;
}

// Delete food from diary list
function updateFood(foodId, data) {
  if (data.completed !== undefined) {
    const food = foods.find((food) => food.id === foodId);
    food.completed = data.completed;
  }
  return { id: foodId, ...data };
}

exports.addFood = addFood;

//**Extra functions that may come in handy later (Delete and Update foods inside database) */

// Delete food from database
// function deleteFood(foodId) {
//   const foodIndex = foods.findIndex((food) => food.id === foodId);
//   if (foodIndex !== -1) {
//     foods.splice(foodIndex, 1);
//   }
//   return { id: foodId };
// }

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
