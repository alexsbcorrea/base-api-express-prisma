declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    NODE_ENV: "development" | "production" | "test";
    JWT_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    JWT_LIFETIME: string;
    DB_URL: string;
    DB_DIALECT:
      | "PostgreSQL"
      | "MySQL"
      | "SQL Server"
      | "SQLite"
      | "MongoDB"
      | "CockroachDB"
      | "Planetscale"
      | "MariaDB";
    REDIS_URL: string;
  }
}
