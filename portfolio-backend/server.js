import express from "express";
import cors from "cors";
import { sequelize } from "./db.js";
import { ColorSubmission } from "./models/ColorSubmission.js";
import { averageHexColors } from "./colorMath.js";

const app = express();
app.use(cors());
app.use(express.json()); // lets Express read JSON sent in a request body

// Route 1: save a new color submission
// app.post(path, handler)' registers the route "When a POST request arrives at /api/colors, run this function"
//This function is marked async because it needs to await a database operation partway through 
//req, res — every route handler receives these two objects: req (the incoming request — has the data sent to you) and res (the response — how you send data back).
app.post("/api/colors", async (req, res) => { 

  //Destructures the request; shorthand for   const hexCode = req.body.hexCode;
  const { hexCode } = req.body;


//Validates the data to ensure this is a proper hexcoode

//  Breaking down the regex for /^#[0-9a-fA-F]{6}$/:
//  ^ — start of the string
//  # — a literal # character
//  [0-9a-fA-F] — any single character that's a digit 0–9, or a letter a–f (lowercase or uppercase) — these are exactly the valid hexadecimal digits
//  {6} — exactly 6 of the previous pattern in a row
//  $ — end of the string
// Altogether: "a # followed by exactly 6 hex digits, and nothing else." .test(hexCode) runs that check and returns true or false
  const isValidHex = /^#[0-9a-fA-F]{6}$/.test(hexCode);

  if (!isValidHex) {
    return res.status(400).json({ error: "Invalid hex code" }); //Status code 400 means bad data
  }

  //.create() sends an INSERT command to MySQL; This is the line that actually creates the data
  //Since it takes real time, a Promise is created, using await pauses the function to avoid freezing until the db confirms the row has been saved, then puts it into the result 'submission'
  const submission = await ColorSubmission.create({ hexCode });

  //Returns the status code that the data was created
  res.status(201).json(submission);
});

// Route 2: get the average of every color submitted so far
app.get("/api/colors/average", async (req, res) => {

  //.findAll is essentially SELECT * FROM color_submissions
  const allSubmissions = await ColorSubmission.findAll();

  //the allSubmissions variable goes from being an arrray of full rows of data to an array of only hex code strings
  const hexCodes = allSubmissions.map((s) => s.hexCode);

  //Calls the averageColor function that was imported from colorMath.js
  const average = averageHexColors(hexCodes);

  //Returns a json object containing the average of all colors and how many colors were used to calculate the average
  res.json({ averageColor: average, totalSubmissions: hexCodes.length });
});



// Sync the model with the database, then start the server; Makes sure structure of ColorSubmissions.js matches the database made in MySQL
sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Server running on http://localhost:3000"));
});