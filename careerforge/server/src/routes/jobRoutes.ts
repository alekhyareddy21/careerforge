import express from "express";
import Job from "../models/Job";

const router = express.Router();


// ================= ADD JOB =================

router.post("/add", async (req, res) => {

  try {

    const { company, role, status, date } = req.body;

    const job = await Job.create({
      company,
      role,
      status,
      date,
    });

    res.status(201).json({
      message: "Job added successfully 🚀",
      job,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// ================= GET JOBS =================

router.get("/", async (req, res) => {

  try {

    const jobs = await Job.find();

    res.status(200).json(jobs);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// ================= UPDATE JOB =================

router.put("/:id", async (req, res) => {

  try {

    const { status } = req.body;

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({
      message: "Job updated successfully 🚀",
      updatedJob,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// ================= DELETE JOB =================

router.delete("/:id", async (req, res) => {

  try {

    await Job.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Job deleted successfully 🚀",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});

export default router;