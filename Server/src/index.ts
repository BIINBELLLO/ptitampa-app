import "reflect-metadata";
import express, { response } from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
import userRoutes from "./routes/UserRoutes";
import companyRoutes from "./routes/CompanyRoutes";
import { logger } from "./utils/logger";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: "*"}));
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/company", companyRoutes);
app.use("/", (req, res) => {res.send("ptitampa backend service")});
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
