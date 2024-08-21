const express = require("express")
require("dotenv").config()
const connection = require("./src/db/connect")
const PORT = process.env.PORT
const taskRoute = require("./src/routes/taskRoute")
const app = express()

app.use(express.json())
app.use("/", taskRoute)
app.listen(PORT, () => {
    try {
        console.log(`Server is Running on PORT ${PORT}`);
        
    } catch (error) {
        console.log(error);
        
    }
})