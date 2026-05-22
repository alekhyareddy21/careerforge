import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ message: 'Register Route' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login Route' });
});

export default router;
