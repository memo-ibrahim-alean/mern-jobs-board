import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Job from "./models/Job.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Jobs API is running!");
});

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log("Jobs fetched successfully:", jobs);
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/jobs", async (req, res) => {
  console.log("Received job data:", req.body);
  const { title, type, description, location, salary, company } = req.body;
  const newJob = new Job({
    title,
    type,
    description,
    location,
    salary,
    company,
  });
  try {
    const savedJob = await newJob.save();
    console.log("Job saved successfully:", savedJob);
    res.status(201).json(savedJob);
  } catch (error) {
    console.error("Error saving job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
