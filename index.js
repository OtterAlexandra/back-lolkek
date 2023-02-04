import express from "express";

import jwt from "jsonwebtoken";
import { jwtKey } from "./constrants.js";
import cors from "cors";
import { personalOffChild } from "./controllers/children/personalOff.js";
import { personalOffStudent } from "./controllers/students/personalOff.js";
import { getStudent } from "./controllers/students/comunityOff.js";
import { getStudents } from "./controllers/students/getStudents.js";
import {createStudent} from "./controllers/students/createStudent.js";
import { createChild } from "./controllers/children/createChild.js";
import { getStudentLogin } from "./controllers/students/getLogin.js";
import { getChildLogin } from "./controllers/children/getChildLogin.js";


const app = express();
const port = 5000;


app.use(cors());

  app.use((req, res, next) => {
    const paths = ["/createChild", "/createStudent", "/getLogin"];
    const token = req.query.token || "";
  
    if (paths.includes(req["_parsedUrl"].pathname)) {
      next();
    } else {
      try {
        const decoded = jwt.verify(token, jwtKey);
        app.set("userId", decoded.id);
        next();
      } catch (e) {
        res.status(403).send({ error: "not authorized" });
      }
    }
  });

personalOffChild(app);
personalOffStudent(app);
getStudent(app);
getStudents(app);
getStudentLogin(app);
createStudent(app);
createChild(app);
getChildLogin(app);
app.listen(port);