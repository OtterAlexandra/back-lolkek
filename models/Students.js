import { DataTypes } from "sequelize";
import { db } from "./connectToDb.js";

export const Student = db.define(
    "Student",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        name: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        faculty: DataTypes.STRING,
        degree: DataTypes.STRING,
        year: DataTypes.INTEGER,
        university: DataTypes.STRING,

        telegram: {
          type: DataTypes.STRING,
          defaultValue: ":c"},
        discord: {
          type: DataTypes.STRING,
          defaultValue: ":c"},
        vk: {
          type: DataTypes.STRING,
          defaultValue: ":c"},
        info: DataTypes.STRING,
    },
    {
      createdAt: false,
      updatedAt: false,
      tableName: "students",
    }
)