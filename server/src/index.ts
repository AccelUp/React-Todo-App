import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes/api/todo";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json);
const PORT = process.env.PORT || 5000;
// app.use("/todo", todoRoutes);

app.get("/api", (req, res) => {
  res.json({ Users: ["User One", "User Two"] });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
