import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432
});

async function testConnection() {
  try {
    await pool.query("SELECT NOW()");
    console.log("DB bağlantısı başarılı ✅");
  } catch (err) {
    console.log("DB bağlantı hatası ❌");
    console.error(err.message);
  }
}

testConnection();

