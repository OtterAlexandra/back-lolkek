import { Child } from "../../models/Children.js";
import { jwtKey } from "../../constrants.js";
import jwt from "jsonwebtoken";

export function createChild(app){
    app.get("/createChild", async (req, res) => {
        const child = await Child.create(
            {
                name: req.query.name,
                login: req.query.login,
                password: req.query.password,
            }
        );
        const token = jwt.sign({ userId: child.get("id") }, jwtKey);
          res.send({token})
    });
}