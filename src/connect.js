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
    let teste;
    try {
        teste = await connect.getConnection()
        console.log("Conectando. . .")
    } catch (error) {
        console.log(`Esse foi o erro na hora da conexão: ${error}`)
    } finally {
        if (teste) {
            teste.release();
            console.log("Conexão Estabelecida!");
        }
    }
}

export default connect;