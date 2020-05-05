import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.listen(port, () => console.log(`server is running on ${port} port`));
