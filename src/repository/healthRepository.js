import poolconnect from '../connect.js'

export const healthCheck = async () => {
    try {
        await poolconnect.query(
            'SELECT 1'
        )
        return true
    } catch (error) {
        console.log(`Esse foi o erro encontrado ${error}`)
        throw new Error('Servidor não esta respondendo')
    }
}