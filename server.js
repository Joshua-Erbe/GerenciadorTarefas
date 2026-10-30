import express from 'express';
import tasks from './src/routes/tasksRoutes.js'
import users from './src/routes/usersRoutes.js'
import logs from './src/routes/logRoutes.js'
import health from './src/routes/healthRoutes.js'
import { TestConnect } from './src/connect.js';

const apiTarefas = express()

apiTarefas.use(express.json())
apiTarefas.use('/', tasks)
apiTarefas.use('/', users)
apiTarefas.use('/', logs)
apiTarefas.use('/', health)


async function testandoConnect(tentativa = 3, intervalo = 6000) {
    for (let i = 0; i < tentativa; i++) {
        const conectou = await TestConnect();
        if (conectou) {
            return true;
        }
        console.log(`Não foi possivel conectar, tentando novamente...`)

        await new Promise(resolve => setTimeout(resolve, intervalo));
    }
    return false
}

async function IniciarAPI() {
    const ok = await testandoConnect()

    if (!ok) {
        console.log("Servidor não esta disponivel no momento, tente novamente mais tarde!");
        process.exit(1);
    }

    apiTarefas.listen(3000, () => {
        console.log("Conexão estabelecida com sucesso")
    })
}

IniciarAPI();
