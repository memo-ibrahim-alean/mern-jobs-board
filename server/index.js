import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Job from "./models/Job.js";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


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
    const limit = parseInt(req.query._limit);
    let jobs = await Job.find();

    if (!isNaN(limit)) {
      jobs = jobs.slice(0, limit);
    }

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/jobs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    console.log("Job fetched successfully:", job);
    res.status(200).json(job);
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/jobs", async (req, res) => {
  // console.log("POST request received at /jobs");
  // console.log("Received job data:", req.body);
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    // console.log("Job saved successfully:", savedJob);
    res.status(201).json(savedJob);
  } catch (error) {
    // console.error("Error saving job:", error);
    res.status(400).json({ message: "Error creating job", error });
  }
});

app.put("/jobs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    // console.log("Job updated successfully:", updatedJob);
    res.status(200).json(updatedJob);
  } catch (error) {
    // console.error("Error updating job:", error);
    res.status(400).json({ message: "Error updating job", error });
  }
});

app.delete("/jobs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    // console.log("Job deleted successfully:", deletedJob);
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    // console.error("Error deleting job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
