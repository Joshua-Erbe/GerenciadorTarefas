import mysql from 'mysql2/promise';
import 'dotenv/config'

function conectarBanco () {
    const DBConnect = mysql.createPool({
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        waitForConnections: true,
        connectionLimit: 10
    })

    return DBConnect
};

const connect = conectarBanco();

export async function TestConnect() {
    try {
        console.log("Testando conexão. . .")
        await connect.query(`SELECT 1`)
        return true;
    } catch (error) {
        console.log(`Esse foi o erro na hora da conexão: ${error}`)
        return false
    }
}

export default connect;