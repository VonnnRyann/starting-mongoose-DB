import chalk from "chalk";
import express from "express";
import mongoose from "mongoose";
import { StudentModel } from "./model/student.js";

const app = express();
app.use(express.json());

app.listen(5000, () => console.log(chalk.redBright.bold("server running")));
mongoose.connect(
  "mongodb+srv://vonnryann:Berlinimelda2020..@cluster0.z7c06fn.mongodb.net/interns?retryWrites=true&w=majority",
  () => console.log(chalk.blueBright.bold("Im connected to DB"))
);

//endpoints
app.get("/", async function (req, res) {
  const students = await StudentModel.find();
  res.json(students);
});

// endpoint (route)

// method: post
// path: '/'
// controller (request, response)
app.post("/", async function (req, res) {
  await StudentModel.create(req.body);
  res.send("<h1>Student Created</h1>");
});
