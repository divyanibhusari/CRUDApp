import express from "express"

import { getHome, getPost,deleteStudent, editStudent } from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.post("/", getPost)

router.post("/student/delete/:id",deleteStudent)

router.post("/student/edit/:id",editStudent)


export { router }