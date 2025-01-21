import mongoose from "mongoose";

let StudentSchema = new mongoose.Schema({
    name: "String",
    phone: "String",
    email: "String",
    dob: "String",
    address: "String",
    entrance_marks: "Number",
    course_instrested:"String",
    stream:"String",
    education:"String",
    timeStamp: "String",
    intrested: "Boolean",
    admission: "Boolean",
    admissionDate: "String",
    entrance_percentages: "Number"


})

// pre & post

StudentSchema.pre("save",function(){

    this.timeStamp = new Date().toLocaleTimeString() + " | " + new Date().toLocaleDateString()
    this.intrested = null
    this.admission = false
    this.admissionDate = null
    this.entrance_percentages = Number(((this.entrance_marks / 300) * 100).toFixed(2))

})

let studentModel = new mongoose.model("students", StudentSchema)

export { studentModel }