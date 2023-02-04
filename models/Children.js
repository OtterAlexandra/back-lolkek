import { DataTypes } from "sequelize";
import { db } from "./connectToDb.js";

export const Child = db.define(
    "Child",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        name: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: "children",
    }
)