
import "../database/conn.js"
import { studentModel } from "../models/StudentSchema.js"


let statusMessage = false

let setStatusMessage = (message) => {
    statusMessage = message
}

let getHome = async (req, res) => {

    try {

        let data = await fetchStudentsData()

        res.status(200).render("index", { message: statusMessage, data })

    } catch (err) {

        console.log("error while loading the data / fetch data error :", err)

        res.status(400).render("index", { message: "error while loading the data / fetch data error ", data: false })
    }




}


async function fetchStudentsData() {
    try {
        let result = await studentModel.find()
        if (result.length != 0) {
            return result
        } else {
            return false
        }
    } catch (err) {
        console.log("unable to fetch students data :", err)
        return false
    }
}


let getPost = async (req, res) => {
    // console.log("post home route")

    let data = req.body



    try {

        // use studentModel to insert the data into the students collection
        // first create a new model then use save method

        let { name, phone, email, dob, address, education, stream, course_instrested, entrance_marks } = data

        // check if any field is missing 

        if (!name || !phone || !email || !dob || !address || !education || !stream || !course_instrested || !entrance_marks) {
            console.log("not a valid data i.e. a field be missing !")
            setStatusMessage("not a valid data i.e. a field might be missing !")
            res.status(400).redirect("/")
        } else {
            // check that there should be no repeat email and phone

            let checkDuplicate = await studentModel.findOne({ $or: [{ email: email }, { phone: phone }] })

            if (!checkDuplicate) {

                let studentEntry = new studentModel(data)

                await studentEntry.save()

                setStatusMessage(false)

                res.status(202).redirect("/")
            } else {
                console.log("tried to make a duplicate entry !")
                console.log(checkDuplicate)
                setStatusMessage("duplicate entrt please change email / phone !")
                res.status(400).redirect("/")
            }
        }


    } catch (err) {

        console.log("unable to post the student entry data")
        console.log(err)
        setStatusMessage("error while saving the data")
        res.status(400).redirect("/")
    }

}

export { getHome, getPost }