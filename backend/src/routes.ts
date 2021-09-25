import { Router } from 'express';

const router = Router();

router.get('/ceps', () => console.log('Rota get'));

export { router };
