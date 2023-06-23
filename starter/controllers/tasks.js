const express = require("express");
const app = express();
const Task = require("../models/tasks.js");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json({ allTasks });
  } catch (error) {
    console.log(error);
    res.status(500).json("error");
  }
};

const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const oneTask = await Task.findOne({ _id: id });

    if (!oneTask) {
      return res.status(404).json("no such task with id exist");
    }
    res.status(200).json({ oneTask });
  } catch (error) {
    console.log(error);
    res.status(500).json("error");
  }
};

const updateOneTask = async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   const oneTask = await Task.findOne({ _id: id });
  //   if (!oneTask) {
  //     return res.status(500).json("no such task with id");
  //   }
  //   if (req.body.name === null) {
  //     const resu = await oneTask.updateOne({
  //       // name: req.body.name,
  //       completed: req.body.completed,
  //     });
  //   } else {
  //     const resu = await oneTask.updateOne({
  //       name: req.body.name,
  //       completed: req.body.completed,
  //     });
  //   }

  //   res.json("task updated successfully");
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json("error");
  // }

  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    }); // will return the updated value and run validators
    if (!task) {
      return res.status(404).json("error");
    }
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.send("error");
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const oneTask = await Task.findOne({ _id: id });
    if (!oneTask) {
      return res.status(500).json("no such task with id");
    }
    await oneTask.deleteOne({ _id: id });
    res.status(200).json("Task deleted successfully");
  } catch (error) {
    console.log(error);
    res.json("error");
  }
};

const addOneTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json("error");
  }
};
module.exports = {
  getAllTasks,
  getOneTask,
  updateOneTask,
  deleteOneTask,
  addOneTask,
};
