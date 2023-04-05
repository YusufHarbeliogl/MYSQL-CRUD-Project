const Students = require("../models").students

const createStudent = async (req,res)=>{
    try {
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
            message: error.message
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
            message: error.message
        })
    }
}

const updateStudent = async (req,res)=>{
    try {
        let student = await Students.findOne({where:{id: req.params.id}})
        if(student.name){
            let update = await Students.update(
                {
                    name: req.body.name,
                    age: req.body.age,
                    class: req.body.class,
                    taken_courses: req.body.courses,
                },
                {where: {id: req.params.id}}
            )
            if(update){
                res.status(200).json({
                    succeded: true,
                    message: "Student Updated!!!",
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            message: error.message
        })
    }
}

const deleteStudent = async (req,res)=>{
    try {
        const deleteStudent = Students.destroy({where:{id: req.params.id}}) 
        if(deleteStudent){
            res.status(200).json({
                succeded: true, 
                message: "Student Deleted Succesfully!!"
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            message: error.message 
        })
    }
}

module.exports = {
    createStudent,
    viewUser,
    updateStudent,
    deleteStudent
}