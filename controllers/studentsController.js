const Students = require("../models").students

const createStudent = async (req,res)=>{
    try {
        console.log(req.body);
        const student = await  Students.create(req.body)
        if(student.name){
            res.status(200).json({
                succeded:true,
                message: "Student Create Succesfull!!"
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            err: error.message
        })
    }
}


const viewUser = async (req,res)=>{
    try {
        const student  = await Students.findAll()
        console.log(student[0].dataValues.name);
        if(student){
            res.status(200).json({
                name: student[0].dataValues.name,
                age: student[0].dataValues.age,
                class: student[0].dataValues.class,
                courses: student[0].dataValues.taken_courses
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            err: error.message
        })
    }
}


module.exports = {
    createStudent,
    viewUser
}