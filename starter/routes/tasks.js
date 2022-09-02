const express = require("express");
const {getAlltasks,createTask,updateTask,deleteTask,getTask} = require("../controller/tasks")
const router = express.Router();

router.route("/").get(getAlltasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports=router;