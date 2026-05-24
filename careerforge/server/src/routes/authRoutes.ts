import express from "express";
import User from "../models/User";
console.log("Auth Routes Working 🚀");

const router = express.Router();

router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      message: "User registered successfully 🚀",
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});

export default router;