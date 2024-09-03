import express from "express";
import axios from "axios";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import data from "./data.json" assert { type: "json" };

const app = express();
const port = 3002;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getCoffeeImage = async () => {
  try {
    const res = await axios.get("https://coffee.alexflipnote.dev/random.json");
    return res.data.file;
  } catch (err) {
    console.log(err);
  }
};

const addImages = async (dataCategory) => {
  return await Promise.all(
    dataCategory.map(async (obj) => ({
      ...obj,
      image: await getCoffeeImage(),
    }))
  );
};

const prepareData = async () => {
  return {
    recommendedData: await addImages(data["recommendedData"]),
    coffeeData: await addImages(data["coffeeData"]),
    teaData: await addImages(data["teaData"]),
    pastriesData: await addImages(data["pastriesData"]),
  };
};

let modifiedData;

const startServer = async () => {
  modifiedData = await prepareData();

  app.use(cors());

  app.use(express.static(__dirname));

  app.get("/api/recommended", (req, res) => {
    res.json(modifiedData.recommendedData);
  });

  app.get("/api/coffee", (req, res) => {
    res.json(modifiedData.coffeeData);
  });

  app.get("/api/tea", (req, res) => {
    res.json(modifiedData.teaData);
  });

  app.get("/api/pastries", (req, res) => {
    res.json(modifiedData.pastriesData);
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();
