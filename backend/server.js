import express from "express";
import cors from "cors";
import path from "path";
import { promises as fs } from "fs";

const data = JSON.parse(
  await fs.readFile(new URL("./data.json", import.meta.url))
);

const app = express();
const port = 3002;

const __dirname = path.resolve();

app.use(cors());

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
