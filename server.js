import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import data from "./data.json" assert { type: "json" };

const app = express();
const port = 3002;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.use(express.static(__dirname));

app.get("/api/recommended", (req, res) => {
  res.json(data.recommendedData);
});

app.get("/api/coffee", (req, res) => {
  res.json(data.coffeeData);
});

app.get("/api/tea", (req, res) => {
  res.json(data.teaData);
});

app.get("/api/pastries", (req, res) => {
  res.json(data.pastriesData);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
