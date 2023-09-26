import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/api/todo";

dotenv.config();

const app: Express = express();
app.use(cors());
// app.use(express.json);

const PORT = process.env.PORT || 5000;

app.use("/todo", todoRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
