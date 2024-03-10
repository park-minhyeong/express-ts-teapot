import express, { Express } from "express";
import dotenv from "dotenv";
import usersRouter from "./users/route.js";

dotenv.config();
const app: Express = express();
const { PORT: port } = process.env;

app.get("/", (_, res) => {
  res.sendStatus(418);
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
