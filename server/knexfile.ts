/**
 * @type { Record<string, import("knex").Knex.Config> }
 */

const knexConfigs = {
  development: {
    client: "postgresql",
    connection: "postgresql://postgres:ace16@localhost:5432/todoDB",
    searchPath: ["knex", "public"],
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default knexConfigs;
