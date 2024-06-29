import { DataSource } from "typeorm";
import { User } from "../entities/UserEntity";
import dotenv from "dotenv";
import { Company } from "../entities/CompanyEntity";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // Disable in production
  logging: false,
  entities: [User, Company],
  migrations: ["src/migrations/**/*.ts"],
});
