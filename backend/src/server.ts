import express from "express";
import dotenv from "dotenv";
const cors = require('cors');
import { linksRouter } from "./routes/linksGrpsRouter";

dotenv.config();

const app = express();

function main() {
  app.use(express.json());
  
  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    withCredentials: true,
    credentials: true,
  }));

  app.use("/api/v1/links", linksRouter);

  app.listen(process.env.PORT, () => {
    console.log(`Сервер запущен localhost:${process.env.PORT}`);
  });
}

main();
