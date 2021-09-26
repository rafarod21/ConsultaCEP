import { Request, Response, NextFunction } from 'express';

import { myCache } from '../cache';
import { cepIsValid } from '../utils/cepIsValid';

export function ensureCepInCache(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const cep = String(request.query.cep).trim();

  if (!cepIsValid(cep)) {
    throw new Error('Incorrect CEP!');
  }

  // Verificar se o CEP pesquisado já existe na cache
  const valueCurrentCep = myCache.get(cep);
  if (valueCurrentCep == undefined) {
    return next();
  }

  console.log('CEP pego da cache');
  return response.json(valueCurrentCep);
}
