import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("listagem de usuários");

  response.json(["Stefany", "Babi", "Henrique", "Cleide"]);
});

app.listen(3333);
