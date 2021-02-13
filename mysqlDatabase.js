const mysql = require("mysql");

var connection = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-east-03.cleardb.com",
  user: "b16577e562ce88",
  password: "a734d6b3",
  database: "heroku_b1b388468b5f14c",
  port: 3306
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
    INSERT INTO foods (category, foodName, calories, carbs, protein, fat)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  console.log(`${food}`);


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
    INSERT INTO meals (meal, category, foodName, calories, carbs, protein, fat)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

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
