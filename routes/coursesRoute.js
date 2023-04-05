const express = require("express")
const coursesController = require("../controllers/coursesController")
const router = express.Router()

router.route("/").get(coursesController.viewCourses)
router.route("/create").post(coursesController.createCourses)
router.route("/update/name/:id").post(coursesController.updateCoursesName)
router.route("/update/user/:id").post(coursesController.updateCorsesUser)
router.route("/delete/:id").post(coursesController.deleteCourses)


module.exports = router