import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import mongoose from "mongoose";
import { Favorite } from "./models/favorite.mjs";
import morgan from "morgan";

const app = express();

dotenv.config();

app.use(cors());

app.use(morgan("common"));

app.get("/starships", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/starships/");

    return res.status(200).json({ starships: response.data });
  } catch (e) {
    res.status(404).end();
  }
});

app.get("/favorites", async (req, res) => {
  const favorites = await Favorite.find();
  res.status(200).json({
    favorites: favorites,
  });
});

app.post("/favorites", async (req, res) => {
  const favName = req.body.name;
  const favType = req.body.type;
  const favUrl = req.body.url;

  try {
    if (favType !== "movie" && favType !== "character") {
      throw new Error('"type" should be "movie" or "character"!');
    }
    const existingFav = await Favorite.findOne({ name: favName });
    if (existingFav) {
      throw new Error("Favorite exists already!");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  const favorite = new Favorite({
    name: favName,
    type: favType,
    url: favUrl,
  });

  try {
    await favorite.save();
    res
      .status(201)
      .json({ message: "Favorite saved!", favorite: favorite.toObject() });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});

const dbURI = `mongodb://${process.env["DB_HOST"]}:${process.env["DB_PORT"]}/${process.env["DB_NAME"]}?authSource=admin`;

console.log(dbURI);

// ${process.env["DB_USER"]}:${process.env["DB_PASSWORD"]}

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(process.env.PORT);
    console.log(`app is running at port ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
