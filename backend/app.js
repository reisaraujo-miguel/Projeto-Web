import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import User from "./models/user-model.js";
import products from "./routes/product-route.js";
import users from "./routes/user-route.js";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Creating an instance of express to setup the server

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();
const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri);

app.use((req, res, next) => {
  const currDate = new Date();
  console.log(currDate);
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  next();
});

app.use("/products", products);
app.use("/users", users);

function generateToken() {
  const tokenLength = 32; // Adjust the desired token length
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
}

// Login API endpoint
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ username, password }).exec();

    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
    } else {
      const token = generateToken();
      user.token = token;
      await user.save();

      const isAdmin = user.isAdmin;
      const name = user.name;

      res.status(200).json({ token, isAdmin, name });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  console.log("default");
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
