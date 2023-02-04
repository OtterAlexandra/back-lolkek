import { Child } from "../../models/Children.js";

export function personalOffChild(app) {
    app.get("/personalOffChild", async (req, res) => {
        const {id} = req.query;
        const child = await Child.findOne({
          where: {
            id,
          }
        });
        res.send({child});
    });
}