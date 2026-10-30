import { healthCheck } from "../repository/healthRepository.js";

export const checkHealth = async (req, res) => {
    try {
        await healthCheck()
        res.status(200).json({ status: 'ok', banco: 'ok' })
    } catch (error) {
        res.status(503).json({ status: 'erro', banco: 'erro' })
    }
};