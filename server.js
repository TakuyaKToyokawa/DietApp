const database = require("./database.js");

const express = require("express");

const app = express();

app.use(express.json());

//GET reqeust for foods array
app.get("/api/foods/", (req, res) => {
  const foods = database.allFoods();
  res.send({
    foods: foods,
  });
});

//GET request for diary array
app.get("/api/diary/", (req, res) => {
  const diary = database.allDiary();
  res.send({
    diary,
  });
});

app.post("/api/foods", (req, res) => {
  const food = database.addFood(req.body);
  res.send(food);
});

app.delete("/api/foods/:category", (req, res) => {
  const foodId = parseInt(req.params.id);
  const result = database.deleteFood(foodId);
  res.send(result);
});

app.patch("/api/foods/:category", (req, res) => {
  const foodId = parseInt(req.params.id);
  const data = req.body;
  const result = database.updateFood(foodId, data);
  res.send(result);
});

// // GET
// app.get("/api/foods", (req, res) => {
//   res.send({
//     foods: foods,
//   });
// });

// //POST
// app.post("/api/foods", (req, res) => {
//   const food = req.body;
//   food.id = foods.length + 1; // 1
//   foods.push(food); // 2
//   res.send(food); // 3
// });

// // DELETE
// app.delete("/api/foods/:id", (req, res) => {
//   const foodId = parseInt(req.params.id);
//   const foodIndex = foods.findIndex((food) => food.id === foodId); // 1
//   if (foodIndex !== -1) {
//     // 2
//     foods.splice(foodIndex, 1); // 3
//   }
//   res.send({ id: foodId });
// });

// //PATCH
// app.patch('/api/foods/:id', (req, res) => {
//     const foodId = parseInt(req.params.id)
//     const data = req.body
//     if (data.completed !== undefined) { // 1
//       const food = foods.find(food => food.id === foodId) // 2
//       food.completed = data.completed // 3
//     }
//     res.send({id: foodId, ...data})
//   })

// LISTEN
app.listen(8080, () => {
  console.log("The server is listening on port 8080");
});
