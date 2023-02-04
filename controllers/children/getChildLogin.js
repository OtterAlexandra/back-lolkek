import { Child } from "../../models/Children.js";
import { jwtKey } from "../../constrants.js";
import jwt from "jsonwebtoken";


export function getChildLogin(app){
    app.get("/getChildLogin", async (req, res) => {
        const {login, password} = req.query;
        if (!token && !password){
          res.send({error: "where is login or passsword, bitch"})
          return
        }
        const child = await Child.findOne({
            where: {
              login,
              password,
            }
          });
        if (student) {
          const token = jwt.sign({ userId: child.get("id") }, jwtKey);
          res.send({token})
        }
        else {
          res.send({error: "stopapupa"})
        }
    });
}