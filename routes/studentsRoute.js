const express = require("express")
const studentsController = require("../controllers/studentsController")
const router = express.Router()

router.route("/").get(studentsController.viewUser)
router.route("/create").post(studentsController.createStudent)
router.route("/update/:id").put(studentsController.updateStudent)
router.route("/delete/:id").delete(studentsController.deleteStudent)


module.exports = router



