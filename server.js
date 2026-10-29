import express from 'express';
import tasks from './src/routes/tasksRoutes.js'
import users from './src/routes/usersRoutes.js'
import logs from './src/routes/logRoutes.js'
import connect, { TestConnect } from './src/connect.js';

const apiTarefas = express()

apiTarefas.use(express.json())
apiTarefas.use('/', tasks)
apiTarefas.use('/', users)
apiTarefas.use('/', logs)

apiTarefas.listen(3000, function() {
    TestConnect();
})

