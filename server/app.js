import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

app.use(express.json({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api", routes);

app.use((err, req, res, next) => {
  // res.status(500).json({ message: err.message });
});

app.listen(port, () => console.log(`server is running on ${port} port`));
