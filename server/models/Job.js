import mongoose from "mongoose";

const { Schema } = mongoose;

const jobsSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
  },
  type: {
    type: String,
    required: true,
    enum: ["Full-Time", "Part-Time"],
  },
  description: {
    type: String,
    required: false,
    trim: true,
    maxlength: 500,
  },
  location: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  salary: {
    type: String,
    required: false,
    trim: true,
    enum: ["$60K - $70K", "$70K - $80K", "$90K - $100K", "$100K - $110K"], // بناءً على القيم في jobs.json
  },
  company: {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    description: {
      type: String,
      required: false,
      trim: true,
      maxlength: 500,
    },
    contactEmail: {
      type: String,
      required: false,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    contactPhone: {
      type: String,
      required: false,
      trim: true,
      // match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", jobsSchema);

export default Job;