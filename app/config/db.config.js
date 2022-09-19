const { Pool } = require("pg");
const env = require('./env.js');


const pool = new Pool({
    user: env.user || 'postgres',
    database: env.database,
    password: 'baeBoo23',
    port: env.port,
    host: env.host
});


(() => {
    pool.query("SELECT NOW()", (err, res) => {
        if (err) console.log("Database Connection Failed! Bad Config: ", err.message);
        if (res) console.log("Connected to PostgreSQL Database");
        
    });
})();

const runQuery = async (query, values = []) => {
    const { rows } = await pool.query(query, values);
    return rows;
};
module.exports = { runQuery };
