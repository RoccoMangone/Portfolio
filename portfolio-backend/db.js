import { Sequelize } from "sequelize";

//Allows for simpler database calls instead of typing out full SQL
export const sequelize = new Sequelize(
    'portfolio_colors', //database name
    "root", //MySql username
    "password", //MySQL password (NEVER HARDCODE THE PASSWORD INTO THIS FILE)
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);