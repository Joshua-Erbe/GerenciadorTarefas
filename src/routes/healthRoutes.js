import express from 'express';
import { checkHealth } from '../controllers/healthController.js';

const health_route = express.Router();

health_route.get('/health', checkHealth);

export default health_route;