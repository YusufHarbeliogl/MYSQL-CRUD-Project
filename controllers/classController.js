const Class = require("../models").classes
const createClass = async (req, res) => {
    try {
        console.log(req.body);
        const classs = await Class.create(req.body)
        if (classs) {
            res.status(200).json({
                succeded: true,
                message: "Succesfully"
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded: false,
            err: error.message
        })
    }
}
const viewUserClass = async (req, res) => {
    try {
        const student = await Class.findAll()
        if (student) {
            res.status(200).json({
                name: student[0].dataValues.name,
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded: false,
            err: error.message
        })
    }
}
const updateClass = async (req, res) => {
    try {
        const updateClass = await Class.update(
            {name: req.body.name},
            { where: { id: req.body.id } }
        )
        if(updateClass){
            res.status(200).json({
                succeded:true,
                message: "User Updated!!"
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded: false,
            err: error.message
        })
    }
}
const deleteClass = async (req, res) => {
    try {
        const deleteClass = await Class.destroy({ where: { id: req.body.id} })
        if(deleteClass){
            res.status(200).json({
                succeded:true,
                message: "User Deleted!!"
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded: false,
            err: error.message
        })
    }
}
module.exports = {
    createClass,
    viewUserClass,
    deleteClass,
    updateClass
}