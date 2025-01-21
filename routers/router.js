import express from "express"

import { getHome, getPost } from "../controllers/controller.js"

let router = express()

router.get("/", getHome)

router.post("/", getPost)

export { router }