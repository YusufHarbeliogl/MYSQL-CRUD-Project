const Courses = require("../models").courses

const createCourses = async (req,res)=>{
    try {
    const crtCourses= await Courses.create(req.body)
    if(crtCourses.name){
        res.status(200).json({
            succeded:true,
            message:"Courtses Create Succesfull!"
        })
    }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            err:error.message
        }) 
    }
}

const viewCourses = async (req,res)=>{
    try {
        const viwCourses= await Courses.findAll()
        if(viwCourses){
            res.status(200).json({
                succeded:true,
                name:viwCourses[0].dataValues.name,
                user:viwCourses[0].dataValues.users

            })
        }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            err:error.message
        })
    }
}
const updateCoursesName = async (req,res)=>{
    try {
        const uptCourses = await Courses.findOne({where:{id: req.params.id}})
        if(uptCourses.name){
            let upt = Courses.update({
                name:req.body.name 
            },
            {where: {id: req.params.id}}
            )
            if(upt){
                res.status(200).json({
                    succeded:true,
                    message:"Courtses Update Succesfull!" 
                })
            }
        }
        
    } catch (error) {
        res.status(500).json({
            succeded:false,
            err:error.message
        }) 
    }
}
const updateCorsesUser = async (req,res)=>{
    try {
        const uptCourses = await Courses.findOne({where:{id: req.params.id}})
        if(uptCourses.name){
            let upt = Courses.update({
                users:req.body.user 
            },
            {where: {id: req.params.id}}
            )
            if(upt){
                res.status(200).json({
                    succeded:true,
                    message:"Courtses Update Succesfull!" 
                })
            }
        }
        
    } catch (error) {
        res.status(500).json({
            succeded:false,
            err:error.message
        }) 
    }
}


const deleteCourses= async (req,res)=>{
   try {
    const dltCourse= Courses.destroy({where:{id: req.params.id}})
    if(dltCourse){
        res.status(200).json({
            succeded:true,
            message:"Delete Course Succededfull!"
        })
    }
   } catch (error) {
    res.status(500).json({
        succeded:false,
        err:error.message
    }) 
   }
}



module.exports={
    createCourses,
    viewCourses,
    updateCoursesName,
    updateCorsesUser,
    deleteCourses
}
