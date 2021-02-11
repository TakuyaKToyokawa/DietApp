const mysql = require("mysql");

var connection  = mysql.createPool({
  connectionLimit : 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.PORT,
});

//Foods Database
function allFoods(callback) {
  const query = `
    SELECT * 
    FROM foods
  `;
  connection.query(query, null, (error, results, fields) => {

    callback(error, results);
  });
}

exports.allFoods = allFoods;

function addFood(food, callback) {
  const query = `
    INSERT INTO foods (foodName, category, calories, carbs, protein, fat)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
 
  const params = [food.category, food.foodName, food.calories, food.calories, food.carbs, food.fat];

  connection.query(query, params, function (error, results) {
    callback(error, results.insertId);
  });
}
exports.addFood = addFood;

function deleteFood(id, callback) {
  const query = `
    DELETE FROM foods
    WHERE id = ?
`;
  const params = [id, callback];
  connection.query(query, params, function (error, result, fields) {
    callback(error, result.insertId);
  });
}
exports.deleteFood = deleteFood;

//Meals Database
function allMeals(callback) {
  const query = `
    SELECT * 
    FROM meals
  `;
  connection.query(query, null, (error, results, fields) => {
    callback(error, results);
  });
}

exports.allMeals = allMeals;

function addMeal(meal, callback) {
  const query = `
    INSERT INTO meals (meal, foodName, category, calories, carbs, protein, fat)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [meal.meal, meal.foodName, meal.category, meal.calories, meal.calories, meal.carbs, meal.fat];
  connection.query(query, params, function (error, result, fields) {
    callback(error, result.insertId);
  });
}
exports.addMeal = addMeal;

function deleteMeal(id, callback) {
  const query = `
    DELETE FROM meals
    WHERE id = ?
`;
  const params = [id, callback];
  connection.query(query, params, function (error, result, fields) {
    callback(error, result.insertId);
  });
}
exports.deleteMeal = deleteMeal;

// UPDATE function
// function completeTask(id, task, callback) {
//   const query = `
//   UPDATE tasks
//   SET completed = ?
//   WHERE id = ?
//   `;
//   const params = [task.completed, id];
//   //3
//   connection.query(query, params, function (error, result, fields) {
//     callback(error, result.insertId);
//   });
// }
// exports.completeTask = completeTask;
