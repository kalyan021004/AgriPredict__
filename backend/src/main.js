import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import genaiRouter from "./gen_ai/api/genaiRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.json());

app.use("/api/genai", genaiRouter);

app.listen(process.env.PORT, () =>
  console.log(`GenAI backend running on ${process.env.PORT}`)
);
