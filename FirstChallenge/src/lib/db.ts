import { Sequelize } from "sequelize";
import { DATABASE } from "../config/constants";
console.log("DATABASE", DATABASE);
export const sequelize = new Sequelize(
  DATABASE.database,
  DATABASE.user,
  DATABASE.password,
  {
    host: DATABASE.host,
    dialect: "postgres",
    port: DATABASE.port as number,
  }
);
