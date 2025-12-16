const express = require("express");
const Task = require("../models/taskSchema");

const router = express.Router();

// Post
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ error: "Task is required" });
    }

    const task = await Task.create({ title: title.trim() });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find() ;
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;
