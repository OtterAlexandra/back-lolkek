import { Student } from "../../models/Students.js";

export function getStudents(app){
    app.get("/students", async (req, res) => {
        const students = await Student.findAll();
        res.send(students);
    });
}