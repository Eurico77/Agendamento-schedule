module.exports= {
  "type": process.env.DB_TYPE || "postgres",
  "port": process.env.DB_PORT || 5432,
  "host": process.env.DB_HOST || "localhost",
  "username": process.env.DB_USER || "postgres",
  "password": process.env.DB_PASS || "root",
  "database": process.env.DB_NAME || "agendamento",
  "synchronize": true,
  "migrations": ["./src/database/migrations/*.ts"],
  "entities": ["./src/modules/**/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
 
}



