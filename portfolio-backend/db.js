import { Sequelize } from "sequelize";

//Allows for simpler database calls instead of typing out full SQL
export const sequelize = new Sequelize(
    process.env.DB_NAME, //database name
    process.env.DB_USER, //MySql username
    process.env.DB_PASSWORD, //MySQL password (NEVER HARDCODE THE PASSWORD INTO THIS FILE)
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);