import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
import userRoutes from "./routes/UserRoutes";
import { logger } from "./utils/logger";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: "https://ptitampa.netlify.app/"}));
app.use(express.json());
app.use("/api/auth", userRoutes);
AppDataSource.initialize()
  .then(() => {
    logger.info("Data Source has been initialized!");
    app.listen(port, () => {
      logger.info(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    logger.error("Error during Data Source initialization:", err);
  });
