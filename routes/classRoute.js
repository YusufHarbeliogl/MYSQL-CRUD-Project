const express = require("express")
const classController = require("../controllers/classController")


const router = express.Router()


router.route("/create").post(classController.createClass)
router.route("/view").post(classController.viewUserClass)
router.route("/delete").post(classController.deleteClass)
router.route("/update").post(classController.updateClass)



module.exports = router