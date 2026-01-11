const pool = require("./config/db.config");

(async () => {
  try {
    const res = await pool.query("SELECT current_database(), current_schema()");
    console.log("LIGAÇÃO OK:", res.rows[0]);
  } catch (err) {
    console.error("ERRO:", err.message);
  } finally {
    pool.end();
  }
})();
