import { Student } from "../../models/Students.js";

export function personalOffStudent(app) {
    app.get("/personalOffStudent", async (req, res) => {
        const {id} = req.query;
        const student = await Student.findOne({
          where: {
            id,
          }
        });
        res.send({student});
    });
}