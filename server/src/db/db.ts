import knex from "knex";
import KnexConfigs from "my-app-types/knexfile"; // Updated import path

const NODE_ENV = process.env.NODE_ENV || "development";
const db = knex(KnexConfigs[NODE_ENV]);

export default db;
