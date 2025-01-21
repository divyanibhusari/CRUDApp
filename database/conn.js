import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config({path:"./config.env"})

async function conn() {

    try{

        await mongoose.connect(process.env.mongodbstring)

        console.log("Connect with database was successful !")

    }catch(err){

        console.log("unable to connet with database !")

        console.log(err)

    }

}

conn()