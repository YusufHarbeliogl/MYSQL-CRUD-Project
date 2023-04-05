const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT
const studentsRoutes = require("./routes/studentsRoute")
const coursesRoutes = require("./routes/coursesRoute")
const classRoutes = require("./routes/classRoute")

app.use(express.urlencoded({extended:true}))
app.use(express.json())



// ROUTES 
app.use("/students",studentsRoutes) //ARDA
app.use("/class",classRoutes) //YUSUF
app.use("/courses",coursesRoutes) //KUTLUHAN




app.listen(port,()=>{
    console.log("Server Started On This Port: "+ port);
})