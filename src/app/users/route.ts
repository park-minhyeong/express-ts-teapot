import express from "express";

const usersRouter = express.Router();
usersRouter.get("/", async (_, res) => {
  res.status(200).json({ message: "Hello World" });
});

export default usersRouter;
