const express = require("express");
const app = express();

const router = express.Router();

const {
  getAllTasks,
  getOneTask,
  updateOneTask,
  deleteOneTask,
  addOneTask,
} = require("../controllers/tasks.js");

router.route("/").get(getAllTasks).post(addOneTask);
router.route("/:id").patch(updateOneTask).delete(deleteOneTask).get(getOneTask);

module.exports = router;
