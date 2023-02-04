import { Student } from "../../models/Students.js";
import { jwtKey } from "../../constrants.js";
import jwt from "jsonwebtoken";


export function getStudentLogin(app){
    app.get("/getLogin", async (req, res) => {
        const {login, password} = req.query;
        if (!token && !password){
          res.send({error: "where is login or passsword, bitch"})
          return
        }
        const student = await Student.findOne({
            where: {
              login,
              password,
            }
          });
        if (student) {
          const token = jwt.sign({ userId: student.get("id") }, jwtKey);
          res.send({token})
        }
        else {
          res.send({error: "stopapupa"})
        }
    });
}