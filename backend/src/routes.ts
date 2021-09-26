import { Router } from 'express';
import { GetCepController } from './controllers/GetCepController';
import { ensureCepInCache } from './middlewares/ensureCepInCache';

const router = Router();

const getCepController = new GetCepController();

router.get('/ceps', ensureCepInCache, getCepController.handle);

export { router };
