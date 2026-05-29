import express from "express";
import cors from "cors";
console.log("APP UPDATED 999 🚀");

import authRoutes from "./routes/authRoutes";
import jobRoutes from "./routes/jobRoutes";
import resumeRoutes from "./routes/resumeRoutes";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CareerForge API Running 🚀");
});

app.use("/api/auth", authRoutes);

app.use("/api/jobs", jobRoutes);

app.use("/api/resume", resumeRoutes);

app.get("/test123", (req, res) => {
  res.send("TEST WORKING 🚀");
});

export default app;