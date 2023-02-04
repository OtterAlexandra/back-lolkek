import { Student } from "../../models/Students.js";
import { jwtKey } from "../../constrants.js";
import jwt from "jsonwebtoken";

export function createStudent(app){
    app.get("/createStudent", async (req, res) => {
        const student = await Student.create(
            {
                name: req.query.name,
                login: req.query.login,
                password: req.query.password,
                email: req.query.email,
                faculty: req.query.faculty,
                degree: req.query.degree,
                year: req.query.degree,
                university: req.query.university,
                telegram: req.query.telegram,
                discord: req.query.discord,
                vk: req.query.vk,
                info: req.query.info,
            }
        );
        res.send(student);
    });
}