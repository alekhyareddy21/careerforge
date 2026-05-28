import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

  company: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Applied",
  },

  date: {
    type: String,
  },

}, {
  timestamps: true,
});

const Job = mongoose.model("Job", jobSchema);

export default Job;