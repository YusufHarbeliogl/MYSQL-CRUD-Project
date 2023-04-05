const express = require("express")
const studentsController = require("../controllers/studentsController")
const router = express.Router()

router.route("/").get(studentsController.viewUser)
router.route("/create").post(studentsController.createStudent)


module.exports = router



