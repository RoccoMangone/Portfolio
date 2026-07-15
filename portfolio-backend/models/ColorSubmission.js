import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

//Creates a JavaScript 'description' of the table created in MySQL using the shell
export const ColorSubmission = sequelize.define("ColorSubmission", {
    //Sequelize automatically creates an auto incrementing primary key, so there is no need to explicitly define one
    hexCode: {
    type: DataTypes.STRING(7),
    allowNull: false,
    field: "hex_code", // maps hexCode (JS) to hex_code (SQL column); basically says "In the actual MySQL db, this field is called hex_code, even though Javascript will call it hexCode"
  },
}, 
//The following section contains setings about the table itself
{
  tableName: "color_submissions",
  timestamps: false, // we don't need createdAt/updatedAt columns for this
});