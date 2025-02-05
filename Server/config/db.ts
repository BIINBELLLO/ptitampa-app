import { DataSource } from "typeorm";
import { User } from "../src/entities/User"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD?.toString(),
  database: process.env.DB_NAME,
  synchronize: true, // Disable in production
  logging: false,
  entities: [User],
  migrations: ["src/migrations/**/*.ts"],
});
