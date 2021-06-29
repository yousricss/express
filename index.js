const express = require('express')
const path = require('path')
const app = express()
const workingTime = require('./middleware')


app.use(express.static(path.join(__dirname, "homepage")))

app.use(express.static(path.join(__dirname, "contact")))

app.use(express.static(path.join(__dirname, "services")))





const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>console.log(`server is running on PORT ${PORT}`));