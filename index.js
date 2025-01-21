import express from "express"

import dotenv from "dotenv"

import bodyParser from "body-parser"

dotenv.config({path:"./config.env"})

import { router } from "./routers/router.js"

let port = process.env.port || 3314

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static("./public"))

app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {

    console.log(`Server in ruuning on port :${port} | http://127.0.0.1:${port}`)

})