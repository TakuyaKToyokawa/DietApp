const database = require("./mysqlDatabase");

const express = require("express");

const app = express();

app.use("/", function (req, res, next) {
  //var allowedOrigins = ['http://localhost:3000'];
  var origin = req.headers.origin;
  // if(allowedOrigins.indexOf(origin) > -1){
  //      res.setHeader('Access-Control-Allow-Origin', origin);
  // }
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  express.json();
  next();
});

//Food API
app.get("/api/foods", (req, res) => {
  database.allFoods((error, foods) => {
    if (error) {
      res.send({ error });
      return;
    }
    res.send({ foods });
  });
});

app.post("/api/foods", (req, res) => {
  const food = req.body;
  console.log(req.body);
  database.addFood(food, (error, foodId) => {
    if (error) {
      res.send({ error });
      return;
    }
    food.id = foodId;
    res.send({ food });
  });
});

app.delete("/api/foods/:id", (req, res) => {
  const id = req.params.id;
  database.deleteFood(id, (error, foodId) => {
    if (error) {
      res.send({ error });
      return;
    }
    res.send({ id });
  });
});

//Meal API
app.get("/api/meals", (req, res) => {
  console.log("req.body:", req.body);
  database.allMeals((error, meals) => {
    if (error) {
      res.send({ error });
      return;
    }
    res.send({ meals });
  });
});

app.post("/api/meals", (req, res) => {
  const meal = req.body;
  database.addMeal(meal, (error, mealId) => {
    if (error) {
      res.send({ error });
      return;
    }
    meal.id = mealId;
    res.send({ meal });
  });
});

app.delete("/api/meals/:id", (req, res) => {
  const id = req.params.id;
  database.deleteMeal(id, (error, mealId) => {
    if (error) {
      res.send({ error });
      return;
    }
    res.send({ id });
  });
});

// PATCH Function, in case of need.
// app.patch("/api/foods/:id", (req, res) => {
//   const id = req.params.id;
//   const food = req.body;
//   console.log(food, "ID:"+ id)
//   database.completeTask(id, food, (error) => {
//     if (error) {
//       res.send({error})
//       return
//     }
//     res.send({food})
//   })
// });

//LISTEN
var PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.ROOT_URL, function () {
  console.log(`Listening on Port ${PORT} ${process.env.ROOT_URL}`);
});
