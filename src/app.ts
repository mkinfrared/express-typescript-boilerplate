import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.status(200).send({ message: "SUCCESS" });
});

export default app;
